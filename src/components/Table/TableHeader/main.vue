<template>
  <div class="table-header">
    <h2 class="table-header__title">{{ title }}</h2>

    <v-textbox
      floated
      label="Search"
      v-if="searchable"
      v-on="handleSearchInput"
      class="table-header__search"
      type="text"
      placeholder="Search"
      :disabled="disabledSearch"
    />
  </div>
</template>

<script>
export default {
  name: 'VTableHeader',
  props: {
    title: {
      type: String,
      default: 'Table title',
    },
    searchable: {
      type: Boolean,
      default: true,
    },
    handleSearchInput: {
      type: Object,
      default: () => {},
    },
    disabledSearch: {
      type: Boolean,
    },
  },
};
</script>

<style>
  .table-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .table-header__title {
    margin: 0;
  }
</style>
