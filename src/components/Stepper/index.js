import Stepper from './main.vue';

// eslint-disable-next-line func-names
Stepper.install = function (Vue) {
  Vue.component('VStepper', Stepper);
};

export default Stepper;
