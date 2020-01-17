<template>
  <div class="guest-component-link">
    <MainComponentCard />
  </div>
</template>

<script>
import { mapState } from "vuex";
import MainComponentCard from "@/components/MainComponent/components/MainComponentCard";
export default {
  name: "GuestComponentLink",
  data() {
    return {
      showProduct: false
    };
  },
  components: {
    MainComponentCard
  },
  computed: {
    ...mapState({
      user: state => state.user.user,
      product: state => state.user.product
    })
  },
  mounted() {
    this.$store.dispatch("user/clearProduct");
  }
};
</script>

<style scoped lang="scss"></style>
