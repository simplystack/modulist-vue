import Spinner from './main.vue';

// eslint-disable-next-line func-names
Spinner.install = function (Vue) {
  Vue.component('VSpinner', Spinner);
};

export default Spinner;
