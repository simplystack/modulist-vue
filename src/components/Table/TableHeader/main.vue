<template>
  <div class="table-header">
    <slot name="title">
      <h2 class="table-header__title">{{ title }}</h2>
    </slot>

    <div class="table-header__actions">
      <div class="table-header__search" v-if="searchable">
        <v-textbox
          @input="handleSearchInput"
          floated
          label="Search"
          type="text"
          placeholder="Search"
          size="3"
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
      type: Function,
      default: () => {},
    },
    disabledSearch: {
      type: Boolean,
    },
  },
};
</script>
