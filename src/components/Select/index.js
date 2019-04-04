import Select from './main.vue';

// eslint-disable-next-line func-names
Select.install = function (Vue) {
  Vue.component('VSelect', Select);
};

export default Select;
