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
    <router-view :sub-accounts="subAccounts" />
  </div>
</template>

<script>
import AdService from '@/services/AdService';

export default {
  async mounted() {
    try {
      const { data } = await AdService.getGoogleSubAccounts();
      this.subAccounts = data.subAccounts;
    } catch (error) {
      console.log({ error });
    }
  },

  data() {
    return {
      subAccounts: [],
    };
  },
};
</script>
