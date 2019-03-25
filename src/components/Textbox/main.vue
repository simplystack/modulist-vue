<template>
  <div class="textbox">
    <label :for="id" class="textbox__label">{{ label }}</label>

    <input
      v-if="!multiline"
      :disabled="disabled"
      :readonly="readonly"
      :placeholder="placeholder"
      :name="name"
      :id="id"
      type="text"
      class="textbox__input"
    >

    <textarea
      v-else
      :disabled="disabled"
      :readonly="readonly"
      :placeholder="placeholder"
      :name="name"
      :id="id"
      :rows="rows"
      class="textbox__textarea"
    ></textarea>

  </div>
</template>

<script>
export default {
  name: 'MlTextbox',
  props: {
    id: {
      type: [String, Number],
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    multiline: {
      type: Boolean,
      default: false,
    },
    rows: {
      type: Number,
      default: 2,
    },
    readonly: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
