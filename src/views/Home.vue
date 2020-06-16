<template>
  <div>
    <div class="flex justify-around">
      <campaign-card
        company="google"
        :campaigns="5"
        @click="$router.push('/google')"
      />
      <campaign-card
        company="facebook"
        :campaigns="4"
        @click="$router.push('/facebook')"
      />
    </div>
  </div>
</template>

<script>
import CampaignCard from "@/components/shared/CampaignCard";

export default {
  components: {
    CampaignCard
  }
};
</script>
