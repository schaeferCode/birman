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
    <template v-if="role === 'client-admin'">
      <label>
        Select Client Name
        <select
          class="mb-1 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          name="clientName"
          required
          @change="handleClientNameChange"
        >
          <option
            v-for="{ active, customerId, name } in allClients"
            :disabled="active"
            :key="name"
            :label="name"
            :value="JSON.stringify({ clientName: name, serviceUserId: customerId })"
          />
        </select>
      </label>
    </template>
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
import AdService from '@/services/AdService';
import UserService from '@/services/UserService';

export default {
  data() {
    return {
      allClients: () => [],
      clientName: '',
      email: '',
      familyName: '',
      givenName: '',
      role: 'tenant-admin',
      serviceUserId: '',
    };
  },

  methods: {
    async handleSubmit() {
      try {
        const { email, givenName, familyName, role } = this;
        await UserService.createUser({ givenName, familyName, email, role });
        this.$router.push('/user-administration');
      } catch (error) {
        console.log({ error });
      }
    },

    handleClientNameChange(event) {
      const { clientName, serviceUserId } = JSON.parse(event.target.value);
      this.clientName = clientName;
      this.serviceUserId = serviceUserId;
    },
  },

  watch: {
    async role(newValue) {
      if (newValue === 'client-admin') {
        try {
          const { data } = await AdService.getAllClients();
          this.allClients = data;
        } catch (error) {
          console.log({ error });
        }
      }
    },
  },
};
</script>

<style scoped></style>
