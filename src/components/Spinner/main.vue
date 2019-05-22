<template>
  <div class="spinner" :class="classes"></div>
</template>

<script>
export default {
  name: 'VSpinner',
  props: {
    appearance: {
      type: String,
      default: 'primary',
      validator(appearance) {
        return ['default', 'primary'].indexOf(appearance) > -1;
      },
    },
    size: {
      type: String,
      default: '3',
      validator(appearance) {
        return ['1', '2', '3', '4'].indexOf(appearance) > -1;
      },
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
