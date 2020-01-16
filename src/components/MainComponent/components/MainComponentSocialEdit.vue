<template>
  <div class="main-component-social-edit">
    <div class="title">
      <span>
        <b-link :to="{ name: 'MainComponentSocials' }">
          <svg
            width="11"
            height="19"
            viewBox="0 0 11 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <rect width="11" height="19" fill="url(#pattern0)" />
            <mask
              id="mask0"
              mask-type="alpha"
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="11"
              height="19"
            >
              <rect width="11" height="19" fill="url(#pattern1)" />
            </mask>
            <g mask="url(#mask0)">
              <rect width="11" height="19" fill="black" fill-opacity="0.01" />
            </g>
            <defs>
              <pattern
                id="pattern0"
                patternContentUnits="objectBoundingBox"
                width="1"
                height="1"
              >
                <use
                  xlink:href="#image0"
                  transform="scale(0.0909091 0.0526316)"
                />
              </pattern>
              <pattern
                id="pattern1"
                patternContentUnits="objectBoundingBox"
                width="1"
                height="1"
              >
                <use
                  xlink:href="#image0"
                  transform="scale(0.0909091 0.0526316)"
                />
              </pattern>
              <image
                id="image0"
                width="11"
                height="19"
                xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAATCAYAAABGKffQAAABdmlDQ1BJQ0MgUHJvZmlsZQAAeJx1kc8rBGEYxz+7iFg5cJAc5oAkaqPkyDq4bNKiLC47s7O7anZ2mtlNclUuDspBXPw6+A+4KldKKVKS8h/4ddE2ntdsrWTf6Z3n0/d9v0/v+30hHLeMvFcfhbxddBNTMW0huag1vhChkxa6GUgZnjMxMxOn5vi8I6Tq7ZDqVXvfv6MlbXoGhJqERw3HLQqPC8dXi47iLeEOI5dKCx8KD7pyQOErpesBPyvOBvyu2J1LTEJY9dSyv1j/xUbOzQv3C/fkrZJROY+6ScS052eldsnsxiPBFDE0dEqsYFFkSKotmf3vi/74pimIx5C/wxquOLLkxDsoakm6mlIzopvyWayp3P/m6WVGhoPukRg0PPn+Wy807kB52/e/jny/fAx1j3BhV/0FyWnsQ/TtqtZzAG0bcHZZ1fRdON+Ezgcn5aZ+pDqZ4UwGXk+hNQntN9C8FGRVWefkHubW5YmuYW8f+mR/2/I3BFZoDMcvwwIAAABzSURBVHicjdLBCYAwDEbhJ7iAC1TcH3QCTypu4SrxYiSUpsl//l7ooRBvFBFEJIQFOIAlwgV4AAE2YMjAW5+Shi3swhp3ocUhVJyCivcPCjB5UPFsLl/R5XRgFwb1ukFrbuCtGfRmg5XOr7PBSeI/6/43v9Maz86BoB+NAAAAAElFTkSuQmCC"
              />
            </defs>
          </svg>
        </b-link>
      </span>
      <span>
        <img :src="social.icon" />
      </span>
      {{ social.name }}
    </div>
    <div
      v-if="social.id === 1 || social.id === 2 || social.id === 5"
      class="input-wrap"
      role="group"
      :class="{
        'is-danger':
          $v.social.value.$invalid && (social.value || showFormErrors)
      }"
    >
      <label for="input-live4">Ваш номер телефона</label>
      <b-form-input
        id="input-live4"
        v-model="social.value"
        placeholder="+7-000-000-00-00"
        trim
      ></b-form-input>
    </div>
    <div
      v-else-if="social.id === 0 || social.id === 6"
      class="input-wrap"
      role="group"
      :class="{
        'is-danger':
          $v.social.value.$invalid && (social.value || showFormErrors)
      }"
    >
      <label for="input-live4">Ссылка на профиль</label>
      <b-form-input
        id="input-live4"
        v-model="social.value"
        placeholder="https://"
        trim
      ></b-form-input>
    </div>
    <div
      v-else-if="social.id === 3 || social.id === 4"
      class="input-wrap"
      role="group"
      :class="{
        'is-danger':
          $v.social.value.$invalid && (social.value || showFormErrors)
      }"
    >
      <label for="input-live4">Имя пользователя</label>
      <b-form-input
        id="input-live4"
        v-model="social.value"
        placeholder="username"
        trim
      ></b-form-input>
    </div>

    <div
      v-if="social.id === 1 || social.id === 2 || social.id === 5"
      class="info"
    >
      Введите номер телефона в следующей последовательности:
      <br /><br />
      • код страны <br />
      • код оператора <br />
      • номер телефона <br />
      <br /><br />
      Пример: +380734645261
    </div>
    <div v-else-if="social.id === 0 || social.id === 6" class="info">
      Введите ссылку на страницу вашего профиля в {{ social.name }}
    </div>
    <div v-else-if="social.id === 3 || social.id === 4" class="info">
      Введите иям пользователя в {{ social.name }}
    </div>
    <span @click="save">
      <basic-button text="Сохранить" />
    </span>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { required } from "vuelidate/lib/validators";
export default {
  props: ["element"],
  name: "MainComponentSocialEdit",
  data() {
    return {
      showFormErrors: false
    };
  },
  methods: {
    save() {
      if (
        this.$v.social.$pending ||
        this.$v.social.$error ||
        this.$v.social.$invalid
      ) {
        this.showFormErrors = true;
        return;
      }
    }
  },
  computed: {
    ...mapState({
      user: state => state.user.user,
      social: state => state.user.social
    })
  },
  validations: {
    social: {
      value: {
        required
      }
    }
  }
};
</script>

<style scoped lang="scss">
.main-component-social-edit {
  display: flex;
  flex-direction: column;
  .title {
    font-weight: normal;
    font-size: 36px;
    line-height: 30px;
    color: #151515;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #e5e5e5;
    padding-left: 16px;
    padding-right: 16px;
    padding-bottom: 23px;
    margin-right: -16px;
    margin-left: -16px;
    margin-bottom: 30px;
    span {
      margin-right: 18px;
      cursor: pointer;
      text-decoration: none;
    }
  }
  .input-wrap {
    margin-bottom: 16px;
    label {
      font-weight: 600;
      font-size: 13px;
      text-align: right;
      color: #000000;
      margin-bottom: 4px;
    }
    input,
    select {
      background: #ffffff;
      border: 1px solid #cccccc;
      border-radius: 0;
      padding: 16px 13px;
      height: auto;
      box-sizing: border-box;
      font-weight: normal;
      font-size: 14px;
      color: #959595;
    }
    textarea {
      border-radius: 0;
    }
    &.is-danger {
      input,
      select {
        border-color: #f04124 !important;
        color: #f04124;
      }
    }
  }
  .info {
    font-weight: 200;
    font-size: 14px;
    line-height: 17px;
    letter-spacing: -0.163333px;
    color: #151515;
    mix-blend-mode: normal;
    opacity: 0.6;
    margin-bottom: 40px;
  }
}
</style>
