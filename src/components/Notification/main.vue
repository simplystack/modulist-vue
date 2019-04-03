<template>
  <div class="notification" :class="classes">
      <div class="notification__icon">
        <svg v-if="type === 'warning'" xmlns="http://www.w3.org/2000/svg" width="20" height="16" viewBox="0 0 20 16">
          <g fill="none" fill-rule="evenodd" transform="translate(-1 -1)">
            <path fill="#F5A623" d="M9.04644425,2.05608156 L1.09900451,14.8894568 L1.09900451,14.8894568 C0.808228341,15.3589966 0.953144937,15.9753545 1.42268478,16.2661307 C1.58083294,16.3640685 1.7631637,16.4159536 1.9491816,16.4159536 L19.3287757,16.4159536 L19.3287757,16.4159536 C19.8810604,16.4159536 20.3287757,15.9682383 20.3287757,15.4159536 C20.3287757,15.2340939 20.2791828,15.055677 20.1853341,14.8999035 L12.4599153,2.07697513 L12.4599153,2.07697513 C11.8899022,1.1308468 10.6608267,0.82594519 9.71469837,1.39595832 C9.44270055,1.55982862 9.2136319,1.78611011 9.04644425,2.05608156 Z"/>
            <rect width="2" height="5" x="10" y="5" fill="#FFFFFF" rx="1"/>
            <rect width="2" height="2" x="10" y="12" fill="#FFFFFF" rx="1"/>
          </g>
        </svg>
        <svg v-if="type === 'success'" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
          <g fill="none" fill-rule="evenodd">
            <path fill="#23D584" d="M0,10 C0,4.4771525 4.47593818,0 10,0 C15.5228475,0 20,4.47593818 20,10 C20,15.5228475 15.5240618,20 10,20 C4.4771525,20 0,15.5240618 0,10 Z"/>
            <polyline stroke="#FFFFFF" stroke-width="2" points="6 10 9 13 14 7"/>
          </g>
        </svg>
        <svg v-if="type === 'error'" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
          <g fill="none" fill-rule="evenodd">
            <path fill="#E55644" d="M0,10 C0,4.4771525 4.47593818,0 10,0 C15.5228475,0 20,4.47593818 20,10 C20,15.5228475 15.5240618,20 10,20 C4.4771525,20 0,15.5240618 0,10 Z"/>
            <path fill="#FFFFFF" fill-rule="nonzero" d="M11.4142136,10 L14.2426407,7.17157288 L12.8284271,5.75735931 L10,8.58578644 L7.17157288,5.75735931 L5.75735931,7.17157288 L8.58578644,10 L5.75735931,12.8284271 L7.17157288,14.2426407 L10,11.4142136 L12.8284271,14.2426407 L14.2426407,12.8284271 L11.4142136,10 Z"/>
          </g>
        </svg>
        <svg v-if="type === 'info'" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
          <g fill="none" fill-rule="evenodd">
            <path fill="#0B78FF" d="M0,10 C0,4.4771525 4.47593818,0 10,0 C15.5228475,0 20,4.47593818 20,10 C20,15.5228475 15.5240618,20 10,20 C4.4771525,20 0,15.5240618 0,10 Z"/>
            <rect width="2" height="5" x="9" y="10" fill="#FFFFFF" rx="1"/>
            <rect width="2" height="2" x="9" y="6" fill="#FFFFFF" rx="1"/>
          </g>
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
  name: 'notification',
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
