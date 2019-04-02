<template>
  <li
    @click="onClick"
    class="step"
    :class="classes"
  >
    <button class="step__marker">
      <span class="step__label" v-if="!hideLabel">{{ title }}</span>
    </button>
  </li>
</template>

<script>
export default {
  name: 'VStep',
  props: {
    id: {
      type: Number,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    hideLabel: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {};
  },
  computed: {
    isActive() {
      return this.$parent.currentStep === this.id;
    },
    isPrevious() {
      return this.$parent.currentStep > this.id;
    },
    isNext() {
      return this.$parent.currentStep < this.id;
    },
    classes() {
      return [
        { 'step--completed': this.isPrevious || this.isActive },
        { 'step--active': this.isActive },
      ];
    },
  },
  methods: {
    onClick() {
      this.$emit('click');
    },
  },
};
</script>
