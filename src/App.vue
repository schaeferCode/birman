<template>
  <div id="app" class="p-4">
    <component :is="layout">
      <router-view />
    </component>
  </div>
</template>

<script>
export default {
  computed: {
    layout() {
      return this.$route.meta.layout || "default-layout";
    }
  }
};
</script>
