<template>
  <portal to="modal">
    <div class="h-screen w-screen fixed z-40 top-0 left-0 bg-opacity-25 bg-blue-900 ease-in">
      <div class="w-64 h-64 p-8 bg-white border-gray-700 rounded-md shadow-md">
        <slot />
      </div>
    </div>
  </portal>
</template>

<script>
export default {};
</script>

<style scoped></style>
