<template>
  <li
    class="menu-option"
    ref="menuOption"
    role="menu-item"

    :class="classes"
    :tabindex="(isDivider || disabled) ? null : '0'"

    v-on="$listeners"
  >
    <slot v-if="!isDivider">
      <div class="menu-option__content">
        <div class="menu-option__text">{{ label }}</div>
      </div>
    </slot>
  </li>
</template>

<script>
export default {
  name: 'VMenuOption',
  props: {
    type: String,
    label: String,
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    classes() {
      return {
        'menu-option--divider': this.isDivider,
        'menu-option--disabled': this.disabled,
      };
    },
    isDivider() {
      return this.type === 'divider';
    },
  },
};
</script>
