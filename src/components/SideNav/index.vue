<template>
  <ul class="flex flex-col h-full border-r border-solid border-black w-1/6">
    <SideNavItem title="User Administration" to="/user-administration" />
    <SideNavItem title="Other Administration" to="/">
      <SideNavItem title="Other Stuff Here" to="/" />
      <SideNavItem title="More Stuff Here" to="/" />
      <SideNavItem title="Some More Stuff Here" to="/" />
    </SideNavItem>
  </ul>
</template>

<script>
import SideNavItem from './SideNavItem';

export default {
  components: {
    SideNavItem
  }
};
</script>

<style scoped></style>
