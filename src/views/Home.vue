<template>
  <div class="flex-1">
    <div class="flex justify-around">
      <campaign-card company="google" :campaigns="4" @click="linkGoogle" />
      <campaign-card company="facebook" :campaigns="4" @click="handleFacebook" />
    </div>
  </div>
</template>

<script>
import { getFacebook } from '@/services/facebook';
// import { getGoogle } from '@/services/google';
import CampaignCard from '@/components/shared/CampaignCard';

export default {
  components: {
    CampaignCard
    // GoogleLogin
  },

  data() {
    return {
      googleParams: {
        client_id: process.env.GOOGLE_CLIENT_ID,
        scope: ['https://www.googleapis.com/auth/adwords', 'https://www.googleapis.com/auth/userinfo.email']
      }
    };
  },

  methods: {
    async handleFacebook() {
      await getFacebook();
      console.log('hererer');
    },

    linkGoogle() {
      this.$router.push('/ad-services/oauth/google');
    }
  }
};
</script>
