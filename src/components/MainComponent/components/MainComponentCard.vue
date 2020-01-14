<template>
  <div class="main-component-card">
    <div class="my-card">
      <div class="bg-pic">
        <img :src="user.background" />
      </div>
      <div class="top">
        <div class="logo"></div>
        <div class="btn">
          <b-button
            variant="outline-light"
            class="create-btn"
            @click="createPage"
            >Создать страницу</b-button
          >
        </div>
      </div>
      <div class="bio">
        <div class="info">
          <div class="avatar">
            <img :src="user.avatar" :alt="user.name" />
          </div>
          <div class="name-wrap">
            <div class="name">{{ user.name }}</div>
            <div class="socials">
              <div v-for="(soc, k) in user.socials" :key="k" class="item">
                <img v-if="soc.value" :src="soc.icon" />
              </div>
            </div>
          </div>
        </div>
        <div class="call-back">
          <div class="title">
            Напишите нам!
          </div>
          <div class="item first">
            <img
              src="data:image/png;base64,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"
              alt=""
            />
          </div>
          <div class="item second">
            <img
              src="data:image/png;base64,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"
              alt=""
            />
          </div>
          <div class="item third">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB8AAAAfCAYAAAAfrhY5AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAOMSURBVHgBvZdZaFRXGMd/35gmsU40lNKKSDSmBav0qdWH1q2F0tUipVgKhYKlL22hNC2tFY0xcYuYoPgguKCCoojog6IiuBBF3FCJC6JERMUNJI7GrM4c/9dxnEmYm7ljZvzDufcs3z3/e77tnGMExRE3kQFMw/GBWhV6v4lRpHqXyh3Vr6qvSWU7H1tjkCmtz9GDrpRCfpfUL2qVExSOy/pmJQVsYbzdIWvyo85b5TLVRvCyiHFdDLOYYJsIRO6c0cga1WaQO9Qxmf9F5/zJz7tC7rFPK55M7tHIfb5lukUSHaEXQ96Kb7GeJyKOqp37MokhNLDVDUhQFrwg38tMPX8kv5jBYJr1Xug14mrf5d7T86TUPYj84xGdTOB7a4qvvFseaa+E2EOJ8kWN3tNMNhiqxg1STZB/POYhwwvkCNOl7qyIPx8KTfLZ2+2ZZd8uhkg3dER7dA+imN9CIp6ajdeOGwLbPoIDCsYRxf5ywwuhdix89paIu9LKTAwptEapEKSMCSsopkBYeho9GHZPev4DKTKlCt6qMXDuK2jthI1XfOaLMtZY5ySiDJ4BFSJr/AKGvd6z/1wLTNkLLZrl53egfhy8oe3m7xPQcLHPKTuM1S5Ghg2mXMSHvoYyn3hofgSvaYaycLw97zRUnyYTYp7D6VOFvg9Glsi+X8aJm+Vki8/KiQbC/PFJmYqSZH2BR3ySIGjzyO/6kZd5xFNlRxml8gisvJD02iLZds6HPeWXnIHZxwgG40qBEsxxVd7tPTZMK93zDeyQw9RqJQ86e45XHY07yn/Pf2Cd7DvzMNmg2SPfoiTzU2pvkVL/d6MUz9vgZqv/1x5Zl2J4pMLv133e3kRwxNhsNLiBcv1bapYm+sNaUmtXsDlCcrRihV5bN8HhdMhopzxEpbXL7stTE0BrO4GTTkwx29YRXP5ZibGBaovF02pE5GF+0B+NJv+4Jk0v9SrJ+K5yn+hosZ9Mh8r+wviUuXbQqyZPMjXqiFKZlfqyL38liOP/0Ruz3J96LiPXiOmktNjqUrvSq/hfV63nXHIBk2fDH9TZzt5D6ffxbi712/ImJRurtOJFNNiNdCLpyaP0x+1a5ElrNEc9y+1uX4L+5KkwTqn8o0wYkVbef5aOTXc1p/OI6a5mOu073dU8uSZp7ZA9IQD6XrnTBTBEraZdyx5LZPez5Ah+5BGR1mjnqGeFPSRPeAonF2Zgv4Ub+wAAAABJRU5ErkJggg=="
              alt=""
            />
          </div>
        </div>
      </div>
      <div
        v-if="
          $route.name === 'MainComponentShop' ||
            $route.name === 'MainComponentProduct'
        "
        class="products"
      >
        <div
          v-for="(prod, k) in user.products"
          :key="k"
          sm="12"
          md="6"
          class="product"
        >
          <div class="pic">
            <img :src="prod.photo" alt="" />
          </div>
          <div class="name">{{ prod.name }}</div>
          <div class="price-wrap">
            <div class="price">
              {{ prod.discount_price ? prod.discount_price : prod.price }}
            </div>
            <div class="old-price">
              {{ prod.discount_price ? prod.price : "" }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "MainComponentCard",
  computed: {
    ...mapState({
      user: state => state.user.user
    })
  },
  methods: {
    createPage() {
      alert("Создать страницу");
    }
  }
};
</script>

