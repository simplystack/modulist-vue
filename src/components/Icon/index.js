import Icon from './main.vue';

// eslint-disable-next-line func-names
Icon.install = function (Vue) {
  Vue.component('VIcon', Icon);
};

export default Icon;
