<template>
  <button class="button" :class="classes" :disabled="disabled">
    <slot name="icon"></slot>
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'VButton',
  props: {
    appearance: {
      type: String,
      default: 'default',
      validator(appearance) {
        return ['default', 'primary', 'alternative', 'subtle', 'success', 'danger'].indexOf(appearance) > -1;
      },
    },
    loading: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    classes() {
      return [
        `button--${this.appearance}`,
        { 'button--loading': this.loading },
      ];
    },
  },
};
</script>
