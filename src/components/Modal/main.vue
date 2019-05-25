<template>
  <transition name="modal" @after-enter="onEnter" @after-leave="onLeave">
    <div class="modal modal__mask" v-if="open" :role="role" :class="classes">
      <div ref="backdrop" class="modal__wrapper" @click="dismissOnBackdrop && close($event)">
        <div
          ref="container"
          class="modal__container"
          tabindex="-1"
          @keydown.esc="dismissOnEsc && close($event)"
        >

          <div class="modal__header">

            <h3 class="modal__title">{{ title }}</h3>

            <v-button appearance="subtle" size="1" @click="close">
              <template v-slot:icon>
                <v-icon name="cross-icon" width="16" height="16"/>
              </template>
            </v-button>

          </div>

          <div class="modal__body">
            <slot></slot>
          </div>

          <div class="modal__footer" v-if="$scopedSlots.footer">
            <slot name="footer"></slot>
          </div>

          <div tabindex="0" @focus.stop="redirectFocus"></div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import VButton from '../Button';

const modalOpenClass = 'modal--open';

export default {
  name: 'VModal',
  props: {
    open: {
      type: Boolean,
      default: false,
    },
    role: {
      type: String,
      default: 'dialog',
      validator(role) {
        return ['dialog', 'alertdialog'].indexOf(role) > -1;
      },
    },
    title: {
      type: String,
      default: 'Modal title',
    },
    size: {
      type: String,
      default: '2',
      validator(size) {
        return ['1', '2', '3'].indexOf(size) > -1;
      },
    },
    dismissible: {
      type: Boolean,
      default: true,
    },
    dismissOn: {
      type: String,
      default: 'backdrop esc close-button',
    },
  },
  computed: {
    dismissOnBackdrop() {
      return this.dismissOn.indexOf('backdrop') > -1;
    },
    dismissOnCloseButton() {
      return this.dismissOn.indexOf('close-button') > -1;
    },
    dismissOnEsc() {
      return this.dismissOn.indexOf('esc') > -1;
    },
    classes() {
      return [
        `modal--size-${this.size}`,
      ];
    },
  },
  methods: {
    close(e) {
      if (!this.dismissible) {
        return;
      }
      // Make sure the element clicked was the backdrop and not a child whose click
      // event has bubbled up
      if (e.currentTarget === this.$refs.backdrop && e.target !== e.currentTarget) {
        return;
      }

      this.$emit('close');
    },
    onOpen() {
      this.lastfocusedElement = document.activeElement;
      this.$refs.container.focus();
      document.body.classList.add(modalOpenClass);
      document.addEventListener('focus', this.restrictFocus, true);
      this.$emit('open');
    },
    onClose() {
      this.teardownModal();
      this.$emit('close');
    },
    redirectFocus() {
      this.$refs.container.focus();
    },
    restrictFocus(e) {
      if (!this.$refs.container.contains(e.target)) {
        e.stopPropagation();
        this.$refs.container.focus();
      }
    },
    teardownModal() {
      document.body.classList.remove(modalOpenClass);
      document.removeEventListener('focus', this.restrictFocus, true);
      if (this.lastfocusedElement) {
        this.lastfocusedElement.focus();
      }
    },
    onEnter() {
      this.$emit('reveal');
    },
    onLeave() {
      this.$emit('hide');
      document.body.classList.remove(modalOpenClass);
    },
  },
  components: { VButton },
  watch: {
    open() {
      this.$nextTick(() => {
        this[this.open ? 'onOpen' : 'onClose']();
      });
    },
  },
  beforeDestroy() {
    if (this.open) {
      this.teardownModal();
    }
  },
};
</script>

<style>
  /*
   * The following styles are auto-applied to elements with
   * transition="modal" when their visibility is toggled
   * by Vue.js.
   *
   * You can easily play with the modal transition by editing
   * these styles.
   */

  .modal-enter {
    opacity: 0;
  }

  .modal-leave-active {
    opacity: 0;
  }

  .modal-enter .modal__container,
  .modal-leave-active .modal__container {
    transform: scale(1.1);
  }
</style>
