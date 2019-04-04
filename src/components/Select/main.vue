<template>
  <div
    class="select"
    :class="classes"

    v-clickoutside="handleClickOutside"
  >

    <label
      class="select__label"
      :for="name || id"
    >
      {{ label }}
    </label>

    <input
      type="hidden"
      :name="name || id"
      :value="value.value"
      :disabled="disabled"
    >

    <div
      ref="container"
      class="select__container"

      :tabindex="disabled ? null : tabindex"

      @focus="onFocus"
      @click="toggleDropdown"
      @keydown.space.prevent="toggleDropdown"
      @keydown.enter.prevent="toggleDropdown"
    >
      <div class="select__display" ref="toggle">

        <slot
          v-if="isSlotDisplayed"
          name="option"
          :option="multiple ? mutableValue[0] : mutableValue"
        >
        </slot>

        <div
          v-if="(
            $scopedSlots.option && mutableValue.length === 2)
            || (!$scopedSlots.option && mutableValue.length > 0 && multiple
          )"
        >
          <v-chip
            class="select__selected-option"

            :title="mutableValue[0].label"

            closable

            @click.stop
            @keydown.delete.stop="deleteSelectedOption($event, mutableValue[0])"
            @delete="deleteSelectedOption($event, mutableValue[0])"
          />
          <v-chip
            v-if="mutableValue.length > 1"
            :title="`+ ${mutableValue.length - 1}`"
          />
        </div>

        <div v-if="mutableValue && !$scopedSlots.option">{{ mutableValue[keys.label] }}</div>

        <div class="select__placeholder" v-if="isPlaceholderVisible">{{ placeholder }}</div>
      </div>

      <svg
        v-if="isSlotDisplayed && clearable"
        @click.stop="clear"
        class="select__clear"
        height="16"
        width="16"
      >
        <use xlink:href="#cross-icon"></use>
      </svg>

      <svg v-else class="select__chevron" width="18px" height="18px">
        <use xlink:href="#chevron-down-icon"></use>
      </svg>
    </div>

    <div
      ref="dropdown"
      tabindex="-1"
      class="select__dropdown"
      @keydown.esc.prevent="closeDropdown()"
      @keydown.down.prevent="highlightOption('next')"
      @keydown.enter.prevent.stop="handleOnEnterSelectOption"
      @keydown.tab="onBlur"
      @keydown.up.prevent="highlightOption('prev')"
    >
      <div class="select__filter-wrapper" v-if="filterable">
        <input
          tabindex="0"
          ref="filter"
          type="text"
          placeholder="Search"
          v-model="query"
          class="select__filter"
          autocomplete="off"
        >
      </div>

      <v-select-option
        ref="options"
        v-for="(option, index) in filteredOptions"

        :option="option"
        :multiple="multiple"
        :key="index"
        :keys="keys"
        :disabled="option[keys.disabled]"
        :selected="isOptionSelected(option)"
        :highlighted="highlightedIndex === index"

        @click.native.stop="select(option, index)"
      >
        <slot
          name="option"

          :index="index"
          :option="option"
        ></slot>
      </v-select-option>

    </div>

  </div>
</template>

<script>
import fuzzysearch from 'fuzzysearch';
import VSelectOption from '../SelectOption';
import VChip from '../Chip';
import clickoutside from '../../directives/clickoutside';
import { isObjectEmpty } from '../../helpers/util';
import { scrollIntoView, resetScroll } from '../../helpers/element-scroll';

