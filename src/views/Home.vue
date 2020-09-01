<template>
  <div>
    <div class="flex justify-around">
      <campaign-card company="google" :campaigns="5" @click="handleGoogle" />
      <campaign-card company="facebook" :campaigns="4" @click="handleFacebook" />
    </div>
  </div>
</template>

<script>
import { getFacebook } from '@/services/facebook';
import { getGoogle } from '@/services/google';
import CampaignCard from '@/components/shared/CampaignCard';

export default {
  components: {
    CampaignCard
  },

  methods: {
    async handleFacebook() {
      await getFacebook();
      console.log('hererer');
    },

    async handleGoogle() {
      await getGoogle();
      console.log('herere');
    }
  }
};
</script>
