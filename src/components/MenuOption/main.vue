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

<style>
  .menu-option {
    display: flex;
    position: relative;
    user-select: none;
    width: 100%;
  }
  .menu-option--divider {
    background-color: var(--gray-200);
    display: block;
    height: 1px;
    margin: 6px 0;
    padding: 0;
  }
  .menu-option:not(.menu-option--divider) {
    cursor: pointer;
    font-weight: normal;
    min-height: 40px;
    outline: none;
    border-radius: 4px;
  }
  .menu-option:hover:not(.menu-option--disabled):not(.menu-option--divider) {
    background-color: var(--selectable-item-bg-color-hover);
  }
  .menu-option:active:not(.menu-option--disabled):not(.menu-option--divider) {
    background-color: var(--selectable-item-bg-color-active);
  }
  .menu-option:focus:not(.menu-option--disabled):not(.menu-option--divider) {
    box-shadow: inset 0 0 0 2px var(--blue-300);
  }
  .menu-option__content {
    align-items: center;
    display: flex;
    height: 40px;
    padding: 0 16px;
  }
  .menu-option__text {
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    flex-grow: 1;
  }
</style>