export default {
  name: 'VSelect',
  directives: {
    clickoutside,
  },
  props: {
    id: {
      type: [Number, String],
    },
    tabindex: {
      type: [Number, String],
      default: 0,
    },
    name: {
      type: String,
    },
    label: {
      type: String,
      default: 'Label',
    },
    value: {
      type: [Array, Object],
      required: true,
    },
    multiple: {
      type: Boolean,
    },
    filterable: {
      type: Boolean,
    },
    clearable: {
      type: Boolean,
    },
    loading: {
      type: Boolean,
    },
    disabled: {
      type: Boolean,
    },
    placeholder: {
      type: String,
      default: 'Placeholder',
    },
    options: {
      type: Array,
      default() {
        return [];
      },
    },
    keys: {
      type: Object,
      default() {
        return {
          label: 'label',
          value: 'value',
          image: 'image',
          disabled: 'disabled',
        };
      },
    },
  },
  created() {
    this.mutableValue = this.multiple ? [] : this.value;
    this.mutableOptions = this.options.slice(0);
  },
  data() {
    return {
      query: '',
      isOpen: false,
      isActive: false,
      mutableValue: null,
      mutableOptions: [],
      highlightedIndex: -1,
    };
  },
  computed: {
    classes() {
      return [
        { 'select--open': this.isOpen },
        { 'select--disabled': this.disabled },
      ];
    },
    isSlotDisplayed() {
      if (this.multiple) {
        return this.mutableValue.length > 0 && this.mutableValue.length <= 1;
      }
      return this.mutableValue !== '' && !isObjectEmpty(this.mutableValue);
    },
    isPlaceholderVisible() {
      return this.mutableValue === ''
        || this.mutableValue === null
        || this.mutableValue.length === 0
        || Object.keys(this.mutableValue).length === 0;
    },
    filteredOptions() {
      if (!this.filterable) {
        return this.mutableOptions;
      }
      return this.mutableOptions.filter((option, index) => this.defaultFilter(option, index));
    },
  },
  methods: {
    handleClickOutside() {
      if (this.isOpen) {
        this.closeDropdown();
      } else if (this.isActive) {
        this.isActive = false;
      }
    },
    handleOnEnterSelectOption() {
      const option = this.filteredOptions[this.highlightedIndex];
      this.select(option);
    },
    select(option) {
      if (option.disabled) {
        return;
      }
      if (this.multiple) {
        if (this.isOptionSelected(option)) {
          this.deselect(option);
        } else {
          this.mutableValue.push(option);
          this.setValue(this.mutableValue);
        }
      } else {
        this.setValue(option);
        this.closeDropdown();
      }
      this.$emit('select', option);
    },
    deselect(option) {
      const indexOfOption = this.mutableValue.indexOf(option);
      this.mutableValue.splice(indexOfOption, 1);
    },
    setValue(value) {
      this.mutableValue = value;
      this.$emit('input', value);
      this.$emit('change', value);
    },
    toggleDropdown() {
      this[this.isOpen ? 'closeDropdown' : 'openDropdown']();
    },
    onOpen() {
      this.$nextTick(() => {
        this.$refs.dropdown.focus();
        this.scrollOptionIntoView(this.$refs.dropdown.querySelector('.select-option--selected'));
      });
    },
    onBlur() {
      this.isActive = false;
      this.$emit('blur');
      if (this.isOpen) {
        this.closeDropdown();
      }
    },
    onFocus() {
      this.isActive = true;
      this.$emit('focus');
    },
    openDropdown() {
      if (!this.disabled) {
        this.isOpen = true;
        this.$refs.dropdown.focus();
      }
    },
    closeDropdown() {
      this.isOpen = false;
      this.$refs.container.focus();
      this.$nextTick(() => {
        this.query = '';
      });
    },
    isOptionSelected(option) {
      if (this.multiple) {
        return this.mutableValue
          .some(value => value[this.keys.label] === option[this.keys.label]);
      }
      return this.mutableValue[this.keys.label] === option[this.keys.label];
    },
    clear() {
      if (this.multiple) {
        this.setValue([]);
      } else {
        this.setValue({});
      }

      this.highlightedIndex = -1;

      this.$emit('clear');

      this.$nextTick(() => {
        resetScroll(this.$refs.dropdown);
      });
    },
    reset() {
      this.clear();
    },
    deleteSelectedOption(e, option) {
      const index = this.mutableValue.indexOf(option);
      if (index > -1) {
        this.mutableValue.splice(index, 1);
      }
      e.stopPropagation();
    },
    defaultFilter(option) {
      const query = this.query.toLowerCase();
      let text = option[this.keys.label];
      if (typeof text === 'string') {
        text = text.toLowerCase();
      }
      return fuzzysearch(query, text);
    },
    highlightOption(direction) {
      if (this.$refs.options.length === this.highlightedIndex) return;

      if (direction === 'next') {
        this.highlightedIndex = this.highlightedIndex + 1;
        if (this.highlightedIndex === this.$refs.options.length) {
          this.highlightedIndex = 0;
        }
      }
      if (direction === 'prev') {
        this.highlightedIndex = this.highlightedIndex - 1;
        if (this.highlightedIndex < 0) {
          this.highlightedIndex = this.$refs.options.length - 1;
        }
      }

      const option = this.filteredOptions[this.highlightedIndex];

      if (option.disabled) {
        this.highlightOption(direction);
      }

      this.$nextTick(() => {
        this.scrollOptionIntoView(this.$refs.options[this.highlightedIndex].$el);
      });
    },
    scrollOptionIntoView(optionEl) {
      scrollIntoView(optionEl, {
        container: this.$refs.dropdown,
        marginTop: 8,
      });
    },
  },
  watch: {
    value(val) {
      this.mutableValue = val;
    },
    options(val) {
      this.mutableOptions = val;
    },
    isOpen() {
      if (this.isOpen) {
        this.onOpen();
        this.$emit('open');
      } else {
        this.$emit('close');
      }
    },
    query() {
      this.highlightedIndex = 0;
    },
  },
  components: { VSelectOption, VChip },
};
</script>
