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
      validator(type) {
        return ['default', 'primary', 'alternative', 'warning', 'success', 'danger'].indexOf(type) > -1;
      },
    },
    align: {
      type: String,
      default: 'middle',
      validator(align) {
        return ['top', 'middle', 'bottom'].indexOf(align) > -1;
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
        `badge--align-${this.align}`,
      ];
    },
  },
};
</script>
