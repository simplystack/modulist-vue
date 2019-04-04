import SelectOption from './main.vue';

// eslint-disable-next-line func-names
SelectOption.install = function (Vue) {
  Vue.component('VSelectOption', SelectOption);
};

export default SelectOption;
