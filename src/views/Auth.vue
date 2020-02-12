<template>
  <div class="auth">
    <general-header :noButton="true" />
    <div class="inner">
      <AuthComponent />
    </div>
  </div>
</template>

<script>
import AuthComponent from "@/components/AuthComponent/AuthComponent";
export default {
  name: "Auth",
  components: {
    AuthComponent
  }
};
</script>

<style scoped lang="scss">
.auth {
  background: url("../assets/authbackground.png") 50% no-repeat fixed;
  -webkit-background-size: cover;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 60px 15px;
  overflow: auto;
  min-height: 100%;
  .inner {
    max-width: 1172px;
    max-height: 100%;
    /*overflow: auto;*/
    margin: 0 auto;
  }
}

@media all and (max-width: 450px) {
  .auth {
    padding: 15px;
    .inner {
      max-width: 100%;
    }
  }
}
</style>
