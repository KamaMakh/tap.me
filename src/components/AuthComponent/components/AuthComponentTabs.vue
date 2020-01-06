<template>
  <div class="auth-component-tabs">
    <b-card no-body>
      <b-tabs card fill>
        <b-tab title="Авторизация" active>
          <Login/>
        </b-tab>
        <b-tab title="Регистрация">
          <Register/>
        </b-tab>
      </b-tabs>
    </b-card>
  </div>
</template>

<script>
import AuthComponentLogin from "./AuthComponentLogin";
import AuthComponentRegistration from "./AuthComponentRegistration";
export default {
  name: "AuthComponentTabs",
  components: {
    Login: AuthComponentLogin,
    Register: AuthComponentRegistration
  }
}
</script>

<style lang="scss">
.auth-component-tabs {
  width: 430px;
  max-width: 100%;
  .card {
    border-radius: 7px;
    border: none;
    background: #fff;
  }
  .card-header {
    padding: 0;
    border: none;
    background: #fff;
    border-radius: 7px !important;
  }
  .card-header-tabs {
    margin: 0;
  }
  .nav-tabs .nav-link {
    font-weight: 600;
    font-size: 15px;
    color: #666666;
    border: none;
    background: #F2F2F2;
    box-shadow: inset 2.1px -2.1px 3px rgba(0, 0, 0, 0.05);
    border-radius: 7px;
    height: 64px;
    display: flex;
    align-items: center;
    justify-content: center;
    outline: none;
  }
  .nav-tabs .nav-link.active,
  .nav-tabs .nav-item.show .nav-link {
    font-weight: 600;
    font-size: 16px;
    color: #2A2A2A;
    background: transparent;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
  }
  .nav-tabs .nav-item {
    padding: 1px;
  }
  .card-body {
    padding: 40px 39px;
  }
  .tab-content > .active {
    outline: none;
  }
}
</style>
