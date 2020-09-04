<template>
  <router-link tag="li" :to="to" @click.native="isExpanded = !isExpanded">
    <span>{{ title }}</span>
    <ul v-if="hasChildren && isExpanded" class="flex flex-col">
      <slot />
    </ul>
  </router-link>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    to: {
      type: String,
      default: ''
    }
  },

  data() {
    return {
      hasChildren: !!this.$slots.default,
      isExpanded: false
    };
  }
};
</script>

<style scoped></style>
