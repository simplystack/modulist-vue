import Progress from './main.vue';

// eslint-disable-next-line func-names
Progress.install = function (Vue) {
  Vue.component('VProgress', Progress);
};

export default Progress;
