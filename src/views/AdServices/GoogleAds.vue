<template>
  <div></div>
</template>

<script>
import AdServices from '@/services/adServices';

export default {
  async beforeRouteEnter(to, from, next) {
    console.log('herere');
    try {
      const { data } = await AdServices.getGoogleAdMetrics();
      console.log({ data });
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
