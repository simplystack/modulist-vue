import Menu from './main.vue';

// eslint-disable-next-line func-names
Menu.install = function (Vue) {
  Vue.component('VMenu', Menu);
};

export default Menu;
