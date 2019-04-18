<template>
  <div class="table-header">
    <h2 class="table-header__title">{{ title }}</h2>

    <div class="table-header__actions">
      <div class="table-header__search" v-if="searchable">
        <v-textbox
          @input="handleSearchInput.input"
          floated
          label="Search"
          type="text"
          placeholder="Search"
          :wide="false"
          :disabled="disabledSearch"
        />
      </div>

      <div class="table-header__action" v-if="$scopedSlots.action">
        <slot name="action"></slot>
      </div>
    </div>

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
