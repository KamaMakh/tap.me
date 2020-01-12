<template>
  <div class="main-component-socials">
    <main-title
      text="Добавить ссылки на соц.сети"
      :to="{ name: 'MainComponentMyPage' }"
    />
    <div class="sub-title">
      Ссылки на мессенджеры
    </div>
    <div class="list">
      <draggable
        tag="ul"
        :list="user.socials"
        class="list-group"
        handle=".handle"
      >
        <li
          class="list-group-item"
          v-for="(element, key) in user.socials"
          :key="key"
        >
          <div v-if="element.value !== null">
            <div v-if="element.id === 0">
              <fbBtn :element="element" />
            </div>
            <div v-else-if="element.id === 1">
              <viberBtn :element="element" />
            </div>
            <div v-else-if="element.id === 2">
              <tgBtn :element="element" />
            </div>
            <div v-else-if="element.id === 3">
              <fbmBtn :element="element" />
            </div>
            <div v-else-if="element.id === 4">
              <skypeBtn :element="element" />
            </div>
            <div v-else-if="element.id === 5">
              <whatssappBtn :element="element" />
            </div>
            <div v-else-if="element.id === 6">
              <vkBtn :element="element" />
            </div>
          </div>
          <div v-else>
            <div v-if="element.id === 0">
              <fbBtn
                type="default"
                :to="{ name: 'MainComponentSocialEdit' }"
                :element="element"
              />
            </div>
            <div v-else-if="element.id === 1">
              <viberBtn
                type="default"
                :to="{ name: 'MainComponentSocialEdit' }"
                :element="element"
              />
            </div>
            <div v-else-if="element.id === 2">
              <tgBtn
                type="default"
                :to="{ name: 'MainComponentSocialEdit' }"
                :element="element"
              />
            </div>
            <div v-else-if="element.id === 3">
              <fbmBtn
                type="default"
                :to="{ name: 'MainComponentSocialEdit' }"
                :element="element"
              />
            </div>
            <div v-else-if="element.id === 4">
              <skypeBtn
                type="default"
                :to="{ name: 'MainComponentSocialEdit' }"
                :element="element"
              />
            </div>
            <div v-else-if="element.id === 5">
              <whatssappBtn
                type="default"
                :to="{ name: 'MainComponentSocialEdit' }"
                :element="element"
              />
            </div>
            <div v-else-if="element.id === 6">
              <vkBtn
                type="default"
                :to="{ name: 'MainComponentSocialEdit' }"
                :element="element"
              />
            </div>
          </div>
        </li>
      </draggable>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import draggable from "vuedraggable";
import MainComponentBtnFb from "./MainComponentBtn/MainComponentBtnFb";
import MainComponentBtnViber from "./MainComponentBtn/MainComponentBtnViber";
import MainComponentBtnTg from "./MainComponentBtn/MainComponentBtnTg";
import MainComponentBtnFbm from "./MainComponentBtn/MainComponentBtnFbm";
import MainComponentBtnSkype from "./MainComponentBtn/MainComponentBtnSkype";
import MainComponentBtnWhatsApp from "./MainComponentBtn/MainComponentBtnWatsApp";
import MainComponentBtnVk from "./MainComponentBtn/MainComponentBtnVk";
export default {
  name: "MainComponentSocials",
  components: {
    fbBtn: MainComponentBtnFb,
    viberBtn: MainComponentBtnViber,
    tgBtn: MainComponentBtnTg,
    fbmBtn: MainComponentBtnFbm,
    skypeBtn: MainComponentBtnSkype,
    whatssappBtn: MainComponentBtnWhatsApp,
    vkBtn: MainComponentBtnVk,
    draggable
  },
  data() {
    return {
      dragging: false
    };
  },
  computed: {
    ...mapState({
      user: state => state.user.user
    })
  }
};
</script>

<style scoped lang="scss">
.main-component-socials {
  padding-top: 15px;
  .title {
    font-weight: bold;
    font-size: 20px;
    color: #000000;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #e5e5e5;
    padding-left: 16px;
    padding-right: 16px;
    padding-bottom: 23px;
    margin-right: -16px;
    margin-left: -16px;
    span {
      margin-right: 18px;
      cursor: pointer;
      text-decoration: none;
    }
  }
  .sub-title {
    font-weight: 200;
    font-size: 14px;
    letter-spacing: -0.163333px;
    color: #151515;
    mix-blend-mode: normal;
    opacity: 0.4;
    margin-top: 27px;
    margin-bottom: 14px;
  }
  .list {
    .list-group-item {
      padding: 0;
    }
    .handle {
      padding-top: 8px;
      padding-bottom: 8px;
      margin-right: 14px;
    }
    li {
      border: none;
      margin-bottom: 10px;
    }
  }
}
</style>
