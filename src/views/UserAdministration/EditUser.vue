<template>
  <ul>
    <li v-for="user in users" :key="user._id">
      <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        @click="selectedUser = user"
      >
        Edit
      </button>
      <span class="ml-6">
        {{ user.email }}
      </span>
    </li>
    <modal v-if="selectedUser"> stuff </modal>
  </ul>
</template>

<script>
import Modal from '@/components/shared/Modal';

export default {
  components: {
    Modal,
  },

  props: {
    users: {
      type: Array,
      default: () => [],
    },
  },

  data() {
    return {
      selectedUser: null,
    };
  },
};
</script>
