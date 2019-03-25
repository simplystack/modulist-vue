import Alert from './main.vue';

Alert.install = function (Vue) {
  Vue.component('Alert', Alert);
};

export default Alert;
