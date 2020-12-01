<template>
  <form class="flex flex-col" @submit.prevent="handleSubmit">
    <div class="flex justify-around">
      <p>Role:</p>
      <label v-if="userRole === 'tenant-admin'">
        Agency Admin
        <input v-model="role" name="role" type="radio" value="tenant-admin" required />
      </label>
      <label v-if="isTenantOrClientAdmin">
        Client Admin
        <input v-model="role" name="role" type="radio" value="client-admin" />
      </label>
      <label v-if="userRole === 'client-admin'">
        User
        <input v-model="role" name="role" type="radio" value="user" />
      </label>
    </div>

    <!-- client-admin creation -->
    <template v-if="userRole === 'tenant-admin' && role === 'client-admin'">
      <label>
        Select Client Name
        <select
          class="mb-1 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          name="clientName"
          required
          @change="handleClientNameChange"
        >
          <option />
          <option
            v-for="{ active, customerId, name } in clientList"
            :key="name"
            :label="`${name} ${active ? '(is active)' : ''}`"
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
import pickBy from 'lodash/pickBy';

import UserService from '@/services/UserService';

export default {
  props: {
    clientList: {
      type: Array,
      required: true,
    },
    userRole: {
      type: String,
      required: true,
    },
  },

  data() {
    return {
      clientName: '',
      email: '',
      familyName: '',
      givenName: '',
      role: '',
      serviceUserId: '',
    };
  },

  computed: {
    isTenantOrClientAdmin() {
      return ['tenant-admin', 'client-admin'].includes(this.userRole);
    },
  },

  methods: {
    handleSubmit() {
      switch (this.role) {
        case 'client-admin':
          this.submitClientAdminUser();
          break;
        case 'tenant-admin':
          this.submitTenantAdminUser();
          break;
        case 'user':
          this.submitClientUser();
          break;
      }
    },

    handleClientNameChange(event) {
      const { clientName, serviceUserId } = JSON.parse(event.target.value);
      this.clientName = clientName;
      this.serviceUserId = serviceUserId;
    },

    async submitClientAdminUser() {
      try {
        const { clientName, email, givenName, familyName, role, serviceUserId, userRole } = this;
        await UserService.createClientAdminUser(
          pickBy({ clientName, email, givenName, familyName, role, serviceUserId }, (value) => !!value === true),
          userRole
        );
        this.$router.push('/user-administration');
      } catch (error) {
        console.log({ error });
      }
    },

    async submitClientUser() {
      try {
        const { email, givenName, familyName, role, userRole } = this;
        await UserService.createClientUser({ email, givenName, familyName, role }, userRole);
        this.$router.push('/user-administration');
      } catch (error) {
        console.log({ error });
      }
    },

    async submitTenantAdminUser() {
      try {
        const { email, givenName, familyName, role, userRole } = this;
        await UserService.createTenantAdminUser({ email, givenName, familyName, role }, userRole);
        this.$router.push('/user-administration');
      } catch (error) {
        console.log({ error });
      }
    },
  },
};
</script>

<style scoped></style>
