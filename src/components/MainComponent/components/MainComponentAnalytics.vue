<template>
  <div class="main-component-analytics">
    <main-title text="Аналитика" :to="{ name: 'MainComponentMyPage' }" />
    <div v-if="user.tariffName == 'pro'">
      <div class="activate">
        <div class="sub-title">
          Подключить
        </div>
        <div class="buttons">
          <div class="fb-analytics"></div>
          <div class="google-analytics"></div>
        </div>
      </div>
      <div class="click-stats">
        <div class="sub-title">
          Клики
        </div>
        <div v-for="(element, key) in clicks" class="item" :key="key">
          <div class="left">
            <span>
              <img
                v-if="element.id === 0"
                src="../assets/socials/fb.png"
                :alt="element.name"
              />
              <img
                v-else-if="element.id === 1"
                src="../assets/socials/viber.png"
                :alt="element.name"
              />
              <img
                v-else-if="element.id === 2"
                src="../assets/socials/tg.png"
                :alt="element.name"
              />
              <img
                v-else-if="element.id === 3"
                src="../assets/socials/fbm.png"
                :alt="element.name"
              />
              <img
                v-else-if="element.id === 4"
                src="../assets/socials/skype.png"
                :alt="element.name"
              />
              <img
                v-else-if="element.id === 5"
                src="../assets/socials/whatsapp.png"
                :alt="element.name"
              />
              <img
                v-else-if="element.id === 6"
                src="../assets/socials/vk.png"
                :alt="element.name"
              />
            </span>
          </div>
          <div class="right">
            <div class="name">{{ element.name }}</div>
            <div class="stats">
              <div class="stats-item">
                <div class="count">{{ element.day }}</div>
                <div class="text">За день</div>
              </div>
              <div class="stats-item">
                <div class="count">{{ element.week }}</div>
                <div class="text">За неделю</div>
              </div>
              <div class="stats-item">
                <div class="count">{{ element.month }}</div>
                <div class="text">За месяц</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <div class="help-block">
        <div class="help-title">Перейдите на <span>PRO</span></div>
        <div class="help-sub-title">
          Данный функионал <br />
          доступен в PRO аккаунте
        </div>
        <div v-if="user.tariffName !== 'pro'" class="pro-btn" @click="toPro()">
          Перейти на Pro
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "MainComponentAnalytics",
  data() {
    return {
      clicks: [
        {
          id: 3,
          name: "Facebook Messanger",
          day: 21,
          week: 103,
          month: 1244
        },
        {
          id: 5,
          name: "WhatsApp",
          day: 21,
          week: 103,
          month: 1244
        }
      ]
    };
  },
  methods: {
    toPro() {
      this.$router.push("/main/tariffs");
    }
  },
  computed: {
    ...mapState({
      user: state => state.user.user
    })
  }
};
</script>

<style scoped lang="scss">
.main-component-analytics {
  padding-top: 15px;
  .help-block {
    border-radius: 8px;
    background: #fafafa;
    margin-top: 21px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 35px 20px;
  }
  .help-title {
    font-weight: 200;
    font-size: 24px;
    color: #151515;
    text-align: center;
    span {
      font-weight: 900;
    }
    @media all and(max-width: 960px) {
      font-size: 22px;
    }
    @media all and(max-width: 640px) {
      font-size: 19px;
    }
  }
  .help-sub-title {
    text-align: center;
    font-weight: 200;
    font-size: 14px;
    color: #151515;
    margin-top: 6px;
    @media all and(max-width: 960px) {
      font-size: 13px;
    }
  }
  .pro-btn {
    width: 263px;
    max-width: 100%;
    margin: 38px auto 0;
    padding: 12px;
    text-align: center;
    border: 2px solid #1b3fc6;
    font-weight: 600;
    font-size: 15px;
    color: #000000;
    cursor: pointer;
    @media all and(max-width: 960px) {
      font-size: 14px;
    }
    @media all and(max-width: 640px) {
      font-size: 13px;
    }
  }
  .activate {
    display: flex;
    flex-direction: column;
    margin-top: 28px;
    .sub-title {
      font-weight: 600;
      font-size: 13px;
      color: #000;
    }
    .fb-analytics {
      width: 342px;
      max-width: 100%;
      height: 50px;
      background: url("../assets/socials/fbanalytics.png") 0 0 no-repeat;
      cursor: pointer;
      margin-top: 8px;
      -webkit-background-size: contain;
      background-size: contain;
    }
    .google-analytics {
      width: 342px;
      max-width: 100%;
      height: 50px;
      background: url("../assets/socials/googleanaly.png") 0 0 no-repeat;
      cursor: pointer;
      margin-top: 8px;
      -webkit-background-size: contain;
      background-size: contain;
    }
  }
  .click-stats {
    margin-top: 50px;
    .sub-title {
      font-weight: 600;
      font-size: 13px;
      color: #000;
    }
    .item {
      background: #fafafa;
      border-radius: 3px;
      padding: 19px;
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
      margin-top: 10px;
      display: flex;
      .right {
        display: flex;
        flex-direction: column;
        margin-left: 12px;
        .name {
          font-weight: normal;
          font-size: 14px;
          color: #151515;
          margin-bottom: 11px;
          @media all and(max-width: 960px) {
            font-size: 14px;
          }
          @media all and(max-width: 640px) {
            font-size: 11px;
          }
        }
        .stats {
          display: flex;
          .stats-item {
            display: flex;
            flex-direction: column;
            margin-right: 8px;
            .count {
              color: #506acd;
              font-weight: 500;
              font-size: 20px;
              @media all and(max-width: 960px) {
                font-size: 20px;
              }
              @media all and(max-width: 640px) {
                font-size: 21px;
              }
            }
            .text {
              font-weight: 200;
              font-size: 12px;
              letter-spacing: 0.5px;
              text-transform: uppercase;
              color: #151515;
              @media all and(max-width: 960px) {
                font-size: 12px;
              }
              @media all and(max-width: 640px) {
                font-size: 9px;
              }
            }
          }
        }
      }
    }
  }
}
</style>
