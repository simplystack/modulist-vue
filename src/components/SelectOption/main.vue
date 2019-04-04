<template>
  <div
    class="select-option"
    :class="classes"
    :data-value="option[keys.value]"
  >
    <slot>
      <div>{{ option[keys.label] }}</div>
    </slot>
    <div
      v-if="multiple && !disabled"
      class="select-option__checkbox"

      :class="{'select-option__checkbox--selected' : selected }"
    >
    </div>
  </div>
</template>

<script>
export default {
  name: 'VSelectOption',
  props: {
    option: {
      type: [String, Object],
    },
    selected: Boolean,
    highlighted: Boolean,
    disabled: Boolean,
    multiple: Boolean,
    keys: {
      type: Object,
      default() {
        return {
          label: 'label',
          value: 'value',
          image: 'image',
          disabled: 'disabled',
        };
      },
    },
  },
  computed: {
    classes() {
      return [
        { 'select-option--selected': this.selected },
        { 'select-option--highlighted': this.highlighted },
        { 'select-option--disabled': this.disabled },
      ];
    },
  },
};
</script>
