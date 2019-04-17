<template>
  <label class="textbox" :class="classes">
    <span class="textbox__label">{{ label }}</span>

    <input
      v-if="!multiline"
      v-autofocus="autofocus"

      :autocomplete="autocomplete ? autocomplete : null"
      :disabled="disabled"
      :readonly="readonly"
      :placeholder="placeholder"
      :name="name"
      :id="id"
      :tabindex="tabindex"
      :max="maxValue"
      :maxlength="maxlength ? maxlength : null"
      :min="minValue"
      :number="type === 'number' ? true : null"
      :step="stepValue"
      :type="type"
      :value="value"

      @blur="onBlur"
      @change="onChange"
      @focus="onFocus"
      @input="updateValue($event.target.value)"
      @keydown.enter="onKeydownEnter"
      @keydown="onKeydown"

      ref="input"
      class="textbox__input"
    >

    <textarea
      v-else
      v-autofocus="autofocus"

      :autocomplete="autocomplete ? autocomplete : null"
      :maxlength="maxlength ? maxlength : null"
      :disabled="disabled"
      :readonly="readonly"
      :placeholder="placeholder"
      :name="name"
      :id="id"
      :rows="rows"
      :tabindex="tabindex"
      :value="value"

      @blur="onBlur"
      @change="onChange"
      @focus="onFocus"
      @input="updateValue($event.target.value)"
      @keydown.enter="onKeydownEnter"
      @keydown="onKeydown"

      ref="textarea"
      class="textbox__textarea"
    ></textarea>

    <span class="textbox__error" v-if="error && errorText">{{ errorText }}</span>

  </label>
</template>

<script>
import autofocus from '../../directives/autofocus';

export default {
  name: 'VTextbox',
  directives: {
    autofocus,
  },
  props: {
    id: {
      type: [String, Number],
    },
    name: {
      type: String,
    },
    label: {
      type: String,
      required: true,
    },
    value: {
      type: [String, Number],
      default: '',
    },
    type: {
      type: String,
      default: 'text',
    },
    placeholder: {
      type: String,
    },
    tabindex: [String, Number],
    multiline: {
      type: Boolean,
      default: false,
    },
    rows: {
      type: Number,
      default: 2,
    },
    min: Number,
    max: Number,
    step: {
      type: String,
      default: 'any',
    },
    maxlength: Number,
    readonly: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    floated: {
      type: Boolean,
      default: false,
    },
    wide: {
      type: Boolean,
      default: true,
    },
    error: {
      type: Boolean,
      default: false,
    },
    errorText: {
      type: String,
    },
    autocomplete: String,
    autofocus: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    minValue() {
      if (this.type === 'number' && this.min !== undefined) {
        return this.min;
      }
      return null;
    },
    maxValue() {
      if (this.type === 'number' && this.max !== undefined) {
        return this.max;
      }
      return null;
    },
    stepValue() {
      return this.type === 'number' ? this.step : null;
    },
    classes() {
      return [
        { 'textbox--floated': this.floated },
        { 'textbox--floated-active': this.floated && this.value !== '' },
        { 'textbox--wide': this.wide },
        { 'textbox--error': this.error },
      ];
    },
  },
  data() {
    return {
      isTouched: false,
      initialValue: this.value,
    };
  },
  created() {
    // If value is null, set it to empty string
    if (this.value === null) {
      this.initialValue = '';
      this.updateValue('');
    }
  },
  methods: {
    updateValue(value) {
      this.$emit('input', value);
    },
    onChange(e) {
      this.$emit('change', this.value, e);
    },
    onFocus(e) {
      this.$emit('focus', e);
    },
    onBlur(e) {
      this.$emit('blur', e);
      if (!this.isTouched) {
        this.isTouched = true;
        this.$emit('touch');
      }
    },
    onKeydown(e) {
      this.$emit('keydown', e);
    },
    onKeydownEnter(e) {
      this.$emit('keydown-enter', e);
    },
    reset() {
      if (
        document.activeElement === this.$refs.input
        || document.activeElement === this.$refs.textarea
      ) {
        document.activeElement.blur();
      }
      this.updateValue(this.initialValue);
      this.resetTouched();
    },
    resetTouched(options = { touched: false }) {
      this.isTouched = options.touched;
    },
    focus() {
      (this.$refs.input || this.$refs.textarea).focus();
    },
  },
};
</script>
