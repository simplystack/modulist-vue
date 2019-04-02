import Toggle from './main.vue';

// eslint-disable-next-line func-names
Toggle.install = function (Vue) {
  Vue.component('VToggle', Toggle);
};

export default Toggle;
