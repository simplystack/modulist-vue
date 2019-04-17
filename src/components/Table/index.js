import Table from './main.vue';

// eslint-disable-next-line func-names
Table.install = function (Vue) {
  Vue.component('VTable', Table);
};

export default Table;
