<template>
  <ul class="pagination">
    <li class="pagination__item">
      <v-button
        :size="size"
        @click="onClickFirstPage"
        aria-label="Go to first page"
        :disabled="isInFirstPage"
      >
        First
      </v-button>
    </li>

    <li class="pagination__item">
      <v-button
        :size="size"
        @click.prevent="onClickPreviousPage"
        aria-label="Go to previous page"
        :disabled="isInFirstPage"
      >
        Previous
      </v-button>
    </li>

    <li v-for="(page, i) in pages" :key="i" class="pagination__item">
      <v-button
        :size="size"
        @click.prevent="onClickPage(page.name)"

        :appearance="isPageActive(page.name) ? 'primary' : 'default'"
        :class="{ active: isPageActive(page.name) }"
        :aria-label="`Go to page number ${page.name}`"

      >
        {{ page.name }}
      </v-button>
    </li>

    <li class="pagination__item">
      <v-button
        :size="size"
        @click="onClickNextPage"
        :disabled="isInLastPage"
        aria-label="Go to next page"
      >
        Next
      </v-button>
    </li>

    <li class="pagination__item">
      <v-button
        :size="size"
        @click="onClickLastPage"
        :disabled="isInLastPage"
        aria-label="Go to last page"
      >
        Last
      </v-button>
    </li>
  </ul>
</template>

<script>
import VButton from '../Button';

export default {
  name: 'VPagination',
  props: {
    value: {
      type: Number,
      default: 1,
    },
    maxVisibleButtons: {
      type: Number,
      default: 3,
    },
    total: {
      type: Number,
      required: true,
    },
    perPage: {
      type: Number,
      default: 10,
    },
    size: {
      type: String,
      default: '4',
    },
  },
  data() {
    return {
      currentPage: this.value,
    };
  },
  computed: {
    startPage() {
      if (this.currentPage === 1) {
        return 1;
      }

      if (this.currentPage === this.totalPages) {
        return this.totalPages - this.maxVisibleButtons + 1;
      }

      return this.currentPage - 1;
    },
    endPage() {
      return Math.min(this.startPage + this.maxVisibleButtons - 1, this.totalPages);
    },
    pages() {
      const range = [];

      for (let i = this.startPage; i <= this.endPage; i += 1) {
        range.push({
          name: i,
          isDisabled: i === this.currentPage,
        });
      }

      return range;
    },
    isInFirstPage() {
      return this.currentPage === 1;
    },
    isInLastPage() {
      return this.currentPage === this.totalPages;
    },
    totalPages() {
      return Math.ceil(this.total / this.perPage);
    },
  },
  methods: {
    onClickFirstPage() {
      this.$emit('input', 1);
    },
    onClickPreviousPage() {
      this.$emit('input', this.currentPage - 1);
    },
    onClickPage(page) {
      this.$emit('input', page);
    },
    onClickNextPage() {
      this.$emit('input', this.currentPage + 1);
    },
    onClickLastPage() {
      this.$emit('input', this.totalPages);
    },
    isPageActive(page) {
      return this.currentPage === page;
    },
  },
  components: { VButton },
  watch: {
    value(value) {
      this.currentPage = value;
    },
  },
};
</script>
