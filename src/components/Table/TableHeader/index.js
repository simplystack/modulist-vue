import TableHeader from './main.vue';

// eslint-disable-next-line func-names
TableHeader.install = function (Vue) {
  Vue.component('VTableHeader', TableHeader);
};

export default TableHeader;
