<template>
  <div class="radio-group" :class="classes">
    <div class="radio-group__label">{{ label }}</div>

    <div class="radio-group__list">
      <div
        class="radio-group__item"
        :key="option[keys.id] || `${name}-${i}`"
        v-for="(option, i) in options"
      >
        <v-radio
          :id="option[keys.id] || `${name}-${i}`"
          :label="option[keys.label] || option"
          :checked="isOptionCheckedByDefault(option)"
          :disabled="disabled || option[keys.disabled]"
          :key="option[keys.id]"
          :name="name"
          :tabindex="tabindex"
          :true-value="option[keys.value] || option"

          @blur="onBlur"
          @focus="onFocus"

          v-model="selectedOptionValue"
        />
      </div>
    </div>
  </div>
</template>

<script>
import VRadio from '../Radio';

export default {
  name: 'VRadioGroup',
  props: {
    name: {
      type: String,
      required: true,
    },
    tabindex: {
      type: [String, Number],
    },
    label: {
      type: String,
    },
    options: {
      type: Array,
      required: true,
    },
    value: {
      type: [Number, String],
      required: true,
    },
    keys: {
      type: Object,
      default() {
        return {
          id: 'id',
          label: 'label',
          value: 'value',
          checked: 'checked',
          disabled: 'disabled',
        };
      },
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
        { 'radio-group--vertical': this.vertical },
      ];
    },
  },
  data() {
    return {
      initialValue: this.value,
      selectedOptionValue: this.value,
    };
  },
  methods: {
    reset() {
      this.$emit('input', this.initialValue);
    },
    isOptionCheckedByDefault(option) {
      // eslint-disable-next-line eqeqeq
      return this.initialValue == option[this.keys.value] || this.initialValue == option
        || option[this.keys.checked];
    },
    onFocus(e) {
      this.$emit('focus', e);
    },
    onBlur(e) {
      this.$emit('blur', e);
    },
  },
  watch: {
    selectedOptionValue() {
      this.$emit('input', this.selectedOptionValue);
      this.$emit('change', this.selectedOptionValue);
    },
    value() {
      this.selectedOptionValue = this.value;
    },
  },
  components: { VRadio },
};
</script>
