import Tab from './main.vue';

// eslint-disable-next-line func-names
Tab.install = function (Vue) {
  Vue.component('VTab', Tab);
};

export default Tab;
