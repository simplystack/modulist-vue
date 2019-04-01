import Modal from './main.vue';

// eslint-disable-next-line func-names
Modal.install = function (Vue) {
  Vue.component('VModal', Modal);
};

export default Modal;
