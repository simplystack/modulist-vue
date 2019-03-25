import Alert from './main.vue';

Alert.install = function (Vue) {
  Vue.component('VAlert', Alert);
};

export default Alert;
