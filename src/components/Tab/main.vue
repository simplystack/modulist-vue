<template>
  <div
    class="tab"
    role="tabpanel"

    :id="id"
    :aria-hidden="!isActive ? 'true' : null"
    :tabindex="isActive ? '0' : null"
    :class="{ 'tab--active': isActive, 'tab--disabled': disabled }"
  >
    <slot></slot>
  </div>
</template>

<script>
import UUID from '../../helpers/uuid';

export default {
  name: 'VTab',
  props: {
    id: {
      type: String,
      default() {
        return UUID.short('tab-');
      },
    },
    title: String,
    selected: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      isActive: false,
    };
  },
  created() {
    this.$parent.addTab(this);
  },
  beforeDestroy() {
    this.$parent.removeTab(this);
  },
  methods: {
    activate() {
      this.isActive = true;
      this.$emit('select', this.id);
    },
    deactivate() {
      this.isActive = false;
      this.$emit('deselect', this.id);
    },
  },
  watch: {
    disabled() {
      this.$parent.onTabDisabledChange(this);
    },
  },
};
</script>
