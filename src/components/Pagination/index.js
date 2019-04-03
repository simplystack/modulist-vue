import Pagination from './main.vue';

// eslint-disable-next-line func-names
Pagination.install = function (Vue) {
  Vue.component('VPagination', Pagination);
};

export default Pagination;
