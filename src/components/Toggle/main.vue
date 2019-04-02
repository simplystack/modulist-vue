<template>
  <label :for="id" class="toggle" :class="classes">
    <input
      :id="id"
      :name="name"
      :disabled="disabled"
      :checked.prop="isChecked"
      :value="submittedValue"
      :tabindex="tabindex"

      ref="input"
      type="checkbox"
      class="toggle__input"

      @blur="onBlur"
      @focus="onFocus"
      @change="onChange"
    >
    <span class="toggle__container"></span>
    <span class="toggle__text">{{ label }}</span>
  </label>
</template>

<script>
import { looseEqual } from '../../helpers/util';

export default {
  name: 'VToggle',
  props: {
    id: {
      type: [String, Number],
    },
    name: {
      type: String,
    },
    label: {
      type: [String, Number],
    },
    value: {
      required: true,
    },
    submittedValue: {
      type: String,
      default: 'on', // HTML default
    },
    checked: {
      type: Boolean,
      default: false,
    },
    trueValue: {
      default: true,
    },
    falseValue: {
      default: false,
    },
    indeterminate: {
      type: Boolean,
      default: false,
    },
    tabindex: [String, Number],
    vertical: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      isChecked: looseEqual(this.value, this.trueValue) || this.checked,
    };
  },
  created() {
    this.$emit('input', this.isChecked ? this.trueValue : this.falseValue);
  },
  computed: {
    classes() {
      return [
        { 'toggle--vertical': this.vertical },
      ];
    },
  },
  methods: {
    focus() {
      this.$refs.input.focus();
    },
    onChange(e) {
      const isCheckedPrevious = this.isChecked;
      const isChecked = e.target.checked;
      this.$emit('input', isChecked ? this.trueValue : this.falseValue, e);
      if (isCheckedPrevious !== isChecked) {
        this.$emit('change', isChecked ? this.trueValue : this.falseValue, e);
      }
    },
    onFocus(e) {
      this.$emit('focus', e);
    },
    onBlur(e) {
      this.$emit('blur', e);
    },
  },
  watch: {
    value() {
      this.isChecked = looseEqual(this.value, this.trueValue);
    },
  },
};
</script>
