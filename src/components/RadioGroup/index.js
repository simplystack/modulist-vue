import RadioGroup from './main.vue';

// eslint-disable-next-line func-names
RadioGroup.install = function (Vue) {
  Vue.component('VRadio', RadioGroup);
};

export default RadioGroup;
