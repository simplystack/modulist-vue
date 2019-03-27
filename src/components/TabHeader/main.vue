<template>
  <li
    class="tabs__item"
    role="tab"
    :aria-controls="id"
    :aria-selected="active ? 'true' : null"
    :tabindex="active ? 0 : -1"
  >
    <a @click="onClick" href="#" class="tabs__link" :class="classes">
      <div class="tabs__link-text">{{ title }}</div>
    </a>
  </li>
</template>

<script>
export default {
  name: 'VTabHeader',
  props: {
    id: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    active: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    classes() {
      return [
        { 'tabs__link--active': this.active },
        { 'tabs__link--disabled': this.disabled },
      ];
    },
  },
  methods: {
    onClick(e) {
      e.preventDefault();
      this.$emit('click', e);
    },
  },
};
</script>
