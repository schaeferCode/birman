<template>
  <div
    class="shadow-md w-64 h-64 border border-solid border-gray-100"
    :class="getSize"
  >
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
  },

  computed: {
    getSize() {
      return "";
      // switch (this.size) {
      //   case 'small':
      //     return { 'h-64'}
      //     break;

      //   default:
      //     break;
      // }
    }
  }
};
</script>
