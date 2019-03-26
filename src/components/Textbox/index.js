import Textbox from './main.vue';

// eslint-disable-next-line func-names
Textbox.install = function (Vue) {
  Vue.component('VTextbox', Textbox);
};

export default Textbox;
