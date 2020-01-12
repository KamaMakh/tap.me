<template>
  <div class="main-component-shop">
    <main-title text="Магазин" :to="{ name: 'MainComponentMyPage' }" />
    <div class="sub-title">
      Поделитесь со своими клиентами акциями и скидками на Ваши товары.
    </div>
    <span @click="setProduct({ photo: '' })">
      <blue-button
        text="Добавить товар"
        :to="{ name: 'MainComponentProduct' }"
      />
    </span>
    <div v-if="user.products" class="goods">
      <div class="goods-title">
        Ваши товары
      </div>
      <draggable
        tag="ul"
        :list="user.products"
        class="list-group"
        handle=".handle"
      >
        <li
          class="list-group-item"
          v-for="(element, key) in user.products"
          :key="key"
        >
          <div>
            <div class="left">
              <i class="fa fa-align-justify handle" style="margin-right: 13px">
                <svg
                  width="22"
                  height="16"
                  viewBox="0 0 22 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0.5 1H21" stroke="#D0D0D0" />
                  <path d="M0.5 8H21" stroke="#D0D0D0" />
                  <path d="M0.5 15H21" stroke="#D0D0D0" />
                </svg>
              </i>
              <span class="def-icon">
                <img :src="element.photo" alt="" />
              </span>
              <!--{{ element.name }}-->
            </div>
            <b-link
              @click="setProduct(element)"
              :to="{ name: 'MainComponentProduct' }"
              class="edit"
            >
              Изменить
            </b-link>
          </div>
        </li>
      </draggable>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import draggable from "vuedraggable";
export default {
  name: "MainComponentShop",
  components: {
    draggable
  },
  computed: {
    ...mapState({
      user: state => state.user.user
    })
  },
  methods: {
    setProduct(product) {
      this.$store.dispatch("user/setProduct", product);
    }
  }
};
</script>

<style scoped lang="scss">
.main-component-shop {
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
    color: #727272;
    margin-top: 13px;
    margin-bottom: 13px;
  }
  .goods {
    margin-top: 27px;
    .goods-title {
      font-weight: 600;
      font-size: 20px;
      color: #000;
      margin-bottom: 10px;
    }
    .list-group-item {
      padding: 0;
    }
    .left {
      display: flex;
    }
    .handle {
      padding-top: 8px;
      padding-bottom: 8px;
      margin-right: 14px;
    }
    .def-icon {
      width: 35px;
      height: 35px;
      border-radius: 2px;
      display: block;
      img {
        max-width: 100%;
      }
    }
    li {
      border: none;
      margin-bottom: 10px;
      > div {
        font-weight: bold;
        font-size: 14px;
        letter-spacing: -0.12px;
        padding: 0 10px;
        height: 50px;
        -webkit-border-radius: 2px;
        -moz-border-radius: 2px;
        border-radius: 2px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        text-decoration: none;
        color: #151515;
        background: #fafafa;
      }
      .edit {
        color: #1b3fc6;
        text-decoration: none;
        font-size: 14px;
        font-weight: 200;
      }
    }
  }
}
</style>
