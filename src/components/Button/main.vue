<template>
  <button class="button" :class="classes" :disabled="disabled" :type="type">
    <slot></slot>
    <div class="button__icon" v-if="$slots.icon">
      <slot name="icon"></slot>
    </div>
  </button>
</template>

<script>
export default {
  name: 'VButton',
  props: {
    type: {
      type: String,
      default: 'button',
    },
    appearance: {
      type: String,
      default: 'default',
      validator(appearance) {
        return ['default', 'primary', 'alternative', 'subtle', 'success', 'danger'].indexOf(appearance) > -1;
      },
    },
    size: {
      type: String,
      default: '3',
      validator(appearance) {
        return ['0', '1', '2', '3', '4'].indexOf(appearance) > -1;
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
    iconFirst: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    classes() {
      return [
        `button--${this.appearance}`,
        `button--size-${this.size}`,
        { 'button--loading': this.loading },
        { 'button--icon-first': this.iconFirst },
      ];
    },
  },
};
</script>
