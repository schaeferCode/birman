<template>
  <div class="flex-1">
    <div class="flex justify-around">
      <campaign-card company="google" :campaigns="4" to="/ad-services/google-ads" />
      <campaign-card company="facebook" :campaigns="4" to="/facebook" />
      <button @click="linkGoogle">LINK GOOGLE</button>
    </div>
  </div>
</template>

<script>
import AdServices from '@/services/adServices';
import { getFacebook } from '@/services/facebook';
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

    async linkGoogle() {
      try {
        const {
          data: { redirectUrl }
        } = await AdServices.linkGoogleServices();
        window.location.href = redirectUrl;
      } catch (error) {
        console.log({ error });
      }
    }
  }
};
</script>
