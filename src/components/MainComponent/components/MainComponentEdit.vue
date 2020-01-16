<template>
  <div class="main-component-edit">
    <main-title
      v-if="windowWidth > 640"
      text="Настройте вашу страницу"
      :to="{ name: 'MainComponentMyPage' }"
    />
    <div v-else class="mob-title-wrap">
      <main-title
        text="Настройте вашу страницу"
        :to="{ name: 'MainComponentMyPage' }"
      />
      <div class="buttons-wrap__save" @click="save">
        <basic-button text="Сохранить" />
      </div>
    </div>
    <div class="pics">
      <div class="pics__item">
        <div class="pics__title">
          Аватар
        </div>
        <div class="pics__line">
          <div class="pics__img">
            <img :src="user.avatar" alt="Аватар" />
          </div>
          <div class="pics__btn" @click="modalAvatar = !modalAvatar">
            Изменить
          </div>
        </div>
      </div>
      <div class="pics__item">
        <div class="pics__title">
          Обложка
        </div>
        <div class="pics__line">
          <div class="pics__img">
            <img :src="user.background" alt="Обложка" />
          </div>
          <div class="pics__btn" @click="modalBackground = !modalBackground">
            Изменить
          </div>
        </div>
      </div>
    </div>
    <div
      class="input-wrap"
      role="group"
      :class="{
        'is-danger': $v.user.name.$invalid && (user.name || showFormErrors)
      }"
    >
      <label for="input-live">Имя страницы</label>
      <b-form-input
        id="input-live"
        v-model="user.name"
        placeholder="Имя"
        trim
      ></b-form-input>
    </div>
    <div
      class="input-wrap"
      role="group"
      :class="{
        'is-danger': $v.user.url.$invalid && (user.url || showFormErrors)
      }"
    >
      <label for="input-live2">Имя страницы в url</label>
      <b-form-input
        id="input-live2"
        v-model="user.url"
        placeholder="Имя страницы в url"
        trim
      ></b-form-input>
    </div>
    <div class="input-wrap" role="group">
      <label for="input-live3">Логин в Instagrm</label>
      <b-form-input
        id="input-live3"
        v-model="user.instagram"
        placeholder="Логин в Instagrm"
        trim
      ></b-form-input>
    </div>
    <div class="input-wrap" role="group">
      <label for="input-live4">Ссылка на онлайн запись</label>
      <b-form-input
        id="input-live4"
        v-model="user.link_online"
        placeholder="Ссылка на онлайн запись"
        trim
      ></b-form-input>
    </div>
    <div class="input-wrap">
      <label for="input-live5">Описание</label>
      <b-form-textarea
        id="input-live5"
        placeholder="Описание"
        rows="5"
      ></b-form-textarea>
    </div>
    <div class="buttons-wrap">
      <div class="buttons-wrap__title">Ссылка на мессенджеры и соцсети</div>
      <div class="buttons-wrap__link">
        <blue-button text="Добавить ссылку" to="main" />
      </div>
      <div v-if="windowWidth > 640" @click="save" class="buttons-wrap__save">
        <basic-button text="Сохранить" />
      </div>
    </div>

    <!--modals-->
    <b-modal
      id="modal-avatar"
      v-model="modalAvatar"
      title="Заменить аватар"
      hide-footer
    >
      <b-form-file
        v-model="user.new_avatar"
        placeholder="Выберите файл или перетащите его"
        drop-placeholder="Перетащите сюда..."
        browse-text="Выбрать"
      ></b-form-file>
      <div class="modal-buttons" style="margin-top: 25px" @click="readURL">
        <basic-button text="Добавить" />
      </div>
    </b-modal>
    <b-modal
      id="modal-avatar"
      v-model="modalBackground"
      title="Заменить фоновую картинку"
      hide-footer
    >
      <b-form-file
        v-model="user.new_back"
        placeholder="Выберите файл или перетащите его"
        drop-placeholder="Перетащите сюда..."
        browse-text="Выбрать"
      ></b-form-file>
      <div class="modal-buttons" style="margin-top: 25px" @click="readURL">
        <basic-button text="Добавить" />
      </div>
    </b-modal>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { required } from "vuelidate/lib/validators";
