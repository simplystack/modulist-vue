<template>
  <div class="popover" @keydown.esc="close" :class="{'popover--has-max-height': hasMaxHeight}">

    <slot name="toggle"></slot>

    <div
      ref="content"
      role="dialog"
      class="popover__content"
      aria-haspopup="true"
      :aria-expanded="isActive ? 'true' : 'false'"
      tabindex="-1"
      v-if="isActive"
    >
      <slot></slot>

      <div class="popover__focus-redirector" tabindex="0" @focus="restrictFocus"></div>
    </div>
  </div>
</template>

<script>
import Popper from 'popper.js';

export default {
  name: 'VPopover',
  props: {
    trigger: {
      type: String,
      default: 'click',
    },
    containFocus: {
      type: Boolean,
      default: false,
    },
    hasMaxHeight: {
      type: Boolean,
      default: true,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    placement: {
      type: String,
      default: 'bottom',
    },
    offset: {
      type: [String, Number],
      default: '0',
    },
    manualOpen: {
      type: Boolean,
      default: false,
    },
    manualClose: {
      type: Boolean,
      default: false,
    },
    returnFocusOnClose: {
      type: Boolean,
      default: true,
    },
    focusRedirector: Function,
  },
  data() {
    return {
      isActive: false,
      popperInstance: null,
      focusedElBeforeOpen: null,
    };
  },
  mounted() {
    this.addEventsListeners();
  },
  computed: {
    triggerEl() {
      return this.$el.children[0];
    },
    popperOptions() {
      return {
        placement: this.placement,
        modifiers: {
          offset: {
            offset: this.offset,
          },
        },
      };
    },
  },
  methods: {
    addEventsListeners() {
      switch (this.trigger) {
        case 'click':
          if (!this.manualClose) document.addEventListener('click', this.handleClickOutside, true);
          if (!this.manualOpen) this.triggerEl.addEventListener('click', this.toggle);
          break;
        case 'hover':
          if (!this.manualOpen) this.triggerEl.addEventListener('mouseenter', this.show);
          if (!this.manualClose) document.addEventListener('mousemove', this.handleClickOutside, true);
          break;
        default:
          throw new Error(`[popover] ${this.trigger} is not defined`);
      }
    },
    removeEventsListeners() {
      switch (this.trigger) {
        case 'click':
          if (!this.manualClose) document.removeEventListener('click', this.handleClickOutside, true);
          this.triggerEl.removeEventListener('click', this.toggle);
          break;
        case 'hover':
          if (!this.manualOpen) this.triggerEl.removeEventListener('mouseenter', this.show);
          if (!this.manualClose) document.removeEventListener('mousemove', this.handleClickOutside, true);
          break;
        default:
          throw new Error(`[popover] ${this.trigger} is not defined`);
      }
    },
    toggle() {
      if (this.isActive) {
        this.close();
      } else {
        this.show();
      }
    },
    show() {
      if (this.disabled) return;
      if (this.isActive) return;

      this.focusedElBeforeOpen = document.activeElement;

      this.isActive = true;
      this.initPopper();
      this.$nextTick(() => {
        this.$el.focus();
      });
      this.$emit('open');
    },
    close() {
      this.isActive = false;
      this.$nextTick(() => {
        this.destroyPopper();
      });
      this.$emit('close');
      if (this.returnFocusOnClose) {
        this.triggerEl.focus();
        // this.focusedElBeforeOpen.focus();
      }
    },
    restrictFocus(e) {
      if (!this.containFocus) {
        this.close();
        return;
      }
      e.stopPropagation();
      if (this.focusRedirector) {
        this.focusRedirector(e);
      } else {
        this.$el.focus();
      }
    },
    initPopper() {
      this.$nextTick(() => {
        this.popperInstance = new Popper(this.triggerEl, this.$refs.content, this.popperOptions);
      });
    },
    destroyPopper() {
      if (this.popperInstance) {
        this.popperInstance.destroy();
        this.popperInstance = null;
      }
    },
    handleClickOutside(e) {
      if (!this.$el.contains(e.target) && !this.triggerEl.contains(e.target) && this.isActive) {
        this.close();
      }
    },
  },
  beforeDestroy() {
    this.removeEventsListeners();
  },
};
</script>
