<template>
  <div v-if="!resetPass" class="main-component-settings-form">
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
    <b-form-group
      id="input-group-4"
      label="Введите новый пароль"
      label-for="input-4"
      :class="{
        'is-danger':
          $v.password.new_password.$invalid &&
          (password.new_password || showFormErrors)
      }"
    >
      <b-form-input
        id="input-4"
        v-model="password.new_password"
        placeholder="Новый пароль"
        type="password"
        required
      ></b-form-input>
    </b-form-group>
    <b-form-group
      id="input-group-4"
      label="Повторите Пароль"
      label-for="input-4"
      :class="{
        'is-danger':
          $v.password.c_new_password.$invalid &&
          (password.c_new_password || showFormErrors)
      }"
    >
      <b-form-input
        id="input-4"
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
  label {
    font-weight: 600;
    font-size: 13px;
    color: #000;
    margin-bottom: 0;
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
  }
  .edit-pass {
    margin-top: 30px;
    margin-bottom: 19px;
    text-align: center;
    font-weight: 500;
    font-size: 14px;
    color: #1b3fc6;
    cursor: pointer;
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
