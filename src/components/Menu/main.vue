<template>
  <ul class="menu" role="menu">
    <v-menu-option
      :disabled="option[keys.disabled]"
      :label="option[keys.type] === 'divider' ? null : option[keys.label] || option"
      :type="option[keys.type]"

      @click="selectOption(option)"
      @keydown.enter.prevent="selectOption(option)"
      @keydown.esc.stop="closeMenu"

      v-for="option in options"
      :key="option.id"
    >
      <slot name="option" :option="option"></slot>
    </v-menu-option>

    <div
      class="menu__focus-redirector"
      tabindex="0"

      @focus="redirectFocus"

      v-if="containFocus"
    ></div>
  </ul>
</template>

<script>
import VMenuOption from '../MenuOption';

export default {
  name: 'VMenu',
  props: {
    options: {
      type: Array,
      default() {
        return [];
      },
    },
    containFocus: {
      type: Boolean,
      default: false,
    },
    keys: {
      type: Object,
      default() {
        return {
          type: 'type',
          label: 'label',
          disabled: 'disabled',
        };
      },
    },
  },
  methods: {
    selectOption(option) {
      if (option.disabled || option.type === 'divider') {
        return;
      }
      this.$emit('select', option);
      this.closeMenu();
    },
    closeMenu() {
      this.$emit('close');
    },
    redirectFocus(e) {
      e.stopPropagation();
      this.$el.querySelector('.menu-option').focus();
    },
  },
  components: {
    VMenuOption,
  },
};
</script>

<style>
  .menu {
    list-style: none;
    margin: 4px;
    border-radius: 4px;
    max-height: 100vh;
    max-width: 272px;
    min-width: 168px;
    outline: none;
    overflow-x: hidden;
    overflow-y: auto;
    padding: 0;
    color: var(--body-text-color);
    background-color: white;
  }

  .menu__focus-redirector {
    position: absolute;
    opacity: 0;
  }

</style>
