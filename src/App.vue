<template>
  <div id="app">
    <component :is="layout">
      <router-view />
    </component>
  </div>
</template>

<script>
import "@/assets/main.css";

export default {
  computed: {
    layout() {
      return this.$route.meta.layout || "default-layout";
    }
  }
};
</script>
