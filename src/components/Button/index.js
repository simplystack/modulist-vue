import Button from './main.vue';

Button.install = function (Vue) {
  Vue.component('VButton', Button);
};

export default Button;
