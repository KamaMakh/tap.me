<template>
  <div class="main-component-share">
    <main-title text="Поделиться" :to="{ name: 'MainComponentMyPage' }" />
    <div class="sub-title">
      Ваш Link
    </div>
    <div class="share">
      <input id="myLink" :value="landingUrl" />
      <span @click="copyText" style="cursor: pointer" title="Скопировать">
        <svg
          width="27"
          height="26"
          viewBox="0 0 27 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M0.0385742 4.84546H22.3329V25.8818H0.0385742V4.84546ZM1.58143 24.3061H20.79V6.42122H1.58143V24.3061Z"
            fill="#FF5505"
          />
          <path
            d="M26.9614 0.118179H5.28427V1.69394H25.4186V20.4848H26.9614V0.118179Z"
            fill="#FF5505"
          />
        </svg>
      </span>
    </div>
    <div class="text">
      Поделитесь своей ссылкой с клиентами, чтобы они могли начать чат в
      мессенджере, в котором им удобно.
    </div>
    <div class="qr-code">
      <qrcode-vue :value="landingUrl" :size="size" level="H"></qrcode-vue>
    </div>
    <div class="download" @click="downloadQR">
      Скачать
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import QrcodeVue from "qrcode.vue";
export default {
  name: "MainComponentShare",
  components: {
    QrcodeVue
  },
  data() {
    return {
      size: 230
    };
  },
  computed: {
    ...mapState({
      user: state => state.user.user
    }),
    landingUrl() {
      return "tapme.site/" + this.user.landing.urlcode;
    }
  },
  methods: {
    downloadQR() {
      let link = document.createElement("a");
      link.download = "qr.png";
      link.href = document.querySelector("canvas").toDataURL();
      link.click();
    },
    copyText() {
      let text = document.getElementById("myLink");
      text.select();
      text.setSelectionRange(0, 99999);
      document.execCommand("copy");
    }
  }
};
</script>

<style scoped lang="scss">
.main-component-share {
  padding-top: 15px;
  .sub-title {
    font-weight: 200;
    font-size: 14px;
    letter-spacing: -0.163333px;
    color: #151515;
    mix-blend-mode: normal;
    opacity: 0.4;
    margin-top: 23px;
    margin-bottom: 2px;
    @media all and(max-width: 960px) {
      font-size: 12px;
    }
    @media all and(max-width: 640px) {
      font-size: 11px;
    }
  }
  .share {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 9px 19px 9px 15px;
    background: #f2f2f2;
    border-radius: 6px;
    input {
      border: none;
      background: none;
      pointer-events: none;
      outline: none;
      @media all and(max-width: 960px) {
        font-size: 12px;
      }
      @media all and(max-width: 640px) {
        font-size: 13px;
      }
    }
  }
  .text {
    font-weight: 200;
    font-size: 14px;
    letter-spacing: -0.163333px;
    color: #727272;
    mix-blend-mode: normal;
    margin-top: 11px;
    @media all and(max-width: 960px) {
      font-size: 12px;
    }
    @media all and(max-width: 640px) {
      font-size: 11px;
    }
  }
  .qr-code {
    margin-top: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .download {
    font-weight: 600;
    font-size: 14px;
    text-align: center;
    letter-spacing: -0.163333px;
    color: #1b3fc6;
    margin-top: 0;
    cursor: pointer;
    @media all and(max-width: 640px) {
      font-size: 11px;
    }
  }
}
</style>
