import TabHeader from './main.vue';

// eslint-disable-next-line func-names
TabHeader.install = function (Vue) {
  Vue.component('VTabHeader', TabHeader);
};

export default TabHeader;
