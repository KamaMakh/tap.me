<template>
  <div v-if="!resetPass" class="main-component-settings-form">
    <span class="mob-title-wrap">
      <span @click="toggleLeftColumn">
        <main-title text="Настройки" />
      </span>
      <span class="ico">
        <b-link :to="{ name: 'MainComponentShare' }">
          <svg
            width="21"
            height="30"
            viewBox="0 0 21 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.2234 8.73328V9.83328H19.7531V28.6333H1.24688V9.83328H7.77656V8.73328H0.164062V29.7333H20.8359V8.73328H13.2234Z"
              fill="#FF5C03"
            />
            <path
              d="M9.94219 11.5334V19.2334H11.025V11.5334V7.23339V2.36672L14.6344 6.03339L15.3891 5.26672L10.4672 0.266724L5.54532 5.26672L6.30001 6.03339L9.90938 2.36672V7.23339V11.5334H9.94219Z"
              fill="#FF5C03"
            />
          </svg>
        </b-link>
      </span>
    </span>
    <b-form-group
      id="input-group-3"
      label="Имя"
      label-for="input-3"
      :class="{
        'is-danger': $v.user.name.$invalid && (user.name || showFormErrors)
      }"
    >
      <b-form-input
        id="input-3"
        v-model="user.name"
        placeholder="Имя"
        type="text"
        required
      ></b-form-input>
    </b-form-group>
    <b-form-group
      id="input-group-4"
      label="Email"
      label-for="input-4"
      :class="{
        'is-danger': $v.user.email.$invalid && (user.email || showFormErrors)
      }"
    >
      <b-form-input
        id="input-4"
        v-model="user.email"
        placeholder="Email"
        type="text"
        required
      ></b-form-input>
    </b-form-group>
    <b-form-group
      id="input-group-5"
      label="Язык"
      label-for="input-5"
      :class="{
        'is-danger': $v.user.lang.$invalid && (user.lang || showFormErrors)
      }"
    >
      <b-form-select
        v-model="user.lang"
        :options="langs"
        id="input-5"
      ></b-form-select>
    </b-form-group>

    <div class="edit-pass" @click="resetPass = true">
      Изменить пароль
    </div>
    <b-form-group
      :class="{
        'is-danger': !confirm && showFormErrors
      }"
    >
      <b-form-checkbox size="lg" v-model="confirm"
        >Подписка на новые обновления и функции TapMe.</b-form-checkbox
      >
    </b-form-group>
    <div @click="save">
      <basic-button text="Сохранить" />
    </div>
  </div>
  <div v-else class="main-component-settings-form">
    <span class="mob-title-wrap">
      <span @click="toggleLeftColumn">
        <main-title text="Изменить пароль" />
      </span>
      <span class="ico">
        <b-link :to="{ name: 'MainComponentShare' }">
          <svg
            width="21"
            height="30"
            viewBox="0 0 21 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.2234 8.73328V9.83328H19.7531V28.6333H1.24688V9.83328H7.77656V8.73328H0.164062V29.7333H20.8359V8.73328H13.2234Z"
              fill="#FF5C03"
            />
            <path
              d="M9.94219 11.5334V19.2334H11.025V11.5334V7.23339V2.36672L14.6344 6.03339L15.3891 5.26672L10.4672 0.266724L5.54532 5.26672L6.30001 6.03339L9.90938 2.36672V7.23339V11.5334H9.94219Z"
              fill="#FF5C03"
            />
          </svg>
        </b-link>
      </span>
    </span>
    <b-form-group
      id="input-group-44"
      label="Введите новый пароль"
      label-for="input-44"
      :class="{
        'is-danger':
          $v.password.new_password.$invalid &&
          (password.new_password || showFormErrors)
      }"
    >
      <b-form-input
        id="input-44"
        v-model="password.new_password"
        placeholder="Новый пароль"
        type="password"
        required
      ></b-form-input>
    </b-form-group>
    <b-form-group
      id="input-group-45"
      label="Повторите Пароль"
      label-for="input-45"
      :class="{
        'is-danger':
          $v.password.c_new_password.$invalid &&
          (password.c_new_password || showFormErrors)
      }"
    >
      <b-form-input
        id="input-45"
        v-model="password.c_new_password"
        placeholder="Повторите Пароль"
        type="password"
        required
      ></b-form-input>
    </b-form-group>
    <div @click="savePass">
      <basic-button text="Сохранить" />
    </div>
    <div class="back" @click="resetPass = false">
      Назад
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { required, email } from "vuelidate/lib/validators";
export default {
  name: "MainComponentSettingsForm",
  data() {
    return {
      resetPass: false,
      showFormErrors: false,
      password: {},
      confirm: false,
      langs: [
        {
          text: "Русский",
          value: "ru"
        },
        {
          text: "English",
          value: "en"
        }
      ]
    };
  },
  methods: {
    save() {
      if (
        this.$v.user.$pending ||
        this.$v.user.$error ||
        this.$v.user.$invalid
      ) {
        this.showFormErrors = true;
        return;
      } else {
        this.$store.dispatch(
          "user/updateAccount",
          {
            name: this.user.name,
            email: this.user.email,
            lang: this.user.lang
          },
          () => {
            this.$store.dispatch("user/loadAccount");
          }
        );
      }
    },
    savePass() {
      if (
        this.$v.password.$pending ||
        this.$v.password.$error ||
        this.$v.password.$invalid
      ) {
        this.showFormErrors = true;
        return;
      }
    },
    toggleLeftColumn() {
      this.$router.push("/main");
      this.$store.dispatch("user/toggleLeftColumn");
    }
  },
  computed: {
    ...mapState({
      user: state => state.user.user
    })
  },
  validations: {
    user: {
      name: {
        required
      },
      email: {
        required,
        email
      },
      lang: {
        required
      }
    },
    password: {
      new_password: {
        required
      },
      c_new_password: {
        required
      }
    }
  }
};
</script>

