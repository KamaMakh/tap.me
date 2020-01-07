<template>
  <div class="auth-component-reset">
    <div class="title">
      Восстановить пароль
    </div>
    <div
      class="input-wrap email"
      :class="{
        'is-danger': $v.form.email.$invalid && (form.email || showFormErrors)
      }"
    >
      <b-form-input
        size="lg"
        placeholder="Электронная почта"
        type="email"
        v-model.trim="form.email"
      ></b-form-input>
    </div>
    <div style="width: 100%" @click="reset">
      <basic-button text="Восстановить" />
    </div>
    <div class="text-block">
      Ваш пароль будет отправлен Вам на почту
    </div>
    <b-link :to="{ name: 'AuthComponentTabs' }" class="back-button">
      Назад
    </b-link>
  </div>
</template>

<script>
import { required, email } from "vuelidate/lib/validators";
export default {
  name: "AuthComponentReset",
  data() {
    return {
      form: {},
      showFormErrors: false
    };
  },
  validations: {
    form: {
      email: {
        required,
        email
      }
    }
  },
  methods: {
    reset() {
      if (
        this.$v.form.$pending ||
        this.$v.form.$error ||
        this.$v.form.$invalid
      ) {
        this.showFormErrors = true;
        return;
      }
    }
  }
};
</script>

<style scoped lang="scss">
.auth-component-reset {
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
    color: #2a2a2a;
  }
  .input-wrap {
    margin-top: 20px;
    width: 100%;
    position: relative;
    &.email {
      margin-bottom: 18px;
    }
    input {
      border: 1px solid #cccccc;
      box-sizing: border-box;
      border-radius: 0;
      padding: 1.6rem 1rem;
      outline: none;
      font-size: 14px;
      font-weight: 600;
      color: #959595;
      &:focus {
        border: 2px solid #1b3fc6;
        outline: none;
        -webkit-box-shadow: none;
        -moz-box-shadow: none;
        box-shadow: none;
      }
    }
    &.is-danger {
      input {
        border-color: #f04124 !important;
        color: #f04124;
      }
    }
  }
  .text-block {
    font-weight: 600;
    font-size: 13px;
    line-height: 19px;
    text-align: center;
    color: #434343;
    background: #f2f2f2;
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
    color: #d5d5d5;
  }
}
</style>
