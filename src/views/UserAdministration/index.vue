<template>
  <div>
    User Admin
    <button
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      @click="$router.push('/user-administration/batch-user-creation')"
    >
      Add Multiple Google Ad Users
    </button>
    <button
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      @click="$router.push('/user-administration/add-user')"
    >
      Add User
    </button>
    <button
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      @click="$router.push('/user-administration/edit-user')"
    >
      Edit User
    </button>
    <router-view :client-list="clientList" :sub-accounts="subAccounts" :userRole="userRole" :users="users" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

import AdService from '@/services/AdService';
import UserService from '@/services/UserService';

export default {
  async mounted() {
    switch (this.userRole) {
      case 'tenant-admin':
        try {
          const [subAccounts, clients, users] = await Promise.all([
            AdService.getGoogleSubAccounts(),
            AdService.getAllClients(),
            UserService.getAllUsers(this.userRole),
          ]);
          this.clientList = clients.data;
          this.subAccounts = subAccounts.data;
          this.users = users.data;
        } catch (error) {
          console.log({ error });
        }
        break;
      case 'client-admin':
        try {
          const { data } = await UserService.getAllUsers(this.userRole);
          this.users = data;
        } catch (error) {
          console.log({ error });
        }
        break;
    }
  },

  data() {
    return {
      clientList: [],
      subAccounts: [],
      users: [],
    };
  },

  computed: {
    ...mapGetters('Auth', { userRole: 'role' }),
  },
};
</script>
