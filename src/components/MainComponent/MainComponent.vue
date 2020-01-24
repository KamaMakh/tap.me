<template>
  <div class="main-component">
    <b-row class="my-row">
      <b-col
        v-if="
          ((!hideLeft && windowWidth <= 640) || windowWidth > 640) &&
            ($route.name !== 'MainComponentTariffs' || windowWidth > 960)
        "
        class="left-nav"
      >
        <router-view></router-view>
      </b-col>
      <b-col
        v-if="
          $route.name === 'MainComponentSettings' &&
            ((hideLeft && windowWidth <= 640) || windowWidth > 640)
        "
        class="right-nav"
      >
        <settingsForm />
      </b-col>
      <b-col
        v-else-if="
          $route.name === 'MainComponentTariffs' &&
            ((hideLeft && windowWidth <= 640) || windowWidth > 640)
        "
        class="right-nav"
      >
        <tariffsBody />
      </b-col>
      <b-col
        v-else-if="
          $route.name === 'MainComponentProduct' &&
            ((hideLeft && windowWidth <= 640) || windowWidth > 640)
        "
        class="right-nav"
      >
        <product-card />
      </b-col>
      <b-col
        v-else-if="(hideLeft && windowWidth <= 640) || windowWidth > 640"
        class="right-nav"
      >
        <MainComponentCard is-admin="true" />
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { mapState } from "vuex";
import MainComponentCard from "./components/MainComponentCard";
import MainComponentSettingsForm from "./components/MainComponentSettingsForm";
import MainComponentTariffsBody from "./components/MainComponentTariffsBody";
import MainComponentProductCard from "./components/MainComponentProductCard";
export default {
  name: "MainComponent",
  created() {
    this.$store.dispatch("user/loadLanding").then(() => {
      this.$store.dispatch("user/loadProducts");
      this.$store.dispatch("user/loadLinks");
      this.$store.dispatch("user/setLandingFormData");
      this.$store.dispatch("user/getAccount");
    });
  },
  components: {
    MainComponentCard,
    settingsForm: MainComponentSettingsForm,
    tariffsBody: MainComponentTariffsBody,
    productCard: MainComponentProductCard
  },
  computed: {
    ...mapState({
      hideLeft: state => state.user.hideLeft
    })
  }
};
</script>

<style lang="scss">
.main-component {
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  height: 100%;
  min-height: 100%;
  .my-row {
    margin: 0;
    height: 100%;
    min-height: 100%;
    @media all and(max-width: 640px) {
      flex-direction: column;
      align-items: center;
    }
  }
  .left-nav {
    max-width: 376px;
    min-width: 376px;
    padding: 15px 16px !important;
    background: #fff;
    border-right: 1px solid #dcd6d3;
    @media all and(max-width: 816px) and(min-width: 641px) {
      width: 311px;
      max-width: none;
      min-width: 0;
    }
    @media all and(max-width: 640px) {
      margin: 0 auto;
      border: none;
      width: 400px;
      max-width: 100%;
      min-width: 0;
    }
  }
  .right-nav {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 135px 15px;
    background: #fafafa;
    @media all and(max-width: 960px) {
      padding: 15px;
      align-items: flex-start;
      background: #fff;
    }
    @media all and(max-width: 640px) {
      display: block;
    }
  }
}
html {
  height: inherit;
}
@media all and (min-width: 1400px) {
  html {
    height: 100%;
  }
}
</style>
