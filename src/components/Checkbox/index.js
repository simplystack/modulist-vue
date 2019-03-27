import Checkbox from './main.vue';

// eslint-disable-next-line func-names
Checkbox.install = function (Vue) {
  Vue.component('VCheckbox', Checkbox);
};

export default Checkbox;
