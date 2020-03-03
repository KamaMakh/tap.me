<template>
  <div class="main-component-product">
    <main-title
      v-if="windowWidth > 640"
      :text="mainTitle"
      :to="{ name: 'MainComponentShop' }"
    />
    <div v-else class="mob-title-wrap">
      <main-title
        v-if="product.name"
        :text="mainTitle"
        :to="{ name: 'MainComponentShop' }"
      />
      <main-title
        v-else
        :text="mainTitle"
        :to="{ name: 'MainComponentShop' }"
      />
    </div>
    <div class="mobile-btn" @click="toggleLeftColumn">
      <span class="eye">
        <svg
          width="26"
          height="26"
          viewBox="0 0 26 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M0.110107 13.2187C0.110107 6.17001 5.83078 0.449341 12.8795 0.449341C19.9281 0.449341 25.6488 6.17001 25.6488 13.2187C25.6488 20.2674 19.9281 25.988 12.8795 25.988C5.83078 25.988 0.110107 20.2674 0.110107 13.2187ZM0.901807 13.2187C0.901807 19.8332 6.29047 25.1963 12.8795 25.1963C19.4684 25.1963 24.8571 19.8077 24.8571 13.2187C24.8571 6.60417 19.494 1.24104 12.8795 1.24104C6.26494 1.24104 0.901807 6.62971 0.901807 13.2187ZM21.4605 13.0144C19.6983 9.94974 16.4038 8.05988 12.8795 8.05988C9.35512 8.05988 6.06063 9.94974 4.29846 13.0144C4.22184 13.1421 4.22184 13.2698 4.29846 13.3975C6.06063 16.4621 9.35512 18.352 12.8795 18.352C16.4038 18.352 19.6983 16.4621 21.4605 13.3975C21.5371 13.2953 21.5371 13.1421 21.4605 13.0144ZM15.7653 16.5132C16.6081 15.7726 17.1444 14.751 17.2466 13.6018H15.8675C15.6376 13.6018 15.5099 13.3719 15.5099 13.1676C15.5099 12.9633 15.6887 12.7845 15.893 12.7845H17.2721C17.1955 11.8651 16.838 11.0224 16.2761 10.3584L15.4844 11.1501C15.4078 11.2267 15.3056 11.2522 15.2035 11.2522C15.1013 11.2522 14.9992 11.2267 14.9226 11.1501C14.7693 10.9968 14.7693 10.767 14.9226 10.6137L15.7143 9.82205C15.4078 9.5922 15.1013 9.38789 14.7693 9.23466L14.233 10.6648C14.1819 10.8181 14.0287 10.9202 13.8755 10.9202C13.8244 10.9202 13.7989 10.9202 13.7478 10.8947C13.5435 10.8181 13.4413 10.6137 13.5179 10.4094L14.0542 9.00481C13.6967 8.90265 13.3136 8.85158 12.905 8.85158C11.7813 8.85158 10.7342 9.28573 9.96805 9.97528L10.913 10.8436C11.0662 10.9713 11.0918 11.2267 10.9385 11.3799C10.8619 11.4565 10.7597 11.5076 10.6576 11.5076C10.581 11.5076 10.4788 11.4821 10.4022 11.4054L9.45727 10.5371C9.2785 10.7414 9.15081 10.9713 9.02312 11.2011L9.94251 11.5842C10.1468 11.6864 10.2234 11.8907 10.1468 12.095C10.0702 12.2482 9.94251 12.3248 9.78928 12.3248C9.7382 12.3248 9.68712 12.3248 9.63605 12.2993L8.71665 11.9162C8.58896 12.3504 8.51234 12.7845 8.51234 13.2442C8.51234 14.0615 8.74219 14.8532 9.15081 15.5172L9.94251 14.9298C10.1213 14.8021 10.3511 14.8276 10.4788 15.0064C10.6065 15.1852 10.581 15.415 10.4022 15.5427L9.61051 16.1301C10.4022 17.024 11.577 17.6114 12.8795 17.6114C13.1604 17.6114 13.4413 17.5858 13.7222 17.5347L13.4924 16.7686C13.4158 16.5643 13.5435 16.3344 13.7478 16.2833C13.9521 16.2067 14.1819 16.3344 14.233 16.5387L14.4629 17.3049C14.6927 17.2283 14.9226 17.1006 15.1524 16.9729L14.3607 15.8747C14.233 15.6959 14.2586 15.4661 14.4373 15.3384C14.6161 15.2107 14.8459 15.2363 14.9736 15.415L15.7653 16.5132ZM5.06462 13.2187C6.06063 11.6098 7.51633 10.3584 9.20189 9.61774L9.12527 9.69435C9.12527 9.69435 9.09973 9.69435 9.09973 9.71989L9.07419 9.74543C8.66557 10.1796 8.35911 10.6904 8.10372 11.2267V11.2522V11.2778C7.84834 11.8651 7.72064 12.5291 7.72064 13.2187C7.72064 14.3424 8.07818 15.3639 8.69111 16.2067C8.69111 16.2323 8.71665 16.2578 8.71665 16.2578L8.76773 16.3089C8.85125 16.4258 8.94569 16.5318 9.03677 16.634L9.03678 16.634C9.08495 16.6881 9.13218 16.7411 9.17635 16.7941C7.51633 16.079 6.06063 14.8276 5.06462 13.2187ZM18.0383 13.2187C18.0383 14.6233 17.4764 15.9003 16.557 16.8197C18.2426 16.079 19.6983 14.8276 20.6943 13.2187C19.6983 11.6098 18.2426 10.3584 16.557 9.61774C17.4764 10.5371 18.0383 11.8141 18.0383 13.2187ZM12.8795 10.9968C11.6536 10.9968 10.6576 11.9928 10.6576 13.2187C10.6576 14.4446 11.6536 15.4406 12.8795 15.4406C14.1053 15.4406 15.1013 14.4446 15.1013 13.2187C15.1013 11.9928 14.1053 10.9968 12.8795 10.9968ZM11.4238 13.2187C11.4238 14.0359 12.0878 14.6744 12.8795 14.6744C13.6712 14.6744 14.3352 14.0104 14.3352 13.2187C14.3352 12.4015 13.6967 11.763 12.8795 11.763C12.0622 11.763 11.4238 12.427 11.4238 13.2187Z"
            fill="#FF5C03"
          />
        </svg>
      </span>
      Предпросмотр
    </div>
    <div class="errors" v-if="errors.length">
      Ошибки:
      <div class="error-item" v-bind:key="error" v-for="error in errors">
        {{ error }}
      </div>
    </div>
    <div class="pics">
      <div class="pics__item">
        <div class="pics__title">
          Фото
        </div>
        <div class="pics__line">
          <div v-if="product.photo" class="pics__img">
            <img :src="product.photo" />
          </div>
          <div class="pics__btn" @click="modalAvatar = !modalAvatar">
            {{ product.photo ? "Изменить" : "Добавить" }}
          </div>
        </div>
      </div>
      <div v-if="false && product.id !== undefined" class="pics__item">
        <div class="pics__title">
          Отображение
        </div>
        <div class="pics__line">
          <b-form-checkbox
            switch
            size="lg"
            :class="{ hide: !product.show }"
            v-model="product.show"
          ></b-form-checkbox>
        </div>
      </div>
    </div>
    <div
      class="input-wrap"
      role="group"
      :class="{
        'is-danger':
          $v.product.name.$invalid && (product.name || showFormErrors)
      }"
    >
      <label for="input-live">Название</label>
      <b-form-input
        id="input-live"
        v-model="product.name"
        placeholder="Название"
        trim
      ></b-form-input>
    </div>
    <div class="input-wrap">
      <label for="input-live5">Описание</label>
      <b-form-textarea
        id="input-live5"
        v-model="product.note"
        placeholder="Описание"
        rows="5"
      >
      </b-form-textarea>
    </div>
    <div
      class="input-wrap"
      role="group"
      :class="{
        'is-danger':
          $v.product.link.$invalid && (product.link || showFormErrors)
      }"
    >
      <label for="input-live4">Ссылка на товар</label>
      <b-form-input
        id="input-live4"
        v-model="product.link"
        placeholder="Ссылка на товар"
        trim
      ></b-form-input>
    </div>
    <div
      class="input-wrap"
      role="group"
      :class="{
        'is-danger':
          $v.product.price.$invalid && (product.price || showFormErrors)
      }"
    >
      <label for="input-live6">Цена</label>
      <b-form-input
        id="input-live6"
        v-model="product.price"
        placeholder="Цена"
        trim
      ></b-form-input>
    </div>
    <div class="input-wrap" role="group">
      <label for="input-live7">Цена со скидкой</label>
      <b-form-input
        id="input-live7"
        v-model="product.discount_price"
        placeholder="Цена со скидкой"
        trim
      ></b-form-input>
    </div>
    <div>
      <basic-button text="Сохранить" @event="save" :loading="loading" />
    </div>
    <div v-if="product.id" @click="modalRemove = !modalRemove" class="remove">
      Удалить
    </div>

    <!--modals-->
    <b-modal
      id="modal-avatar"
      v-model="modalAvatar"
      title="Добавить фото"
      hide-footer
    >
      <b-form-file
        v-model="product.new_file"
        placeholder="Выберите файл или перетащите его"
        drop-placeholder="Перетащите сюда..."
        browse-text="Выбрать"
      ></b-form-file>
      <div class="modal-buttons" style="margin-top: 25px" @click="loadPhoto">
        <basic-button text="Добавить" @click="loadPhoto" />
      </div>
    </b-modal>
    <b-modal
      id="modal-avatar"
      v-model="modalRemove"
      :title="'Удалить товар' + ' ' + product.name"
      hide-footer
    >
      <div>
        <basic-button text="Удалить" @event="remove" :loading="loading" />
      </div>
    </b-modal>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { required, url } from "vuelidate/lib/validators";
