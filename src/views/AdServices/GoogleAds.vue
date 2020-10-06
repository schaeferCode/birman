<template>
  <div>
    <div v-for="report in report" :key="report['Campaign ID']">
      <p v-if="report['Campaign ID'] !== 'Total'">{{ report['Campaign ID'] }}: Clicks: {{ report['Clicks'] }}</p>
    </div>
  </div>
</template>

<script>
import AdServices from '@/services/adServices';

export default {
  async beforeRouteEnter(to, from, next) {
    try {
      const { data } = await AdServices.getGoogleAdMetrics();
      next(vm => {
        vm.report = data.report;
      });
    } catch (error) {
      console.log({ error });
    }
  },

  data() {
    return {
      report: () => {}
    };
  }
};
</script>

<style scoped></style>
