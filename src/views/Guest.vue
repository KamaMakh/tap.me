<template>
  <div class="guest">
    <GuestComponent v-if="isLoaded" />
  </div>
</template>

<script>
import GuestComponent from "@/components/GuestComponent/GuestComponent";
export default {
  name: "Guest",
  props: {
    landing_code: String
  },
  data() {
    return {
      isLoaded: false
    }
  },
  created() {
    this.$store
      .dispatch("user/loadClientLanding", this.landing_code)
      .then(data => {
        this.isLoaded = true;
        this.$store.dispatch("user/loadClientProducts", data["id"]);
        this.$store.dispatch("user/loadClientLinks", data["id"]);
      }).catch(() => {
        this.$router.push('/not-found');
    })
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
