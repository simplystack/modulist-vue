import Avatar from './main.vue';

// eslint-disable-next-line func-names
Avatar.install = function (Vue) {
  Vue.component('VAvatar', Avatar);
};

export default Avatar;
