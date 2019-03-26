import Alert from './main.vue';

// eslint-disable-next-line func-names
Alert.install = function (Vue) {
  Vue.component('VAlert', Alert);
};

export default Alert;
