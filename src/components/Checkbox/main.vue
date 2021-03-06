<template>
  <label :for="id" class="checkbox" :class="{ 'checkbox--indeterminate' : indeterminate }">
    <input
      :id="id"
      :name="name"
      :disabled="disabled"
      :checked.prop="isChecked"
      :value="submittedValue"
      :tabindex="tabindex"

      ref="input"
      type="checkbox"
      class="checkbox__input"

      @blur="onBlur"
      @focus="onFocus"
      @change="onChange"
    >
    <span class="checkbox__mark"></span>
    <span class="checkbox__text" v-text="label"></span>
  </label>
</template>

<script>
import { looseEqual } from '../../helpers/util';

export default {
  name: 'VCheckbox',
  props: {
    id: {
      type: [String, Number],
    },
    name: {
      type: String,
    },
    label: {
      type: [String, Number],
      required: false,
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
  methods: {
    onFocus(e) {
      this.$emit('focus', e);
    },
    onBlur(e) {
      this.$emit('blur', e);
    },
    onChange(e) {
      const isCheckedPrevious = this.isChecked;
      const isChecked = e.target.checked;

      this.$emit('input', isChecked ? this.trueValue : this.falseValue, e);

      if (isCheckedPrevious !== isChecked) {
        this.$emit('change', isChecked ? this.trueValue : this.falseValue, e);
      }
    },
    focus() {
      this.$refs.input.focus();
    },
  },
  watch: {
    value() {
      this.isChecked = looseEqual(this.value, this.trueValue);
    },
  },
};
</script>
