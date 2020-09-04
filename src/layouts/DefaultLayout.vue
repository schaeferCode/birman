<template>
  <div>
    <Header />
    <div class="flex flex-row">
      <SideNav />
      <slot />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

import Header from '@/components/Header';
import SideNav from '@/components/SideNav';

export default {
  components: {
    Header,
    SideNav
  },

  computed: {
    ...mapState('Auth', ['user'])
  }
};
</script>
