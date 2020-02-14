<template>
  <div class="auth-component-reset">
  </div>
</template>

<script>
export default {
  name: "AuthComponentExternal",
  props: {
    token: String
  },
  created() {
    this.$store.dispatch('user/setApiKeyAuth', this.token);
    this.$router.push('/main');
  }
};
</script>
