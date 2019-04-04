import Chip from './main.vue';

// eslint-disable-next-line func-names
Chip.install = function (Vue) {
  Vue.component('VChip', Chip);
};

export default Chip;