export default {
  name: "MainComponentEdit",
  data() {
    return {
      modalAvatar: false,
      modalBackground: false,
      showFormErrors: false
    };
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
      url: {
        required
      }
    }
  },
  methods: {
    toggleLeftColumn() {
      this.$store.dispatch("user/toggleLeftColumn");
    },
    readURL() {
      if (this.user.new_avatar) {
        let reader = new FileReader();
        reader.onload = e => {
          this.user.avatar = e.target.result;
        };
        reader.readAsDataURL(this.user.new_avatar);
        this.modalAvatar = false;
        this.user.new_avatar = undefined;
      } else if (this.user.new_back) {
        let reader = new FileReader();
        reader.onload = e => {
          this.user.background = e.target.result;
        };
        reader.readAsDataURL(this.user.new_back);
        this.modalBackground = false;
        this.user.new_back = undefined;
      }
    },
    save() {
      if (
        this.$v.user.$pending ||
        this.$v.user.$error ||
        this.$v.user.$invalid
      ) {
        this.showFormErrors = true;
        return;
      }
    }
  }
};
</script>

<style scoped lang="scss">
.main-component-edit {
  padding-top: 15px;
  .mob-title-wrap {
    display: flex;
    justify-content: space-between;
    width: 100%;
    border-bottom: 1px solid #e5e5e5;
    padding: 8px 0;
    align-items: center;
    .main-component-title {
      padding: 0;
      border: none;
    }
    .buttons-wrap__save {
      margin-top: 0;
      .basic-button {
        font-size: 13px;
      }
    }
  }
  .pics {
    margin-top: 24px;
    display: flex;
    margin-bottom: 30px;
    &__item {
      display: flex;
      flex-direction: column;
      margin-right: 34px;
      &:nth-child(2n) {
        margin-right: 0;
      }
      @media all and(max-width: 960px) {
        margin-right: 4px;
        &:nth-child(2n) {
          margin-right: 0;
        }
      }
    }
    &__title {
      font-weight: 200;
      font-size: 14px;
      letter-spacing: -0.163333px;
      color: #151515;
      mix-blend-mode: normal;
      opacity: 0.4;
      margin-bottom: 5px;
      @media all and(max-width: 960px) {
        font-size: 12px;
      }
      @media all and(max-width: 640px) {
        font-size: 11px;
      }
    }
    &__line {
      display: flex;
      align-items: center;
    }
    &__img {
      width: 67px;
      height: 67px;
      border-radius: 50%;
      margin-right: 4px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #fafafa;
      img {
        border-radius: 50%;
        max-width: 100%;
        height: 67px;
        width: 67px;
        object-fit: cover;
        @media all and(max-width: 960px) {
          width: 60px;
          height: 60px;
        }
        @media all and(max-width: 640px) {
          width: 54px;
          height: 54px;
        }
      }
      @media all and(max-width: 960px) {
        width: 60px;
        height: 60px;
      }
      @media all and(max-width: 640px) {
        width: 54px;
        height: 54px;
      }
    }
    &__btn {
      font-weight: 500;
      font-size: 14px;
      text-align: right;
      letter-spacing: -0.163333px;
      color: #1b3fc6;
      text-decoration: none;
      cursor: pointer;
      @media all and(max-width: 960px) {
        font-size: 12px;
      }
      @media all and(max-width: 640px) {
        font-size: 11px;
      }
    }
  }
  .input-wrap {
    margin-bottom: 27px;
    label {
      font-weight: 600;
      font-size: 13px;
      text-align: right;
      color: #000000;
      margin-bottom: 4px;
      @media all and(max-width: 960px) {
        font-size: 12px;
      }
      @media all and(max-width: 640px) {
        font-size: 11px;
      }
    }
    input {
      background: #ffffff;
      border: 1px solid #cccccc;
      border-radius: 0;
      padding: 16px 13px;
      height: auto;
      box-sizing: border-box;
      font-weight: normal;
      font-size: 14px;
      color: #959595;
      @media all and(max-width: 960px) {
        font-size: 12px;
        padding: 12px;
      }
      @media all and(max-width: 640px) {
        font-size: 11px;
      }
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
  .buttons-wrap {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    &__title {
      font-weight: 600;
      font-size: 13px;
      color: #000000;
      margin-bottom: 5px;
      @media all and(max-width: 960px) {
        font-size: 12px;
      }
      @media all and(max-width: 640px) {
        font-size: 11px;
      }
    }
    &__save {
      margin-top: 28px;
    }
  }
}
</style>
