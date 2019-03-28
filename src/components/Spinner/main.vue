<template>
  <div class="spinner" :class="classes"></div>
</template>

<script>
export default {
  name: 'VSpinner',
  props: {
    appearance: {
      type: String,
      default: 'default',
    },
  },
  computed: {
    classes() {
      return [
        `spinner--${this.appearance}`,
      ];
    },
  },
};
</script>
