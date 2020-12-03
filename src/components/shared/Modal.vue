<template>
  <portal to="modal">
    <div class="h-screen w-screen fixed z-40 top-0 left-0 bg-opacity-25 bg-blue-900">
      <slot />
    </div>
  </portal>
</template>

<script>
export default {};
</script>

<style scoped></style>
