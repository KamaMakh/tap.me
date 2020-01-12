<template>
  <div class="main-component-product">
    <main-title text="Добавить товар" :to="{ name: 'MainComponentShop' }" />
    <div class="pics">
      <div class="pics__item">
        <div class="pics__title">
          Фото
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
    </div>
    <div class="input-wrap" role="group">
      <label for="input-live">Название</label>
      <b-form-input
        id="input-live"
        v-model="product.name"
        placeholder="Название"
        trim
      ></b-form-input>
    </div>
    <div class="input-wrap" role="group">
      <label for="input-live2">Категория</label>
      <b-form-input
        id="input-live2"
        v-model="product.category"
        placeholder="Категория"
        trim
      ></b-form-input>
    </div>
    <div class="input-wrap">
      <label for="input-live5">Описание</label>
      <b-form-textarea id="input-live5" placeholder="Описание" rows="5">
        {{ product.note }}
      </b-form-textarea>
    </div>
    <div class="input-wrap" role="group">
      <label for="input-live4">Ссылка на товар</label>
      <b-form-input
        id="input-live4"
        v-model="product.link"
        placeholder="Ссылка на товар"
        trim
      ></b-form-input>
    </div>
    <div class="input-wrap" role="group">
      <label for="input-live6">Цена</label>
      <b-form-input
        id="input-live6"
        v-model="product.price"
        placeholder="Ссылка на товар"
        trim
      ></b-form-input>
    </div>
    <div class="input-wrap" role="group">
      <label for="input-live7">Цена со скидкой</label>
      <b-form-input
        id="input-live7"
        v-model="product.discount_price"
        placeholder="Ссылка на товар"
        trim
      ></b-form-input>
    </div>
    <basic-button text="Сохранить" />
    <div v-if="product.name" @click="modalRemove = !modalRemove" class="remove">
      Удалить
    </div>

    <!--modals-->
    <b-modal
      id="modal-avatar"
      v-model="modalAvatar"
      title="Заменить аватар"
      hide-footer
    >
      <b-form-file
        v-model="user.avatar_file"
        placeholder="Выберите файл или перетащите его"
        drop-placeholder="Перетащите сюда..."
        browse-text="Выбрать"
      ></b-form-file>
      <div class="modal-buttons" style="margin-top: 25px">
        <basic-button text="Добавить" />
      </div>
    </b-modal>
    <b-modal
      id="modal-avatar"
      v-model="modalRemove"
      :title="'Удалить товар' + ' ' + product.name"
      hide-footer
    >
      <basic-button text="Удалить" />
    </b-modal>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "MainComponentProduct",
  data() {
    return {
      modalAvatar: false,
      modalRemove: false
    };
  },
  computed: {
    ...mapState({
      user: state => state.user.user,
      product: state => state.user.product
    })
  }
};
</script>

<style scoped lang="scss">
.main-component-product {
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
    }
    &__title {
      font-weight: 200;
      font-size: 14px;
      letter-spacing: -0.163333px;
      color: #151515;
      mix-blend-mode: normal;
      opacity: 0.4;
      margin-bottom: 5px;
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
    }
    textarea {
      border-radius: 0;
    }
  }
  .remove {
    margin-top: 32px;
    font-weight: 500;
    font-size: 17px;
    text-align: center;
    letter-spacing: -0.198333px;
    color: #b9bbc2;
    cursor: pointer;
  }
}
</style>
