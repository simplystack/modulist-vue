<template>
  <svg :width="width" :height="height">
    <use :xlink:href="`#${name}`"></use>
  </svg>
</template>

<script>
export default {
  name: 'VIcon',
  props: {
    name: {
      type: String,
      required: true,
    },
    width: {
      type: String,
      default: '20',
    },
    height: {
      type: String,
      default: '20',
    },
  },
};
</script>
