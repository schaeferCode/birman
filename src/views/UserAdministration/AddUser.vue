<template>
  <form class="flex flex-col" @submit.prevent="handleSubmit">
    <div class="flex justify-around">
      <p>Role:</p>
      <label>
        Agency Admin
        <input v-model="role" name="role" type="radio" value="tenant-admin" required />
      </label>
      <label>
        Client Admin
        <input v-model="role" name="role" type="radio" value="client-admin" />
      </label>
    </div>
    <label v-if="role === 'client-admin'">
      Client Name
      <input
        v-model="clientName"
        class="mb-1 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        required
        type="text"
      />
    </label>
    <label>
      First Name
      <input
        v-model="givenName"
        class="mb-1 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        required
        type="text"
      />
    </label>
    <label>
      Last Name
      <input
        v-model="familyName"
        class="mb-1 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        required
        type="text"
      />
    </label>
    <label>
      Email
      <input
        v-model="email"
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
  </form>
</template>

<script>
import UserService from '@/services/UserService';

export default {
  data() {
    return {
      givenName: '',
      familyName: '',
      role: 'tenant-admin',
    };
  },

  methods: {
    async handleSubmit() {
      try {
        const { email, givenName, familyName, role } = this;
        await UserService.createUser({ givenName, familyName, email, role });
        this.$router.push('/user-administration');
      } catch (error) {
        debugger;
        console.log({ error });
      }
    },
  },
};
</script>

<style scoped></style>
