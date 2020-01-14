<template>
  <div class="guest-component">
    <div class="logo"></div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "GuestComponent"
};
</script>

<style scoped lang="scss">
.guest-component {
  max-width: 1440px;
  margin: 0 auto;
  padding: 70px;
  .logo {
    margin: 0 auto 53px;
    width: 206px;
    height: 61px;
    background: url("./assets/logo_g.png") 0 0 no-repeat;
  }
}
</style>
