<template>
  <div
    ref="chip"
    class="chip"
    tabindex="0"

    :class="classes"

    v-on="$listeners"
  >
    <div class="chip__text">{{ title }}</div>

    <div class="chip__close" v-if="closable">

      <button class="chip__delete" @click.stop="onDelete">
        <svg slot="icon" height="12" width="12">
          <use xlink:href="#cross-icon"></use>
        </svg>
      </button>

    </div>
  </div>
</template>

<script>
export default {
  name: 'VChip',
  props: {
    title: String,
    appearance: {
      type: String,
    },
    closable: Boolean,
  },
  computed: {
    classes() {
      return [
        `chip--${this.appearance}`,
      ];
    },
  },
  methods: {
    onDelete(e) {
      this.$emit('delete', e);
    },
  },
};
</script>
