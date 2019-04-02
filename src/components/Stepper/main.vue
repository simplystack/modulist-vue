<template>
  <div class="stepper">
    <ol class="stepper__list">
      <v-step
        :key="step.id"
        v-for="step in steps"
        :id="step.id"
        :title="step.title"
        :hideLabel="hideLabel"
        @click="onClick(step.id)"
      ></v-step>
    </ol>
    <div
      role="progressbar"
      class="stepper__bar"
      aria-valuemin="0"
      aria-valuemax="100"
      :aria-valuenow="currentProgress"
    >
      <span class="stepper__bar-value" :style="{ width: currentProgress }"></span>
    </div>
  </div>
</template>

<script>
import VStep from './step.vue';

export default {
  name: 'VStepper',
  props: {
    steps: {
      type: Array,
      required: true,
    },
    value: {
      type: Number,
      default: 1,
    },
    manual: {
      type: Boolean,
      default: false,
    },
    disablePrev: {
      type: Boolean,
      default: false,
    },
    hideLabel: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      currentStep: this.value,
    };
  },
  mounted() {
    this.onChange(this.currentStep);
  },
  computed: {
    progressRange() {
      return this.steps.length - 1;
    },
    progressForEachItem() {
      return 100 / this.progressRange;
    },
    currentProgress() {
      const initialProgress = 0;
      const progress = (initialProgress + this.progressForEachItem) * (this.currentStep - 1);
      return `${progress}%`;
    },
  },
  methods: {
    setStep(step) {
      this.onChange(step);
    },
    nextStep() {
      const limit = this.steps.length - 1;
      if (this.currentStep <= limit) {
        this.onChange(this.currentStep + 1);
      }
    },
    prevStep() {
      const limit = this.steps[0].id;
      if (this.currentStep > limit && !this.disablePrev) {
        this.onChange(this.currentStep - 1);
      }
    },
    onChange(id) {
      if (id < this.currentStep && this.disablePrev) return;

      this.currentStep = id;
      this.$emit('change', id);
      this.$emit('input', id);
    },
    onClick(id) {
      if (this.manual) return;
      this.onChange(id);
    },
  },
  watch: {
    value(newVal) {
      this.currentStep = newVal;
    },
  },
  components: { VStep },
};
</script>
