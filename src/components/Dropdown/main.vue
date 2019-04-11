<template>
  <div class="dropdown">
    <Popover
      ref="popover"
      contain-focus

      @open="onOpen"
      @close="onClose"
      :disabled="disabled"
      :placement="placement"
    >
      <div class="dropdown__toggle" slot="toggle">
        <slot name="toggle"></slot>
      </div>
      <Menu
        @select="onSelect"
        @close="$refs.popover.close()"
        :options="options"
        :contain-focus="containFocus"
      ></Menu>
    </Popover>
  </div>
</template>

<script>
import Popover from '../Popover';
import Menu from '../Menu';

export default {
  name: 'VDropdown',
  props: {
    placement: {
      type: String,
      default: 'bottom',
    },
    options: {
      type: Array,
      default() {
        return [];
      },
    },
    containFocus: {
      type: Boolean,
      default: true,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    onSelect(option) {
      this.$emit('select', option);
    },
    onOpen() {
      this.$emit('open');
    },
    onClose() {
      this.$emit('close');
    },
  },
  components: {
    Popover,
    Menu,
  },
};
</script>
