<template>
  <div class="guest">
    <GuestComponent />
  </div>
</template>

<script>
import GuestComponent from "@/components/GuestComponent/GuestComponent";
export default {
  name: "Guest",
  props: {
    landing_code: String
  },
  created() {
    this.$store.dispatch('user/loadClientLanding', this.landing_code).then((data) => {
      this.$store.dispatch('user/loadClientProducts', data['id']);
      this.$store.dispatch('user/loadClientLinks', data['id']);
    });
  },
  components: {
    GuestComponent
  }
};
</script>

<style scoped lang="scss">
.guest {
  background: #fafafa;
}
</style>
