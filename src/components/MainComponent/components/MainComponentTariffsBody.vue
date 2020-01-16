<template>
  <div v-if="!buyMode" class="main-component-tariffs-body">
    <span class="mob-title-wrap">
      <span @click="toggleLeftColumn">
        <main-title text="Тарифы" />
      </span>
    </span>
    <b-row v-if="windowWidth > 640">
      <b-col class="my-column" v-for="(item, key) in tariffs" :key="key">
        <div class="title">
          {{ item.name }}
        </div>
        <div class="price">
          {{ item.price }}
        </div>
        <div class="desc">
          {{ item.desc }}
        </div>
        <div class="list">
          <div v-for="(el, k) in item.options" :key="k" class="element">
            {{ el }}
          </div>
        </div>
        <span v-if="user.tariff_id !== item.id" @click="buyTariff(item)">
          <blue-button text="Выбрать" />
        </span>
        <span v-else class="current-tariff">
          Ваш текущий тариф
        </span>
      </b-col>
    </b-row>
    <b-row v-else>
      <b-tabs content-class="mt-3">
        <b-tab
          v-for="(item, key) in tariffs"
          :key="key"
          :title="item.name"
          class="my-column"
        >
          <div class="price">
            {{ item.price }}
          </div>
          <div class="desc">
            {{ item.desc }}
          </div>
          <div class="list">
            <div v-for="(el, k) in item.options" :key="k" class="element">
              {{ el }}
            </div>
          </div>
          <span v-if="user.tariff_id !== item.id" @click="buyTariff(item)">
            <blue-button text="Выбрать" />
          </span>
          <span v-else class="current-tariff">
            Ваш текущий тариф
          </span>
        </b-tab>
      </b-tabs>
    </b-row>
  </div>
  <div v-else class="main-component-tariffs-body">
    <span class="mob-title-wrap">
      <span @click="toggleLeftColumn">
        <main-title text="Купить PRO тариф" />
      </span>
    </span>
    <div class="form-wrap">
      <div class="title">Покупка <span>PRO</span> аккаунта ($84)</div>
      <b-form-group
        id="input-group-3"
        label="Номер карты "
        label-for="input-3"
        :class="{
          'is-danger':
            $v.card.number.$invalid && (card.number || showFormErrors)
        }"
      >
        <b-form-input
          id="input-3"
          v-model="card.number"
          placeholder="Номер карты"
          type="text"
          required
          v-mask="'#### #### #### ####'"
        ></b-form-input>
      </b-form-group>
      <b-row>
        <b-col md="6">
          <b-form-group
            id="input-group-4"
            label="ММ\ГГ"
            label-for="input-4"
            :class="{
              'is-danger':
                $v.card.date.$invalid && (card.date || showFormErrors)
            }"
          >
            <b-form-input
              id="input-4"
              v-model="card.date"
              placeholder="ММ\ГГ "
              type="text"
              required
              v-mask="'##\\##'"
            ></b-form-input>
          </b-form-group>
        </b-col>
        <b-col md="6">
          <b-form-group
            id="input-group-5"
            label="CVC"
            label-for="input-5"
            :class="{
              'is-danger': $v.card.cvc.$invalid && (card.cvc || showFormErrors)
            }"
          >
            <b-form-input
              id="input-5"
              v-model="card.cvc"
              placeholder="CVC"
              type="text"
              required
              v-mask="'###'"
            ></b-form-input>
          </b-form-group>
        </b-col>
      </b-row>
      <div @click="pay">
        <basic-button text="Купить" />
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { mapState } from "vuex";
import { required } from "vuelidate/lib/validators";
import VueMask from "v-mask";
Vue.use(VueMask);
export default {
  name: "MainComponentTariffsBody",
  data() {
    return {
      buyMode: false,
      card: {},
      showFormErrors: false,
      tariffs: [
        {
          id: 0,
          name: "Pro",
          price: "$9.99 /месяц",
          desc: "Все что нужно для растущего бизнеса",
          options: [
            "Все мессенджеры",
            "Все бесплатные функции",
            "Безлимитные продукты",
            "Создавайте категории и сортируйте продукты",
            "Добавьте ссылку на сайт",
            "Загрузите обложку на страницу",
            "Смотрите переходы и клики на вашей странице",
            "Facebook Pixel интеграция",
            "Google Analytics интеграция",
            "Уберите брендинг"
          ]
        },
        {
          id: 1,
          name: "Free",
          price: "$9.99 /месяц",
          desc: "Все что нужно для растущего бизнеса",
          options: [
            "Все мессенджеры",
            "Все бесплатные функции",
            "Безлимитные продукты",
            "Создавайте категории и сортируйте продукты",
            "Добавьте ссылку на сайт",
            "Загрузите обложку на страницу",
            "Смотрите переходы и клики на вашей странице",
            "Facebook Pixel интеграция",
            "Google Analytics интеграция",
            "Уберите брендинг"
          ]
        }
      ]
    };
  },
  validations: {
    card: {
      number: {
        required
      },
      date: {
        required
      },
      cvc: {
        required
      }
    }
  },
  computed: {
    ...mapState({
      user: state => state.user.user
    })
  },
  methods: {
    /* eslint-disable */
    buyTariff(tariff) {
      console.log(tariff);
      this.buyMode = true;
    },
    pay() {
      if (
        this.$v.card.$pending ||
        this.$v.card.$error ||
        this.$v.card.$invalid
      ) {
        this.showFormErrors = true;
        return;
      }
      alert("Оплата");
    },
    toggleLeftColumn() {
      this.$router.push("/main");
      this.$store.dispatch("user/toggleLeftColumn");
    }
  }
};
</script>