<style scoped lang="scss">
.main-component-card {
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 100%;
  .my-card {
    width: 377px;
    max-width: 100%;
    position: relative;
    padding: 5px 16px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-border-radius: 8px;
    -moz-border-radius: 8px;
    border-radius: 8px;
    overflow: hidden;
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
      .create-btn {
        font-weight: bold;
        font-size: 12px;
        border: 2px solid #fff;
        box-sizing: border-box;
        -webkit-border-radius: 6px;
        -moz-border-radius: 6px;
        border-radius: 6px;
      }
    }
    .bio {
      margin-top: 103px;
      position: relative;
      background: #ffffff;
      box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.15);
      border-radius: 8px;
      display: flex;
      flex-direction: column;
      padding: 16px;
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
      .info {
        display: flex;
        .avatar {
          width: 63px;
          height: 63px;
          border-radius: 50%;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-right: 15px;
          img {
            max-width: 100%;
          }
        }
        .name-wrap {
          display: flex;
          flex-direction: column;
          .name {
            font-weight: bold;
            font-size: 23px;
            color: #333;
          }
          .socials {
            display: flex;
            .item {
              width: auto;
              height: 26px;
              img {
                max-height: 100%;
                width: auto;
                margin: 0 1px;
              }
            }
          }
        }
      }
      .call-back {
        display: flex;
        justify-content: space-between;
        margin-top: 5px;
        flex-wrap: wrap;
        .title {
          font-size: 14px;
          color: #151515;
          margin-bottom: 10px;
          flex: 1 0 100%;
        }
        .item {
          width: 95px;
          height: 50px;
          margin: 3px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          &.first {
            background: #60f97b;
          }
          &.second {
            background: #39c2ff;
          }
          &.third {
            background: #076bd5;
          }
        }
      }
    }
    .products {
      display: flex;
      flex-wrap: wrap;
      margin-top: 10px;
      .product {
        background: #ffffff;
        box-shadow: 0px 12px 15px rgba(0, 0, 0, 0.192554);
        border-radius: 8px;
        padding: 15px 22px;
        margin: 0 2px;
        width: 168px;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        flex: 1;
        .pic {
          width: 79px;
          height: 79px;
          img {
            max-width: 100%;
          }
        }
        .name {
          font-size: 20px;
          color: #151515;
        }
        .price-wrap {
          display: flex;
          .price {
            background: #ff5c03;
            border-radius: 2px;
            font-size: 12px;
            color: #fff;
            font-weight: 500;
            padding: 3px 15px;
            -webkit-box-sizing: border-box;
            -moz-box-sizing: border-box;
            box-sizing: border-box;
            margin-right: 7px;
          }
          .old-price {
            font-size: 14px;
            color: #151515;
            position: relative;
            display: flex;
            align-items: center;
            &:before {
              content: "";
              display: block;
              position: absolute;
              left: 0;
              right: 0;
              top: 50%;
              margin-top: -0.5px;
              height: 1px;
              background: #ff5c03;
            }
          }
        }
      }
    }
  }
}
</style>
