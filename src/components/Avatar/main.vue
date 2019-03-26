<template>
  <img
    :src="src"
    :alt="alt"
    :width="size"
    :height="size"
    class="avatar"
  />
</template>

<script>
export default {
  name: 'VAvatar',
  props: {
    src: {
      type: String,
      required: true,
    },
    size: {
      type: [String, Number],
      default: 32,
    },
    alt: {
      type: String,
      default: 'Avatar',
    },
  },
};
</script>
