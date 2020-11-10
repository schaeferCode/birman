<template>
  <div class="flex justify-between border-b border-black border-solid">
    <img class="w-40" src="http://pigment.github.io/fake-logos/logos/small/color/crofts-accountants.png" />
    <img @click="logout" src="../assets/icons/account_circle-24px.svg" />
  </div>
</template>

<script>
import AuthService from '@/services/AuthService';

export default {
  methods: {
    logout() {
      AuthService.deleteToken();
      this.$router.push('/login');
    }
  }
};
</script>
