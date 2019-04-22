<template>
  <div class="alert" :class="classes">
    <div class="alert__body">
      <div class="alert__title">{{ title }}</div>
      <div class="alert__text">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VAlert',
  props: {
    title: {
      type: String,
      default: 'Default title',
    },
    type: {
      type: String,
      default: 'info',
      validator(type) {
        return ['info', 'success', 'warning', 'error'].indexOf(type) > -1;
      },
    },
    wide: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    classes() {
      return [
        `alert--${this.type}`,
        { 'alert--wide': this.wide },
      ];
    },
  },
};
</script>
