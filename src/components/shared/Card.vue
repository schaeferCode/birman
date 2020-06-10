<template>
  <div>
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    elevation: {
      type: Number,
      default: 1
    },
    withHover: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style></style>
