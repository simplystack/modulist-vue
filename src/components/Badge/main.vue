<template>
  <div class="badge" :class="classes" v-text="text"></div>
</template>

<script>
export default {
  name: 'VBadge',
  props: {
    type: {
      type: String,
      default: 'default',
      validator(appearance) {
        return ['default', 'primary', 'alternative', 'warning', 'success', 'danger'].indexOf(appearance) > -1;
      },
    },
    text: {
      type: [String, Number],
      required: true,
    },
  },
  computed: {
    classes() {
      return [
        `badge--${this.type}`,
      ];
    },
  },
};
</script>
