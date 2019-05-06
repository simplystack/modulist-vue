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
        <v-icon name="cross-icon" height="12" width="12" />
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
