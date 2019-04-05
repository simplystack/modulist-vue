<template>
  <div class="notification" :class="classes">
      <div class="notification__icon">
        <svg v-if="type === 'info'" width="20" height="20">
          <use xlink:href="info-icon"></use>
        </svg>
        <svg v-if="type === 'success'" width="20" height="20">
          <use xlink:href="success-icon"></use>
        </svg>
        <svg v-if="type === 'warning'" width="20" height="16">
          <use xlink:href="warning-icon"></use>
        </svg>
        <svg v-if="type === 'error'" width="20" height="20">
          <use xlink:href="error-icon"></use>
        </svg>
      </div>
      <div class="notification__content">
        <div class="notification__title">{{ computedTitle }}</div>
        <div class="notification__message">{{ message }}</div>
        <div class="notification__actions" v-if="actions.length > 0">
          <div class="notification__action" :key="i" v-for="(action, i) in actions">
            <v-button
              :appearance="action.appearance"
              size="2"
              @click="actionClickHandler(action.onClick)"
            >
              {{ action.text }}
            </v-button>
          </div>
        </div>
      </div>
      <div class="notification__close" v-if="dismissible">
        <v-button appearance="subtle" size="1" @click.stop="onClose($event)">
          <svg slot="icon" width="14" height="14">
            <use xlink:href="#cross-icon"></use>
          </svg>
        </v-button>
      </div>
    </div>
</template>

<script>
import VButton from '../Button';
import { toUpperCaseFirstLetter } from '../../helpers/util';

export default {
  name: 'VNotification',
  props: {
    id: {
      type: [Number, String],
      default: 1,
    },
    type: {
      type: String,
      default: 'info',
    },
    title: {
      type: String,
    },
    message: String,
    dismissible: {
      type: Boolean,
      default: true,
    },
    timeout: {
      type: Number,
      default: 5000,
      validator: value => value > 0,
    },
    actions: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    computedTitle() {
      return this.title ? this.title : toUpperCaseFirstLetter(this.type);
    },
    classes() {
      return [
        `notification--${this.type}`,
      ];
    },
  },
  mounted() {
    if (this.timeout && this.dismissible) {
      setTimeout(this.onClose, this.timeout);
    }
  },
  methods: {
    onClose(e) {
      this.$emit('close', e);
    },
    actionClickHandler(action) {
      if (action) {
        action();
        this.onClose();
      } else {
        this.onClose();
      }
    },
  },
  components: {
    VButton,
  },
};
</script>
