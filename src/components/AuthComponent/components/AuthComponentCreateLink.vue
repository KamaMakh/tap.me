<template>
  <div class="auth-component-create-link">
    <div class="title">
      Создайте свою ссылку
    </div>
    <div class="input-wrap email">
      <b-form-input size="lg" placeholder="tap.me/ anna" type="text"></b-form-input>
    </div>
    <basic-button text="Восстановить" />
    <div class="text-block">
      Ваш пароль будет отправлен Вам на почту
    </div>
    <b-link :to="{ name: 'AuthComponentTabs' }" class="back-button">
      Назад
    </b-link>
  </div>
</template>

<script>
export default {
  name: "AuthComponentCreateLink"
}
</script>

<style scoped lang="scss">
  .auth-component-create-link {
    width: 430px;
    max-width: 100%;
    padding: 35px 39px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #fff;
    border-radius: 7px;
    border: none;
    .title {
      font-weight: 600;
      font-size: 16px;
      text-align: center;
      color: #2A2A2A;
    }
    .input-wrap {
      margin-top: 20px;
      width: 100%;
      position: relative;
      &.email {
        margin-bottom: 18px;
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
    .text-block {
      font-weight: 600;
      font-size: 13px;
      line-height: 19px;
      text-align: center;
      color: #434343;
      background: #F2F2F2;
      margin-top: 21px;
      border: 1px solid #e4e4e4;
      width: 100%;
      padding: 35px 10px;
    }
    .back-button {
      text-decoration: none;
      margin-top: 34px;
      font-size: 17px;
      text-align: center;
      color: #D5D5D5;
    }
  }
</style>
