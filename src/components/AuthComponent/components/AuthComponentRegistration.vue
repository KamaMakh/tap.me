<template>
  <div class="auth-component-registration">
    <div class="top-text">
      <span>Для регистрации, вам необходимо авторизоваться через Instagram профиль, для которого высоздаете страницу</span>
    </div>
    <instbtn/>
    <div class="inst-info-text">
      <span>Вы будете направлены на сайт instagram.com для авторизации в вашем аккаунте</span>
    </div>
    <div class="or-text">
      <span>или</span>
    </div>
    <div class="input-wrap email">
      <b-form-input size="lg" placeholder="Электронная почта" type="email"></b-form-input>
    </div>
    <div class="input-wrap password">
      <b-form-input size="lg" placeholder="Пароль" type="password"></b-form-input>
    </div>
    <basic-button text="Зарегестрироваться" />
  </div>
</template>

<script>
import AuthComponentInstBtn from "./AuthComponentInstBtn";
export default {
  name: "AuthComponentRegistration",
  components: {
    instbtn: AuthComponentInstBtn
  }
}
</script>

<style scoped lang="scss">
.auth-component-registration {
  display: flex;
  flex-direction: column;
  align-items: center;
  .top-text {
    font-weight: 600;
    font-size: 14px;
    line-height: 23px;
    text-align: center;
    color: #272727;
    margin-bottom: 25px;
  }
  .inst-info-text {
    font-weight: 600;
    font-size: 12px;
    line-height: 19px;
    text-align: center;
    color: #434343;
    background: #F2F2F2;
    border: 1px solid #E4E4E4;
    box-sizing: border-box;
    padding: 13px 14px;
    margin-top: 19px;
  }
  .or-text {
    font-weight: 600;
    font-size: 14px;
    line-height: 23px;
    text-align: center;
    color: #272727;
    margin-top: 9px;
    margin-bottom: 12px;
  }
  .input-wrap {
    width: 100%;
    position: relative;
    &.password {
      margin-top: 12px;
      margin-bottom: 14px;
    }
    input {
      border: 1px solid #CCCCCC;
      box-sizing: border-box;
      border-radius: 0;
      padding: 1.6rem 1rem;
      outline: none;
      font-size: 14px;
      font-weight: 600;
      color: #959595;
      &:focus {
        border: 2px solid #1B3FC6;
        outline: none;
        -webkit-box-shadow: none;
        -moz-box-shadow: none;
        box-shadow: none;
      }
    }
  }
}
</style>
