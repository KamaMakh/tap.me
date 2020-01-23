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
          @click="setSocial(element)"
        >
          <div v-if="element.value !== null">
            <div v-if="element.type === 'fb'">
              <fbBtn :element="element" />
            </div>
            <div v-else-if="element.type === 'viber'">
              <viberBtn :element="element" />
            </div>
            <div v-else-if="element.type === 'telegram'">
              <tgBtn :element="element" />
            </div>
            <div v-else-if="element.type === 'fb_messanger'">
              <fbmBtn :element="element" />
            </div>
            <div v-else-if="element.type === 'skype'">
              <skypeBtn :element="element" />
            </div>
            <div v-else-if="element.type === 'whatsapp'">
              <whatssappBtn :element="element" />
            </div>
            <div v-else-if="element.type === 'vk'">
              <vkBtn :element="element" />
            </div>
          </div>
          <div v-else>
            <div v-if="element.type === 'fb'">
              <fbBtn
                type="default"
                :to="{ name: 'MainComponentSocialEdit' }"
                :element="element"
              />
            </div>
            <div v-else-if="element.type === 'viber'">
              <viberBtn
                type="default"
                :to="{ name: 'MainComponentSocialEdit' }"
                :element="element"
              />
            </div>
            <div v-else-if="element.type === 'telegram'">
              <tgBtn
                type="default"
                :to="{ name: 'MainComponentSocialEdit' }"
                :element="element"
              />
            </div>
            <div v-else-if="element.type === 'fb_messanger'">
              <fbmBtn
                type="default"
                :to="{ name: 'MainComponentSocialEdit' }"
                :element="element"
              />
            </div>
            <div v-else-if="element.type === 'skype'">
              <skypeBtn
                type="default"
                :to="{ name: 'MainComponentSocialEdit' }"
                :element="element"
              />
            </div>
            <div v-else-if="element.type === 'whatsapp'">
              <whatssappBtn
                type="default"
                :to="{ name: 'MainComponentSocialEdit' }"
                :element="element"
              />
            </div>
            <div v-else-if="element.type === 'vk'">
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
      user: state => state.user.user,
      social: state => state.user.social
    })
  },
  methods: {
    setSocial(social) {
      this.$store.dispatch("user/setSocial", social);
    }
  }
};
</script>

<style scoped lang="scss">
.main-component-socials {
  padding-top: 15px;
  .sub-title {
    font-weight: 200;
    font-size: 14px;
    letter-spacing: -0.163333px;
    color: #151515;
    mix-blend-mode: normal;
    opacity: 0.4;
    margin-top: 27px;
    margin-bottom: 14px;
    @media all and(max-width: 960px) {
      font-size: 12px;
    }
    @media all and(max-width: 640px) {
      font-size: 11px;
    }
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
