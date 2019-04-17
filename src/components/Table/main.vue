<template>
  <div class="table-wrapper">

    <slot
      name="toolbar"
      :items="items"
      :handleSearchInput="{ input: (e) => query = e.target.value }"
      :disabledSearch="items.length === 0"
    ></slot>

    <table>

      <thead>
      <tr v-if="!(items.length === 0 || items.length > 0 && mutableItems.length === 0)">
        <th class="table-select-td" v-if="multiSelect">
          <input
            ref="checkbox"
            type="checkbox"
            @change="handleSelectAll"
            :checked="mutableItems.length === mutableSelected.length"
          >
        </th>

        <th
          @click="onHeadClick(field, key)"
          v-for="(field, key) in fields"
          :key="key"
          :class="[
            field.sortable
              ? 'table-sorting'
              : null,
            sortBy===key
              ? 'sorting--' + (sortDesc?'desc':'asc')
              : '',
            field.class ? field.class : null
          ]"
        >
          <span
            v-html="field.label"
            v-if="field.label"
            class="table-sorting__icon table-sorting__label"
          ></span>
        </th>
      </tr>
      </thead>

      <tbody>
      <tr v-if="items.length === 0" :colspan="Object.keys(fields).length">
        <slot name="empty">
          <div style="text-align:center;" v-html="emptyText"></div>
        </slot>
      </tr>

      <tr v-for="(item, index) in mutableItems" :key="index">
        <td class="table-select-td" v-if="multiSelect">
          <input type="checkbox" @change="handleSelect" v-model="selected[index]">
        </td>

        <td
          v-for="(field, key) in fields"
          :key="key"
          :class="`table-${field.label.toLowerCase()}`"
        >
          <slot
            :name="key"
            :value="item[key]"
            :item="item"
            :index="index"
          >
            {{ item[key] }}
          </slot>
        </td>
      </tr>

      <tr
        v-if="items.length > 0 && mutableItems.length === 0"
        :colspan="Object.keys(fields).length"
      >
        <slot name="emptyfiltered">
          <div style="text-align:center;" v-html="emptyFilteredText"></div>
        </slot>
      </tr>
      </tbody>

    </table>

  </div>
</template>

<script>
import fuzzysearch from 'fuzzysearch';
import { toString } from '../../helpers/util';

const defaultSortCompare = (a, b, sortBy) => (
  toString(a[sortBy]).localeCompare(toString(b[sortBy]), undefined, { numeric: true })
);

export default {
  name: 'VTable',
  props: {
    fields: {
      type: Object,
      default: () => {},
    },
    items: {
      type: Array,
      default: () => [],
    },
    multiSelect: {
      type: Boolean,
      default: false,
    },
    perPage: {
      type: Number,
      default: 10,
    },
    currentPage: {
      type: Number,
      default: 1,
    },
    sortCompare: {
      type: Function,
      default: null,
    },
    emptyText: {
      type: String,
      default: 'There is no records...',
    },
    emptyFilteredText: {
      type: String,
      default: 'There are no records matching your request',
    },
  },
  data() {
    return {
      query: '',
      selected: [],
      sortBy: null,
      sortDesc: true,
    };
  },
  computed: {
    mutableItems() {
      let items = this.items.slice();

      if (this.query) {
        items = items.filter(item => fuzzysearch(this.query, toString(item)));
      }

      const sortCompare = this.sortCompare || defaultSortCompare;
      if (this.sortBy) {
        items = items.sort((a, b) => {
          const r = sortCompare(a, b, this.sortBy);
          return this.sortDesc ? r : r * -1;
        });
      }

      if (this.perPage) {
        items = items.slice((this.currentPage - 1) * this.perPage, this.currentPage * this.perPage);
      }

      return items;
    },
    mutableSelected() {
      return this.mutableItems
        /* eslint-disable-next-line */
        .map((el, i) => {
          if (this.selected[i]) return el;
        })
        .filter(el => el !== undefined);
    },
  },
  methods: {
    onHeadClick(field, key) {
      if (!field.sortable) {
        this.sortBy = null;
        return;
      }
      if (key === this.sortBy) {
        this.sortDesc = !this.sortDesc;
      }
      this.sortBy = key;
    },
    handleSelect() {
      this.$emit('input', this.mutableSelected);
    },
    handleSelectAll(e) {
      if (e.target.checked) {
        this.selectAll();
      } else {
        this.clearSelection();
      }

      this.handleSelect();
    },
    clearSelection() {
      this.selected = [];
    },
    selectAll() {
      this.selected = [...this.mutableItems];
    },
  },
};
</script>

<style>
  .table-wrapper {
    width: 100%;
  }

  .table-wrapper table {
    display: table;
    width: 100%;
  }

  .table-select-td {
    width: 24px;
  }

  table {
    max-width: 100%;
    width: 100%;
  }

  table thead th {
    text-align: left;
  }
</style>
