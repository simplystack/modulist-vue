<template>
  <div class="radio">
    <input
      class="radio__input"
      type="radio"

      :id="id"
      :checked="checked"
      :disabled="disabled"
      :name="name"
      :tabindex="tabindex"
      :value="trueValue"

      @blur="onBlur"
      @change="onChange"
      @focus="onFocus"

    >
    <label class="radio__label" :for="id">{{ label }}</label>
  </div>
</template>

<script>
export default {
  name: 'VRadio',
  props: {
    id: {
      type: [String, Number],
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    tabindex: {
      type: [String, Number],
    },
    value: {
      type: [Number, String],
      required: true,
    },
    trueValue: {
      type: [Number, String],
      required: true,
    },
    checked: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  created() {
    if (this.checked) {
      this.$emit('input', this.trueValue);
    }
  },
  computed: {
    isChecked() {
      // eslint-disable-next-line eqeqeq
      return (String(this.value).length > 0) && (this.value == this.trueValue);
    },
  },
  methods: {
    onFocus(e) {
      this.isActive = true;
      this.$emit('focus', e);
    },
    onBlur(e) {
      this.isActive = false;
      this.$emit('blur', e);
    },
    onChange(e) {
      if (!this.disabled) {
        this.$emit('input', this.trueValue);
      }

      this.$emit('change', this.isChecked, e);
    },
    focus() {
      this.$refs.input.focus();
    },
  },
};
</script>
