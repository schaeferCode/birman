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
    <modal v-if="selectedUser">
      <form @submit.prevent="handleSubmit">
        <label class="block mb-4 text-gray-700 text-sm font-bold">
          <p class="mb-2">Family Name:</p>
          <input
            :value="selectedUser.familyName"
            class="mb-1 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Family Name"
            type="text"
            @input="form.familyName = $event.target.value"
          />
        </label>
        <label class="block mb-4 text-gray-700 text-sm font-bold">
          <p class="mb-2">Given Name:</p>
          <input
            :value="selectedUser.givenName"
            class="mb-1 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Family Name"
            type="text"
            @input="form.givenName = $event.target.value"
          />
        </label>
        <label>
          Email
          <input
            disabled
            :value="selectedUser.email"
            class="mb-1 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
            type="email"
          />
        </label>
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Submit
        </button>
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="reset"
          @click="selectedUser = null"
        >
          Cancel
        </button>
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
          @click.prevent="handleDelete"
        >
          Delete
        </button>
      </form>
    </modal>
  </ul>
</template>

<script>
import pick from 'lodash/pick';

import Modal from '@/components/shared/Modal';
import UserService from '@/services/UserService';

export default {
  components: {
    Modal,
  },

  props: {
    userRole: {
      type: String,
      required: true,
    },
    users: {
      type: Array,
      default: () => [],
    },
  },

  data() {
    return {
      selectedUser: null,
      form: {},
    };
  },

  methods: {
    async handleSubmit() {
      try {
        await UserService.editUser(this.form, this.userRole);
      } catch (error) {
        console.log({ error });
      }
    },

    async handleDelete() {
      try {
        await UserService.deleteUser(this.selectedUser._id, this.userRole);
      } catch (error) {
        console.log({ error });
      }
    },
  },

  watch: {
    selectedUser(user) {
      this.form = pick(user, ['_id', 'email', 'familyName', 'givenName']);
    },
  },
};
</script>
