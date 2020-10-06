<template>
  <div class="w-screen h-screen flex flex-col justify-center items-center">
    <card class="flex">
      <slot />
    </card>
  </div>
</template>

<script>
import Card from '@/components/shared/Card';

export default {
  components: {
    Card
  }
};
</script>
