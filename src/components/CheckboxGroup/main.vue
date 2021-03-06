<template>
  <div class="checkbox-group">
    <div class="checkbox-group__label">{{ label }}</div>
    <div class="checkbox-group__list">
      <div
        class="checkbox-group__item"
        :key="option[keys.id] || `${name}-${i}`"
        v-for="(option, i) in options"
      >
        <v-checkbox
          :id="option[keys.id] || `${name || option[keys.name]}-${i}`"
          :checked="isOptionCheckedByDefault(option)"
          :disabled="disabled || option[keys.disabled]"
          :key="option[keys.id]"
          :name="name || option[keys.name]"
          :label="option[keys.label] || option"

          @blur="onBlur"
          @change="onChange(arguments, option)"
          @focus="onFocus"

          v-model="checkboxValues[i]"
        />
      </div>
    </div>
  </div>
</template>

<script>
import VCheckbox from '../Checkbox';
import { looseIndexOf } from '../../helpers/util';

export default {
  name: 'VCheckboxGroup',
  props: {
    name: {
      type: String,
    },
    options: {
      type: Array,
      required: true,
    },
    value: {
      type: Array,
      required: true,
    },
    keys: {
      type: Object,
      default() {
        return {
          id: 'id',
          name: 'name',
          label: 'label',
          value: 'value',
          disabled: 'disabled',
        };
      },
    },
    label: {
      type: String,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    vertical: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    classes() {
      return [
        { 'checkbox-group--vertical': this.vertical },
      ];
    },
  },
  data() {
    return {
      ignoreChange: false,
      checkboxValues: [],
      initialValue: JSON.parse(JSON.stringify(this.value)),
    };
  },
  methods: {
    reset() {
      this.ignoreChange = true;
      this.options.forEach((option, index) => {
        this.checkboxValues[index] = this.isOptionCheckedByDefault(option);
      });
      this.ignoreChange = false;
      this.$emit('input', (this.initialValue.length > 0) ? [].concat(this.initialValue) : []);
    },
    isOptionCheckedByDefault(option) {
      return looseIndexOf(this.initialValue, option[this.keys.value] || option) > -1;
    },
    onFocus(e) {
      this.isActive = true;
      this.$emit('focus', e);
    },
    onBlur(e) {
      this.isActive = false;
      this.$emit('blur', e);
    },
    onChange(args, option) {
      if (this.ignoreChange) {
        return;
      }
      const checked = args[0];
      const e = args[1];
      let value = [];
      const optionValue = option[this.keys.value] || option;
      const i = looseIndexOf(this.value, optionValue);
      if (checked && i < 0) {
        value = this.value.concat(optionValue);
      }
      if (!checked && i > -1) {
        value = this.value.slice(0, i).concat(this.value.slice(i + 1));
      }
      this.$emit('input', value);
      this.$emit('change', value, e);
    },
  },
  components: { VCheckbox },
};
</script>
