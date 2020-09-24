<template>
  <div></div>
</template>

<script>
import AdServices from '@/services/adServices';

export default {
  async beforeRouteEnter(to, from, next) {
    try {
      const { data } = await AdServices.getGoogleAdMetrics();
      next(vm => {
        vm.subAccounts = data.subAccounts.filter(account => !account.canManageClients);
      });
    } catch (error) {
      console.log({ error });
    }
  }
};
</script>

<style scoped></style>