import Vue from "vue";

export default {
  name: "MainComponentProduct",
  data() {
    return {
      modalAvatar: false,
      modalRemove: false,
      showFormErrors: false,
      errors: [],
      loading: false
    };
  },
  validations: {
    product: {
      name: {
        required
      },
      link: {
        url
      },
      price: {
      }
    }
  },
  computed: {
    ...mapState({
      user: state => state.user.user,
      product: state => state.user.product,
      uploadImage: state => state.user.uploadImage
    }),
    mainTitle() {
      if (!this.isNewProduct()) {
        return "Редактировать товар";
      } else {
        return "Добавить товар";
      }
    }
  },
  methods: {
    isNewProduct() {
      if (this.product && this.product.id) {
        return false;
      } else {
        return true;
      }
    },
    loadPhoto() {
      if (this.product.new_file) {
        let tmpNewFile = this.product.new_file;
        let reader = new FileReader();
        reader.onload = e => {
          this.product.photo = e.target.result;
          this.$store.dispatch("user/addImageProduct", tmpNewFile);
        };
        reader.readAsDataURL(this.product.new_file);
        this.modalAvatar = false;
        this.product.new_file = undefined;
      }
    },
    save() {
      if (
        this.$v.product.$pending ||
        this.$v.product.$error ||
        this.$v.product.$invalid
      ) {
        this.showFormErrors = true;
        return;
      } else {
        this.loading = true;
        var promise = false;
        if (this.isNewProduct()) {
          this.product.show = true;
          promise = this.$store.dispatch("user/createProduct", this.product);
        } else {
          promise = this.$store.dispatch("user/updateProduct", this.product);
        }

        if (promise) {
          promise
            .then(() => {
              this.$router.push("/main/shop");
            })
            .catch(data => {
              this.errors = Vue.backend.fetchErrorsFrom(data);
            })
            .finally(() => {
              this.loading = false;
            });
        }
      }
    },
    remove() {
      this.$store.dispatch("user/deleteProduct", this.product.id);
      this.modalRemove = false;
      this.$router.push("/main/shop");
      this.loading = false;
    },
    toggleLeftColumn() {
      this.$store.dispatch("user/toggleLeftColumn");
    },
    productShow() {
      this.product.show = !this.product.show;
    }
  }
};
</script>

