<template>
  <div class="shadow-md border border-solid border-gray-100" :class="getSize">
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    size: {
      type: String,
      default: "medium"
    }
  }
};
</script>