<style lang="scss">
.main-component-tariffs-body {
  max-width: 100%;
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
    @media all and(max-width: 960px) {
      display: flex;
    }
  }
  .row {
    @media all and(max-width: 640px) {
      justify-content: center;
    }
  }
  .nav-tabs {
    border: none;
    background: rgba(0, 0, 0, 0.1);
    .nav-item {
      font-weight: bold;
      font-size: 27px;
      color: #FF5C03;
      border: none;
      padding: 0;
      margin-bottom: 0;
      flex-grow: 1;
      text-align: center;
      a {
        border: none;
        color: #FF5C03;
        padding: 20px 0;
        &.active {
          box-shadow: inset 2px 1px 6px rgba(0, 0, 0, 0.160539);
        }
      }
    }
  }
  .tab-content {
    margin-top: 0 !important;
  }
  .my-column {
    width: 320px;
    background: rgba(0, 0, 0, 0.1);
    box-shadow: 0px 0px 27px rgba(0, 0, 0, 0.12);
    padding: 50px 25px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    margin: 0 5px;
    .title {
      font-weight: bold;
      font-size: 27px;
      color: #FF5C03;
      margin-bottom: 25px;
    }
    .price {
      font-weight: bold;
      font-size: 20px;
      margin-bottom: 10px;
    }
    .desc {
      font-weight: normal;
      font-size: 13px;
      margin-bottom: 10px;
    }
    .list {
      display: flex;
      flex-direction: column;
      margin-bottom: 45px;
      .element {
        font-weight: bold;
        font-size: 14px;
        line-height: 36px;
        color: #262626;
        padding-left: 34px;
        position: relative;
        &:before {
          position: absolute;
          content: '';
          display: block;
          width: 19px;
          height: 15px;
          background: url("../assets/tariffsico.png") 0 0 no-repeat;
          left: 0;
          top: 50%;
          margin-top: -7px;
        }
      }
    }
    .current-tariff {
      font-weight: 600;
      font-size: 14px;
      text-align: center;
      color: #A7A7A7;
      display: block;
    }
    @media all and(max-width: 640px) {
      margin: 0;
    }
  }
  .form-wrap {
    width: 575px;
    max-width: 100%;
    padding: 39px 40px;
    background: #FFFFFF;
    box-shadow: 0px 22px 21px rgba(0, 0, 0, 0.5);
    border-radius: 2px;
    .title {
      font-weight: 200;
      font-size: 28px;
      color: #151515;
      margin-bottom: 15px;
      span {
        color: #2749C8;
        font-weight: bold;
      }
      @media all and(max-width: 960px) {
        font-size: 28px;
      }
      @media all and(max-width: 640px) {
        font-size: 19px;
      }
    }
    label {
      font-weight: 600;
      font-size: 13px;
      color: #000;
      margin-bottom: 0;
      @media all and(max-width: 960px) {
        font-size: 12px;
        line-height: 19px;
      }
      @media all and(max-width: 640px) {
        font-size: 11px;
        line-height: 15px;
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
    @media all and(max-width: 960px) {
      -webkit-box-shadow: none;
      -moz-box-shadow: none;
      box-shadow: none;
    }
  }
}
</style>
