<template>
  <div class="progress" :class="classes">
    <div
      class="progress__bar"
      role="progressbar"

      :aria-valuemax="100"
      :aria-valuemin="0"
      :aria-valuenow="moderatedProgress"
      :style="{ 'width': `${moderatedProgress}%` }"

      v-if="type === 'determinate'"
    ></div>

    <div
      class="progress__bar"
      role="progressbar"

      :aria-valuemax="100"
      :aria-valuemin="0"

      v-else
    ></div>
  </div>
</template>

<script>
export default {
  name: 'VProgress',
  props: {
    type: {
      type: String,
      default: 'indeterminate',
      validator(type) {
        return ['indeterminate', 'determinate'].indexOf(type) > -1;
      },
    },
    progress: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    classes() {
      return [
        `progress--${this.type}`,
      ];
    },
    moderatedProgress() {
      if (this.progress < 0) {
        return 0;
      }
      if (this.progress > 100) {
        return 100;
      }
      return this.progress;
    },
  },
};
</script>
