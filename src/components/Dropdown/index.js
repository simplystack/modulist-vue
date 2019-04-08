import Dropdown from './main.vue';

// eslint-disable-next-line func-names
Dropdown.install = function (Vue) {
  Vue.component('VDropdown', Dropdown);
};

export default Dropdown;
