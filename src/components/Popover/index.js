import Popover from './main.vue';

// eslint-disable-next-line func-names
Popover.install = function (Vue) {
  Vue.component('VPopover', Popover);
};

export default Popover;
