<template>
  <div class="main-component-call-back">
    <main-title text="Обратная связь" :to="{ name: 'MainComponentMyPage' }" />
    <div class="help-block">
      <div class="help-title">Нужна помощь?</div>
      <div class="help-sub-title">Выберите лучший способ связи с нами</div>
      <div class="soc-list">
        <span>
          <img src="../assets/socials/viber_big.png" />
        </span>
        <span>
          <img src="../assets/socials/tg_big.png" />
        </span>
        <span>
          <img src="../assets/socials/whatsapp_big.png" />
        </span>
        <span>
          <img src="../assets/socials/skype_big.png" />
        </span>
        <span>
          <img src="../assets/socials/vk_big.png" />
        </span>
        <span>
          <img src="../assets/socials/fbm_big.png" />
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainComponentCallBack"
};
</script>

<style scoped lang="scss">
.main-component-call-back {
  padding-top: 15px;
  .help-block {
    border-radius: 8px;
    background: #fafafa;
    margin-top: 13px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 35px 20px;
  }
  .help-title {
    font-weight: 500;
    font-size: 20px;
    color: #151515;
    text-align: center;
    @media all and(max-width: 960px) {
      font-size: 18px;
    }
    @media all and(max-width: 640px) {
      font-size: 16px;
    }
  }
  .help-sub-title {
    font-weight: 200;
    font-size: 14px;
    color: #151515;
    text-align: center;
    @media all and(max-width: 960px) {
      font-size: 13px;
    }
    @media all and(max-width: 640px) {
      font-size: 12px;
    }
  }
  .soc-list {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 15px;
    max-width: 165px;
    flex-wrap: wrap;
    span {
      cursor: pointer;
      text-align: center;
    }
  }
}
</style>
