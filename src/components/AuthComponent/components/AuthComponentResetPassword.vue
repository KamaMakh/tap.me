<template>
  <div class="auth-component-reset-password">
    <div class="title">
      Установите новый пароль
    </div>
    <div class="errors" v-if="errors">
      <ul>
        <li v-for="error in errors" v-bind:key="error">{{error}}</li>
      </ul>
    </div>
    <div
      class="input-wrap"
      :class="{
        'is-danger': showFormErrors && $v.form.password.$invalid
      }"
    >
      <b-form-input
        size="lg"
        placeholder="Пароль"
        type="password"
        v-model.trim="form.password"
      ></b-form-input>
    </div>
    <div
        class="input-wrap"
        :class="{
        'is-danger': showFormErrors && $v.form.password_confirmation.$invalid
      }"
    >
      <b-form-input
          size="lg"
          placeholder="Пароль еще раз"
          type="password"
          v-model.trim="form.password_confirmation"
      ></b-form-input>
    </div>
    <div class="input-wrap submit" @click="reset">
      <basic-button text="Восстановить" />
    </div>
    <b-link :to="{ name: 'AuthComponentTabs' }" class="back-button">
      Назад
    </b-link>
  </div>
</template>

<script>
import { required, sameAs } from "vuelidate/lib/validators";
export default {
  name: "AuthComponentResetPassword",
  props: {
    token: String,
    email: String
  },
  data() {
    return {
      form: {},
      showFormErrors: false,
      errors: []
    };
  },
  validations: {
    form: {
      password: {
        required
      },
      password_confirmation: {
        sameAsPassword: sameAs('password')
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
        if(!this.$v.form.password_confirmation.sameAsPassword) {
          this.errors.push('Пароль не совпадает');
        }
        return;
      } else {
        this.errors = [];
        var dataPass = {
          email: this.email,
          token: this.token,
          newPassword: this.form.password
        };
        this.$store.dispatch('user/resetPassword', dataPass).then(
            (data) => {
              if(data.status == 'ok') {
                this.$router.push('/auth');
              } else if (data.status == 'fail') {
                if(data.error == 'passwords.token') {
                  this.errors.push('Не верный токен');
                } else {
                  this.errors.push('Не удалось сменить пароль');
                }
              } else {
                this.errors.push('Не удалось сменить пароль');
              }
            }
        ).catch(
            data => {
              if(data.errors) {
                for(var i in data.errors) {
                  for(var a in data.errors[i]) {
                    this.errors.push(data.errors[i][a]);
                  }
                }
              }
            }
        );
      }
    }
  }
};
</script>

<style scoped lang="scss">
.auth-component-reset-password {
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
    margin: 10px 0;
    width: 100%;
    position: relative;
    &.submit {
      margin-top: 18px;
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
  .errors ul {
    margin: 0 0 10px 0;
    padding: 0;
  }
  .errors li {
    color: red;
    font-size: 13px;
    list-style-type: none;
    text-align: center;
  }
}
</style>