<style lang="scss">
.main-component-settings-form {
  width: 457px;
  max-width: 100%;
  background: #fff;
  box-shadow: 0 22px 21px rgba(0, 0, 0, 0.5);
  border-radius: 23px;
  padding: 29px 40px;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  .mob-title-wrap {
    display: none;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 25px;
    border-bottom: 1px solid #e5e5e5;
    .main-component-title {
      flex: 1;
      border: none;
    }
    @media all and(max-width: 640px) {
      display: flex;
    }
  }
  @media all and(max-width: 960px) {
    width: 411px;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
  }
  @media all and(max-width: 640px) {
    width: 310px;
    margin: 0 auto;
    padding: 0;
  }
  label {
    font-weight: 600;
    font-size: 13px;
    color: #000;
    margin-bottom: 0;
    @media all and(max-width: 960px) {
      font-size: 12px;
    }
    @media all and(max-width: 640px) {
      font-size: 11px;
    }
  }
  input,
  select {
    font-weight: 600;
    font-size: 14px;
    color: #4f4b4b;
    border: 1px solid #ccc;
    height: 55px;
    display: flex;
    align-items: center;
    border-radius: 0;
    @media all and(max-width: 960px) {
      font-size: 13px;
      padding: 12px;
      height: auto;
    }
    @media all and(max-width: 640px) {
      font-size: 12px;
    }
  }
  .edit-pass {
    margin-top: 30px;
    margin-bottom: 19px;
    text-align: center;
    font-weight: 500;
    font-size: 14px;
    color: #1b3fc6;
    cursor: pointer;
    @media all and(max-width: 640px) {
      font-size: 11px;
    }
  }
  .is-danger {
    input,
    select {
      border-color: #f04124 !important;
      color: #f04124;
    }
    .custom-checkbox {
      label {
        color: #f04124;
      }
    }
  }
  .custom-checkbox {
    margin-bottom: 20px;
    label {
      font-weight: 200;
      font-size: 16px;
      color: #151515;
      padding-left: 30px;
      &:after,
      &:before {
        width: 40px !important;
        height: 40px !important;
        border-radius: 5px !important;
      }
      @media all and(max-width: 960px) {
        font-size: 12px;
      }
      @media all and(max-width: 640px) {
        font-size: 13px;
      }
    }
  }
  .back {
    font-weight: 500;
    font-size: 14px;
    color: #8a8a8a;
    margin-top: 30px;
    text-align: center;
    cursor: pointer;
  }
}
</style>
