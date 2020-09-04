<template>
  <card class="flex h-64 items-center justify-center relative cursor-pointer" @click="$emit('click')">
    <img class="h-20" :src="getImgPath" />
    <div class="absolute left-0 bottom-0 p-4">
      <span> Campaigns: {{ campaigns }} </span>
    </div>
  </card>
</template>

<script>
import Card from './Card';

export default {
  components: {
    Card
  },

  props: {
    company: {
      type: String,
      required: true
    },
    campaigns: {
      type: Number,
      default: 0
    }
  },

  computed: {
    getImgPath() {
      const path = require(`../../assets/${this.company}_logo.png`);
      return path;
    }
  }
};
</script>

<style></style>
