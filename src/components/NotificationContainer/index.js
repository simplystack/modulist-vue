import NotificationContainer from './main.vue';

// eslint-disable-next-line func-names
NotificationContainer.install = function (Vue) {
  Vue.component('VNotificationContainer', NotificationContainer);
};

export default NotificationContainer;
