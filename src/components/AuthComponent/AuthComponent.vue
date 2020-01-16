<template>
  <div class="auth-component">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "AuthComponent"
};
</script>

<style lang="scss">
.header-button {
  color: #fff !important;
  &:hover {
    color: #7f360d !important;
  }
}
</style>
