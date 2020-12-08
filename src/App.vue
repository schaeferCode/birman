<template>
  <div id="app">
    <component :is="layout">
      <router-view />
    </component>
    <portal-target name="modal" />
  </div>
</template>

<script>
export default {
  computed: {
    layout() {
      return this.$route.meta.layout || 'default-layout';
    },
  },
};
</script>
