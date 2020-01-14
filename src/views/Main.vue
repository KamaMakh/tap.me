<template>
  <div class="main">
    <MainComponent />
  </div>
</template>

<script>
import MainComponent from "@/components/MainComponent/MainComponent";
export default {
  name: "Main",
  components: {
    MainComponent
  }
};
</script>

<style scoped lang="scss">
.main {
  height: 100%;
  background: linear-gradient(
    to right,
    white 0%,
    white 50%,
    #fff 50%,
    #fafafa 50%,
    #fafafa 100%
  );
}
</style>