<style scoped lang="scss">
.main-component-product {
  padding-top: 15px;
  .mob-title-wrap {
    display: none;
    justify-content: space-between;
    width: 100%;
    border-bottom: 1px solid #e5e5e5;
    padding: 8px 0;
    align-items: center;
    @media all and(max-width: 640px) {
      display: flex;
    }
    .main-component-title {
      padding: 0;
      border: none;
      margin: 0;
    }
    .buttons-wrap__save {
      margin-top: 0;
      .basic-button {
        font-size: 13px;
      }
    }
  }
  .mobile-btn {
    display: none;
    width: 100%;
    height: 44px;
    align-items: center;
    justify-content: center;
    font-size: 13px;
    line-height: 18px;
    text-align: center;
    color: #ff5c03;
    margin-top: 18px;
    margin-bottom: 16px;
    cursor: pointer;
    background: #ffffff;
    border: 1px solid #ec6a34;
    box-sizing: border-box;
    border-radius: 3px;
    span {
      margin-right: 10px;
    }
    @media all and(max-width: 640px) {
      display: flex;
    }
  }
  .pics {
    margin-top: 24px;
    display: flex;
    margin-bottom: 30px;
    &__status {
      border-radius: 50%;
      width: 39px;
      height: 39px;
      background: #ffffff;
      border: 1px solid #5acd50;
      box-shadow: 0px 1px 4px rgba(90, 205, 80, 0.367925);
      cursor: pointer;
      &.hid {
        border-color: darkred;
        box-shadow: 0px 1px 4px rgb(182, 125, 112);
      }
    }
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
      height: 60px;
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
      @media all and(max-width: 960px) {
        font-size: 13px;
        padding: 12px;
      }
      @media all and(max-width: 640px) {
        font-size: 12px;
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
  .remove {
    margin-top: 32px;
    font-weight: 500;
    font-size: 17px;
    text-align: center;
    letter-spacing: -0.198333px;
    color: #b9bbc2;
    cursor: pointer;
    @media all and(max-width: 640px) {
      font-weight: normal;
      font-size: 15px;
      line-height: 23px;
      text-align: center;
      color: #fff;
      background: #c61b1b;
      height: 55px;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px solid #ccc;
    }
  }

  .error-item {
    color: red;
    font-size: 12px;
  }

  .errors {
    padding: 10px;
    margin-top: 10px;
    border: 1px solid red;
  }
}
</style>
