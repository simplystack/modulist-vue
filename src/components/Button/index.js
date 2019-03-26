import Button from './main.vue';

// eslint-disable-next-line func-names
Button.install = function (Vue) {
  Vue.component('VButton', Button);
};

export default Button;
