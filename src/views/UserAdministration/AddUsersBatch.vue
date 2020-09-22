<template>
  <form name="addUsersBatch" @submit.prevent="submitAddUsersBatch">
    <ul>
      <li v-for="{ customerId, name } in inactiveSubAccounts" :key="customerId" class="flex">
        <input
          type="checkbox"
          :checked="batchAddForm[customerId] ? batchAddForm[customerId].selected : false"
          @change="handleUserSelect(customerId, name)"
        />
        <label>
          Organization Name
          <input
            :value="name"
            class="mb-1 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            disabled
            placeholder="Organization Name"
            type="text"
          />
        </label>
        <label>
          Given Name of Contact
          <input
            :value="batchAddForm[customerId] ? batchAddForm[customerId].givenName : ''"
            class="mb-1 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            :disabled="!batchAddForm[customerId]"
            placeholder="Given Name"
            type="text"
            @input="batchAddForm[customerId].givenName = $event.target.value"
          />
        </label>
        <label>
          Family Name of Contact
          <input
            :value="batchAddForm[customerId] ? batchAddForm[customerId].familyName : ''"
            class="mb-1 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            :disabled="!batchAddForm[customerId]"
            placeholder="Family Name"
            type="text"
            @input="batchAddForm[customerId].familyName = $event.target.value"
          />
        </label>
        <label>
          Email of Contact
          <input
            :value="batchAddForm[customerId] ? batchAddForm[customerId].email : ''"
            class="mb-1 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            :disabled="!batchAddForm[customerId]"
            placeholder="e.g. example@domain.com"
            type="email"
            @input="batchAddForm[customerId].email = $event.target.value"
          />
        </label>
      </li>
    </ul>

    <div class="border-black border-t border-solid my-6" />

    <ul>
      <li
        v-for="{ customerId, name, givenName, familyName, email } in activeSubAccounts"
        :key="customerId"
        class="flex"
      >
        <label>
          Organization Name
          <input
            :value="name"
            class="mb-1 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            disabled
            type="text"
          />
        </label>
        <label>
          Given Name of Contact
          <input
            :value="givenName"
            class="mb-1 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            disabled
            type="text"
          />
        </label>
        <label>
          Family Name of Contact
          <input
            :value="familyName"
            class="mb-1 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            disabled
            type="text"
          />
        </label>
        <label>
          Email of Contact
          <input
            :value="email"
            class="mb-1 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            disabled
            type="email"
          />
        </label>
      </li>
    </ul>
    <button
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      type="submit"
    >
      Submit
    </button>
  </form>
</template>

<script>
import AdServices from '@/services/adServices';
import UserAdminService from '@/services/userAdministration';

export default {
  async beforeRouteEnter(to, from, next) {
    const { managerId } = to.query;
    try {
      const { data } = await AdServices.getGoogleSubAccounts(managerId);
      next(vm => {
        vm.subAccounts = data.subAccounts.filter(account => !account.canManageClients);
      });
    } catch (error) {
      console.log({ error });
    }
  },

  data() {
    return {
      batchAddForm: {},
      subAccounts: []
    };
  },

  methods: {
    handleUserSelect(customerId, name) {
      if (this.batchAddForm[customerId] && this.batchAddForm[customerId].selected) {
        this.$set(this.batchAddForm[customerId], 'selected', false);
      } else if (this.batchAddForm[customerId] && !this.batchAddForm[customerId].selected) {
        this.$set(this.batchAddForm[customerId], 'selected', true);
      } else {
        this.$set(this.batchAddForm, customerId, { name, selected: true });
      }
    },
    async submitAddUsersBatch() {
      try {
        await UserAdminService.createUsersBatch(this.batchAddForm);
        this.$router.push('/user-administration');
      } catch (error) {
        console.log({ error });
      }
    }
  },

  computed: {
    activeSubAccounts() {
      return this.subAccounts.filter(subAccount => subAccount.active);
    },
    inactiveSubAccounts() {
      return this.subAccounts.filter(subAccount => !subAccount.active);
    }
  }
};
</script>

<style scoped></style>
