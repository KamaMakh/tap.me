<template>
  <div class="main-component">
    <b-row class="my-row">
      <b-col class="left-nav">
        <router-view></router-view>
      </b-col>
      <b-col class="right-nav">
        <MainComponentCard />
      </b-col>
    </b-row>
  </div>
</template>

<script>
import MainComponentCard from "./components/MainComponentCard";
export default {
  name: "MainComponent",
  components: {
    MainComponentCard
  }
};
</script>

<style scoped lang="scss">
.main-component {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  .my-row {
    margin: 0;
  }
  .left-nav {
    max-width: 376px;
    min-width: 376px;
    padding: 15px 16px !important;
    background: #fff;
    border-right: 1px solid #dcd6d3;
  }
  .right-nav {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 135px 15px;
    background: #fafafa;
  }
}
@media all and (max-width: 640px) {
  .main-component {
    .my-row {
      .left-nav {
        min-width: 100%;
        max-width: 100%;
      }
    }
  }
}
</style>
