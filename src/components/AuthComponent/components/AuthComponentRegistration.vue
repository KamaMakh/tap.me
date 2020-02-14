<template>
  <div class="auth-component-registration">
    <div class="top-text">
      <span
        >Для регистрации, вам необходимо авторизоваться через Instagram профиль,
        для которого высоздаете страницу</span
      >
    </div>
    <instbtn />
    <div class="inst-info-text">
      <span
        >Вы будете направлены на сайт instagram.com для авторизации в вашем
        аккаунте</span
      >
    </div>
    <div class="or-text">
      <span>или</span>
    </div>
    <div
      class="input-wrap email"
      :class="{
        'is-danger':
          (emailFieldErrors || $v.form.email.$invalid) &&
          (form.email || showFormErrors)
      }"
    >
      <b-form-input
        size="lg"
        name="email"
        placeholder="Электронная почта"
        type="email"
        v-model.trim="form.email"
      ></b-form-input>
      <div v-if="emailFieldErrors" class="error-not-unique">
        {{ emailFieldErrors }}
      </div>
    </div>
    <div
      class="input-wrap password"
      :class="{
        'is-danger':
          (passwordFieldErrors || $v.form.password.$invalid) &&
          (form.password || showFormErrors)
      }"
    >
      <b-form-input
        name="password"
        size="lg"
        placeholder="Пароль"
        type="password"
        v-model="form.password"
      ></b-form-input>
      <div v-if="passwordFieldErrors" class="error-not-unique">
        {{ passwordFieldErrors }}
      </div>
    </div>
    <div v-if="!loading" style="width: 100%" @click="register">
      <basic-button text="Зарегистрироваться" />
    </div>
    <div v-else>
      <basic-button text="Войти" :loading="true" />
    </div>
  </div>
</template>

<script>
import { required, email } from "vuelidate/lib/validators";
import AuthComponentInstBtn from "./AuthComponentInstBtn";
export default {
  name: "AuthComponentRegistration",
  components: {
    instbtn: AuthComponentInstBtn
  },
  data() {
    return {
      form: {},
      showFormErrors: false,
      emailFieldErrors: false,
      passwordFieldErrors: false,
      loading: false
    };
  },
  validations: {
    form: {
      email: {
        required,
        email
      },
      password: {
        required
      }
    }
  },
  methods: {
    register() {
      this.emailFieldErrors = false;
      this.passwordFieldErrors = false;
      if (
        this.$v.form.$pending ||
        this.$v.form.$error ||
        this.$v.form.$invalid
      ) {
        this.showFormErrors = true;
        return;
      } else {
        this.loading = true;
        this.$store
          .dispatch("user/registration", {
            email: this.form.email,
            password: this.form.password
          })
          .then(() => {
            this.$router.push("/main");
          })
          .catch(data => {
            if (data["errors"]["email"]) {
              this.emailFieldErrors = data["errors"]["email"].join(", ");
            }

            if (data["errors"]["password"]) {
              this.passwordFieldErrors = data["errors"]["password"].join(", ");
            }
            this.showFormErrors = true;
          })
          .finally(() => {
            this.loading = false;
          });
      }
    }
  }
};
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
    @media all and(max-width: 768px) {
      font-size: 13px;
    }
    @media all and(max-width: 640px) {
      font-size: 11px;
    }
  }
  .inst-info-text {
    font-weight: 600;
    font-size: 12px;
    line-height: 19px;
    text-align: center;
    color: #434343;
    background: #f2f2f2;
    border: 1px solid #e4e4e4;
    box-sizing: border-box;
    padding: 13px 14px;
    margin-top: 19px;
    @media all and(max-width: 768px) {
      font-size: 13px;
    }
    @media all and(max-width: 640px) {
      display: none;
    }
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

    .error-not-unique {
      color: red;
      font-size: 12px;
    }
  }
}
</style>
