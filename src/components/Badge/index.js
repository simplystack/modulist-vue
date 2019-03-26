import Badge from './main.vue';

// eslint-disable-next-line func-names
Badge.install = function (Vue) {
  Vue.component('VBadge', Badge);
};

export default Badge;
