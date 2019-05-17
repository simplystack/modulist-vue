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
      :max="max"
      :maxlength="maxlength ? maxlength : null"
      :min="min"
      :number="type === 'number' ? true : null"
      :step="step"
      :type="type"

      @blur="handleBlur"
      @change="handleChange"
      @focus="handleFocus"
      @input="handleInput"

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

      @blur="handleBlur"
      @change="handleChange"
      @focus="handleFocus"
      @input="handleInput"

      ref="textarea"
      class="textbox__textarea"
    ></textarea>

    <span class="textbox__message" v-if="error && errorText">{{ errorText }}</span>

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
    size: {
      type: String,
      default: '4',
      validator(size) {
        return ['3', '4'].indexOf(size) > -1;
      },
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
    min: {
      type: Number,
      default: -Infinity,
    },
    max: {
      type: Number,
      default: Infinity,
    },
    step: {
      type: Number,
      default: 1,
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
      default: true,
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
    classes() {
      return [
        `textbox--size-${this.size}`,
        { 'textbox--floated': this.floated },
        { 'textbox--floated-active': this.floated && this.value !== '' },
        { 'textbox--wide': this.wide },
        { 'textbox--error': this.error },
      ];
    },
    nativeInputValue() {
      return this.value === null || this.value === undefined ? '' : String(this.value);
    },
  },
  data() {
    return {
      isTouched: false,
      isFocused: false,
      initialValue: this.value,
    };
  },
  mounted() {
    this.setNativeInputValue();
  },
  methods: {
    getInput() {
      return this.$refs.input || this.$refs.textarea;
    },
    focus() {
      this.getInput().focus();
    },
    blur() {
      this.getInput().blur();
    },
    select() {
      this.getInput().select();
    },
    clear() {
      this.$emit('input', '');
      this.$emit('change', '');
      this.$emit('clear');
    },
    reset() {
      this.$emit('input', this.initialValue);
      this.$emit('change', this.initialValue);
      this.$emit('reset');
    },
    handleBlur(event) {
      this.isFocused = false;
      this.$emit('blur', event);
    },
    handleFocus(event) {
      this.isFocused = true;
      this.$emit('focus', event);
    },
    handleInput(event) {
      if (event.target.value === this.nativeInputValue) return;

      this.$emit('input', event.target.value);

      this.$nextTick(this.setNativeInputValue);
    },
    handleChange(event) {
      this.$emit('change', event.target.value);
    },
    setNativeInputValue() {
      const input = this.getInput();
      if (!input) return;
      if (input.value === this.nativeInputValue) return;
      input.value = this.nativeInputValue;
    },
  },
  watch: {
    nativeInputValue() {
      this.setNativeInputValue();
    },
    type() {
      this.$nextTick(() => {
        this.setNativeInputValue();
      });
    },
  },
};
</script>
