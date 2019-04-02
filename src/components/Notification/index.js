import Notification from './main.vue';

// eslint-disable-next-line func-names
Notification.install = function (Vue) {
  Vue.component('VNotification', Notification);
};

export default Notification;
