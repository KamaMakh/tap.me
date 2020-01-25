<template>
  <div class="main-component-product-card">
    <span
      v-if="$route.name !== 'GuestComponentProduct'"
      class="mob-title-wrap"
      @click="toggleLeftColumn"
    >
      <main-title text="Предпросмотр" />
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
    <div class="my-card">
      <div class="bg-pic">
        <img :src="user.landing.background" />
      </div>
      <div class="top">
        <div class="logo"></div>
      </div>
      <div class="bio">
        <div class="prod-pic">
          <img :src="product.photo" />
        </div>
        <div class="prod-name">
          {{ product.name }}
        </div>
        <div class="prod-desc">
          {{ product.note }}
        </div>
        <div class="prod-price">
          {{ product.discount_price ? product.discount_price : product.price }}
        </div>
        <b-link v-if="product.link" to="product.link" class="prod-link">
          Перейти на сайт
        </b-link>
        <div v-if="product.link" class="prod-uri">
          {{extractHostname(product.link)}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "MainComponentProductCard",
  computed: {
    ...mapState({
      user: state => state.user.user,
      product: state => state.user.product
    }),
  },
  methods: {
    extractHostname(url) {
      var hostname;
      if (url.indexOf("//") > -1) {
        hostname = url.split('/')[2];
      } else {
        hostname = url.split('/')[0];
      }

      hostname = hostname.split(':')[0];
      hostname = hostname.split('?')[0];

      return hostname;
    },
    toggleLeftColumn() {
      this.$store.dispatch("user/toggleLeftColumn");
    }
  }
};
</script>

<style scoped lang="scss">
.main-component-product-card {
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 100%;
  @media all and(max-width: 640px) {
    flex-direction: column;
  }
  .mob-title-wrap {
    display: none;
    justify-content: space-between;
    width: 100%;
    .main-component-title {
      flex: 1;
      margin-right: -40px;
    }
    @media all and(max-width: 640px) {
      display: flex;
    }
  }
  .my-card {
    width: 377px;
    max-width: 100%;
    position: relative;
    padding: 5px 16px 120px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-border-radius: 8px;
    -moz-border-radius: 8px;
    border-radius: 8px;
    overflow: hidden;
    background: #fafafa;
    box-shadow: 0px 0px 54px rgba(0, 0, 0, 0.12);
    @media all and(max-width: 768px) {
      width: 327px;
    }
    .bg-pic {
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
      height: 210px;
      img {
        max-width: 100%;
      }
    }
    .top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: relative;
      .logo {
        width: 82px;
        height: 24px;
        background: url("../assets/card_logo.png") 0 0 no-repeat;
      }
    }
    .bio {
      margin-top: 103px;
      position: relative;
      background: #ffffff;
      box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.15);
      border-radius: 8px;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
      padding-bottom: 23px;
      .prod-pic {
        width: 100%;
        margin-bottom: 24px;
        img {
          max-width: 100%;
        }
      }
      .prod-name {
        font-weight: 500;
        font-size: 20px;
        line-height: 24px;
        letter-spacing: 0.07px;
        color: #151515;
        margin-bottom: 4px;
        padding: 0 12px;
        @media all and(max-width: 960px) {
          font-size: 20px;
        }
        @media all and(max-width: 640px) {
          font-size: 15px;
        }
      }
      .prod-desc {
        font-weight: 200;
        font-size: 14px;
        line-height: 17px;
        letter-spacing: 0.049px;
        color: #151515;
        margin-bottom: 14px;
        padding: 0 12px;
        @media all and(max-width: 640px) {
          font-size: 11px;
        }
      }
      .prod-price {
        background: #fafafa;
        border-radius: 8px;
        height: 50px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 200;
        font-size: 20px;
        letter-spacing: 0.07px;
        color: #151515;
        padding: 0 12px;
        margin-bottom: 10px;
      }
      .prod-link {
        font-weight: 500;
        font-size: 14px;
        line-height: 17px;
        text-align: center;
        letter-spacing: -0.163333px;
        color: #1b3fc6;
        margin-bottom: 3px;
        text-decoration: none;
      }
      .prod-uri {
        font-weight: 200;
        font-size: 14px;
        line-height: 17px;
        text-align: center;
        letter-spacing: 0.049px;
        color: #151515;
        mix-blend-mode: normal;
        opacity: 0.2;
      }
    }
  }
}
</style>
