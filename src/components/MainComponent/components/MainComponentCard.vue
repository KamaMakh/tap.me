<template>
  <div class="main-component-card">
    <span
      v-if="$route.name !== 'GuestComponentLink'"
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
      <div class="bg-pic" :style="{backgroundImage: `url(${user.landing.background})`}">
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
          <div class="avatar" :style="{backgroundImage: `url(${user.landing.avatar})`}">
          </div>
          <div class="name-wrap">
            <div class="name">{{ user.landing.name }}</div>
          </div>
        </div>
        <div class="call-back">
          <div class="title">
            {{user.landing.description}}
          </div>
          <div
            v-bind:key="item.id"
            v-for="item in user.socials"
            class="item first"
            :class="getSocialCss(item)"
            @click="showSocial(item)"
          >
            <img :src="getSocialIcon(item)" :alt="item.name" />
          </div>
        </div>
      </div>
      <div
        v-if="
          $route.name === 'MainComponentShop' ||
            $route.name === 'GuestComponentLink'
        "
        class="products"
      >
        <div
          v-for="(prod, k) in user.products"
          :key="k"
          sm="12"
          md="6"
          class="product"
          @click="setProduct(prod)"
        >
          <div class="pic">
            <img :src="prod.photo" alt="" />
          </div>
          <div class="name">{{ prod.name | truncate }}</div>
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
  props: {
    isAdmin: Boolean
  },
  computed: {
    ...mapState({
      user: state => state.user.user
    })
  },
  filters: {
    truncate: function(value) {
      if (!value) return "";
      if (value.length > 10) {
        value = value.substring(0, 7) + "...";
      }
      return value;
    }
  },
  methods: {
    getSocialIcon(item) {
      if (item.type == "whatsapp") {
        return "data:image/png;base64,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";
      } else if (item.type == "viber") {
        return "data:image/png;base64,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";
      } else if (item.type == "telegram") {
        return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAjCAYAAAD48HgdAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAU3SURBVHgB7VhtTBxFGH5n925v4e7g4GhLCbW0nDUloKioUJsISkxNNRJra4jY0ARt+0NDY0zjL1vrtz8K0T+NGjCN/sGqTWw01gRqopSCipYGahEOqGX5vsLt7d7e7o6zS+7guK89em380SeZ3OzMvO88877PzOwtwP8UCFaJ0pY/HPm52cUTPuTKNONcj19lzTSIFkRzXllxy15Pb+++ez2wSiRFTCPjcObslzHUSLJaDiiRudprt9CtM/Pe0721W92QamKlLcMOm9N02C/jAwiwA5IEwgAmGj7lBd/bRgkmJFb7/VjdoE/9iFSTJrQSdgaJgqS83rlrU1OisXGJVZwaPS4DboQUw0Shj9+p2XCoCiEZkiVW+c3ISa+C6+AmgaXQd69sSavdU7zWG62fitZYfmr02IKM6zDRxs0qgoKfbP5bOA4xEBGxh9vcDQLGn8AtghnBoa7dkZoLI1ba0l/ApJu7ZaBzIMXQThYtUitB9OalZFxyvnaTO6x9+YPFzrwhKVTKSN2TY4Ftuemwc6MVOJ8MDe1cxJiAim0sgz4k1d3L20MRa2i/kn9xmh72K+Fkk0WWhYI9rkx4LD8d7nQwofYuToAD57ioNmYK5AB/fc3ymyJEoucarsbU6khlEM9PbbLBo/lWuH8tG2pXVAw0tbj2yx5/1FRqkEgwkCWjnlSbIoixZtNzPhmDUZjJhFUkKs8UZkD5urSw24lcVzAxL0KWlQGbZXGK7gmREIvt30KjXVGJEaOyeIZBlDhZeGKjDZ4utIPdHH7aaPYTC36Y5SXYvMYGrGmp/4pHiktMlHFxZf0RtqP1iKg96+ss+uBMLp1313gsIztD6WR2kFJGohMNC6IM7hkfSR3AlnV2bbeF+jhehse/HYFEkFF6Qf/zefpAPWJpmVkOMcZqDpZkw94iR0R0gtDSNjYrwJwgQY6NgQ1Z6SFdBTE0L4FqIBvZwvh68rNETEMsOyfZZXSUiyuYtvHroi7yPAcLeZnRo9k1LoABXuC3ZYR2jk6MZ7JEFMPyzQtTcKxrCqrvsELlBis8uC6d7EIEwzO8Hi2KRGej0wprbEzMCf+aEsCIftcjQQwjJp57n7M+clhUEc1GM9Bcnh3l9cKQ6DVvc4KVkGOIuAuJyK0MHXfCP6f9i04SYEFQB4J1XTju1lbRYjINajpIVESStp6pxYX5hAAkytHArB98ASWhX+Knt2PZARtStCIJZ/RVGSidE37dZoLoq/0SB1dnfTGJdXM+Qz4RoN7ldkvEKPMPmg6MlH/mA8AHMMiKCrxfhvd+uQbvdk1G3XlBfSUqKiifRyXWt29rB+nvMOKED6i6bjRiP03K8CMpLX2zsKNtGP71BsKI/caJCf2RW8Q9QOaPSkwDGXTU6Ive10Ne+GJEgo4pOdQ2TM6rnV8NQevFGd2fRnJsQUroSwqoR1dGOuKEuvuzvjZeoZ+FG8QDuWkwOCfCnD/+5mAU4XT/wftqVrZHvE3MU4EXKYUqI9UCuAFc4HwJx5CouAVIa4zRF4mKk4OuaSHQqWCc8jfZICiErmZQ5qrfG1yDYJRYkBzHS2eJCgogxWBoatppMVf9utfVF2sMFauj8wXXIMaoKoulByCFoBHqyWbNFfFIaTD0iWDzib5GcgC+Sk6HfFgtMHjIzdV84qWit+L90U2KmIbX2idzfx6dqZ8T1f1+xXh6WRN4yPhmYOUmdxJff1b1Gar6y8vbR/nAdlVFD5GrM4fowWVCKEdS1WmaRpyCoY+lqEs+UT7vfrmkA27jFuA/SzMn9AoKjF0AAAAASUVORK5CYII=";
      } else if (item.type == "fb_messanger") {
        return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB8AAAAfCAYAAAAfrhY5AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAOMSURBVHgBvZdZaFRXGMd/35gmsU40lNKKSDSmBav0qdWH1q2F0tUipVgKhYKlL22hNC2tFY0xcYuYoPgguKCCoojog6IiuBBF3FCJC6JERMUNJI7GrM4c/9dxnEmYm7ljZvzDufcs3z3/e77tnGMExRE3kQFMw/GBWhV6v4lRpHqXyh3Vr6qvSWU7H1tjkCmtz9GDrpRCfpfUL2qVExSOy/pmJQVsYbzdIWvyo85b5TLVRvCyiHFdDLOYYJsIRO6c0cga1WaQO9Qxmf9F5/zJz7tC7rFPK55M7tHIfb5lukUSHaEXQ96Kb7GeJyKOqp37MokhNLDVDUhQFrwg38tMPX8kv5jBYJr1Xug14mrf5d7T86TUPYj84xGdTOB7a4qvvFseaa+E2EOJ8kWN3tNMNhiqxg1STZB/POYhwwvkCNOl7qyIPx8KTfLZ2+2ZZd8uhkg3dER7dA+imN9CIp6ajdeOGwLbPoIDCsYRxf5ywwuhdix89paIu9LKTAwptEapEKSMCSsopkBYeho9GHZPev4DKTKlCt6qMXDuK2jthI1XfOaLMtZY5ySiDJ4BFSJr/AKGvd6z/1wLTNkLLZrl53egfhy8oe3m7xPQcLHPKTuM1S5Ghg2mXMSHvoYyn3hofgSvaYaycLw97zRUnyYTYp7D6VOFvg9Glsi+X8aJm+Vki8/KiQbC/PFJmYqSZH2BR3ySIGjzyO/6kZd5xFNlRxml8gisvJD02iLZds6HPeWXnIHZxwgG40qBEsxxVd7tPTZMK93zDeyQw9RqJQ86e45XHY07yn/Pf2Cd7DvzMNmg2SPfoiTzU2pvkVL/d6MUz9vgZqv/1x5Zl2J4pMLv133e3kRwxNhsNLiBcv1bapYm+sNaUmtXsDlCcrRihV5bN8HhdMhopzxEpbXL7stTE0BrO4GTTkwx29YRXP5ZibGBaovF02pE5GF+0B+NJv+4Jk0v9SrJ+K5yn+hosZ9Mh8r+wviUuXbQqyZPMjXqiFKZlfqyL38liOP/0Ruz3J96LiPXiOmktNjqUrvSq/hfV63nXHIBk2fDH9TZzt5D6ffxbi712/ImJRurtOJFNNiNdCLpyaP0x+1a5ElrNEc9y+1uX4L+5KkwTqn8o0wYkVbef5aOTXc1p/OI6a5mOu073dU8uSZp7ZA9IQD6XrnTBTBEraZdyx5LZPez5Ah+5BGR1mjnqGeFPSRPeAonF2Zgv4Ub+wAAAABJRU5ErkJggg==";
      } else if (item.type == "skype") {
        return "data:image/png;base64,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";
      } else if (item.type == "fb") {
        return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAYCAYAAAALQIb7AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEYSURBVHgB7ZZBCoJAFIbfRFFRggVBUIuEFi27QZ0guklHqI7SEVq1tU5QJ2gWrYJAYiihaHpTk0gKao5R0QfOm3k8+fX5+JGAhHOuY2hDAhBCTOewZayKYmueEEf7NBM6KbFUCoUWhgYkRC6bbjliMZkz+9whLjBn+BXGFaOUWn0tn1mEKY4rNjGMkhW2WEUbb+z3du9yuQ8EHtd+NWlQhKZly0E1yt4sDG8Ve7WNYxlNV27pyg/w0n3vxG/ajeIIEAD3utFtYD6/jfikI7k1HyaLOWHifZnXlYkhQ9felLH9lPfwu6P/F/tSMcbsQFdQJlYs5lYYKCTHVCzkcdrsDvVaOd+EaFB0ECo26CAN8P9psrBGmDRcAcLk3oLQAfIsAAAAAElFTkSuQmCC";
      } else if (item.type == "vk") {
        return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAdCAYAAADLnm6HAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAOQSURBVHgBxZdbbExdFMf/65zp5avLVMX0E1+/arU+vqpEFMGI1CUucacuQUTiQdwSD54Ek/DgRUgQTyQePFB1S1Xr2rRESFxKJtQtM4yWurSj6UzN5WxrH3rM6Mx0RNr5Jeey9l7n7P9es/bacwi/MG9nZbGiasVEyhgCsoSgDEBLF6BUtgnxEWRXL0i8B4SLbTdpqNKAinO2WY5QR+OFC20Xh4LUo3xrRbchNAjlkAnubaW2pT7ZYpKnBbZLg0F0jW//QbdCCkdlS0CYOapYLVsUvRl0sPsHD9UhVs23VU7TBZTsrsphBXPQwyiE7frVL7SJSAREhSUlp1SFNBqORCBE//aR5n85KZCDBGHSkKcIiAwkCoH+JoUoWYjw9gn/Z2LZ5Dz93hfQcKzyCZ68adHtjD4p2LGySCaRwZX7LpTfcRq2xfwXNi8oRN+0JN2+W9+EE9efR1KQrPDgnapbv96pyBrQWz+GDOyLFcX5Rt/n1q/40uYz+uWR83efsOfnjR+Mgux+Rj9PEpEDIBQlUkf1o7ecIz/DUpCdob8odMbRkLOfOmqQYX9wt+PCbUdU/4gC2toDqH7caNhyAksm5Rq2x+eP9j6smz0cKUmqYZfWvITb4/s9AZIzta8Q0H5GwVowEEMHpSMWSycPQVH+AMO+fM+Fqw9cMZ+JKuDtpzaUsYgOZBS2Li5EWoqpk2+vlCSsnJKP5T8SV9LU4sXxq/XoCiVWZ/kdh/6iDjLT07B7zVgU5VnC/MYOs2CxNTes7aa9Ed6vAfyRAJkLe08+gJ+XYgcy42eOyUJXLJqY20nUbwuQON63ciifxfSxOz9jz4l7YdGSyJ9lPi/JPxIgqbjrxLGqp1H75cD3X37EhoO1uGV/F9a3Zvp/GDfMElNAEHEgK92mwzc5OT1RfTSuHfvK6lBd1xDWvnHuiLClaUAUNHEd9EIgLhp4ZWw+XKtXudH5Fph7fS+1NSE1Q3Kk3A5nUyuyM79XSFnUVCViNfSYSKA5zvEN7M5m/YiGP6jh/G0Huka08G5Ir5Egkvxw8WakvUBicJfumVXPu1GwBglBPJRn5YxtDtdbUY0eRgXt1wXoWgTW8qURPQYdP71r5nlDgPxcIhGw8kKpQ/fi4U3tQLNoWG9I+dVjrq1iigqVvw2FlYRI5V0gl4jM3JWMeL4N5R8ZUngX0ry8wpo5yxsE0RsB7QYJteysbUZTqPs3N9g57xE7LTkAAAAASUVORK5CYII=";
      }
    },
    getSocialCss(item) {
      if (item.id) {
        return item.type + "-icon-bgr";
      } else {
        return "hide-icon";
      }
    },
    createPage() {
      if (!this.isAdmin) {
        this.$router.push("/");
      }
    },
    toggleLeftColumn() {
      this.$store.dispatch("user/toggleLeftColumn");
    },
    setProduct(product) {
      if (this.$route.name !== "GuestComponentLink") {
        return;
      }
      this.$store.dispatch("user/setProduct", product);
      this.$router.push({ name: "GuestComponentProduct" });
    },
    showSocial(item) {
      let url = false;
      if (item.type == "vk") {
        url = item.value;
      } else if (item.type == "fb") {
        url = item.value;
      } else if (item.type == "viber") {
        url = "viber://add?number=" + item.value;
      } else if (item.type == "telegram") {
        url = "http://t.me/" + item.value;
      } else if (item.type == "whatsapp") {
        url = "whatsapp://send?phone=" + item.value;
      } else if (item.type == "skype") {
        url = "skype:" + item.value;
      }

      if (url) {
        if (!this.isAdmin) {
          window.location.href = url;
        } else {
          alert("Переход на " + item.value);
        }
      }
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
  @media all and(max-width: 640px) {
    flex-direction: column;
  }
  .mob-title-wrap {
    display: none;
    justify-content: space-between;
    width: 100%;
    .main-component-title {
      flex: 1;
    }
    @media all and(max-width: 640px) {
      display: flex;
    }
  }
  .fb-icon-bgr {
    background-color: #4267b3 !important;
  }
  .viber-icon-bgr {
    background-color: #9069ae !important;
  }
  .telegram-icon-bgr {
    background-color: #33abe0 !important;
  }
  .fb_messanger-icon-bgr {
    background-color: #39c2ff !important;
  }
  .skype-icon-bgr {
    background-color: #39c2ff !important;
  }
  .whatsapp-icon-bgr {
    background-color: #2fd74d !important;
  }
  .vk-icon-bgr {
    background-color: #5e98d9 !important;
  }
  .hide-icon {
    display: none !important;
  }
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
    background: #ffffff;
    min-height: 500px;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.15);
    @media all and(max-width: 768px) {
      width: 327px;
    }
    @media all and(max-width: 640px) {
      width: 327px;
      border-radius: 0;
    }
    .bg-pic {
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
      height: 210px;
      background-size: cover;
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
      border-radius: 8px;
      display: flex;
      flex-direction: column;
      padding: 16px;
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
      background: #fff;
      box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.15);
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
          background-size: cover;
        }
        .name-wrap {
          display: flex;
          flex-direction: column;
          .name {
            font-weight: bold;
            font-size: 23px;
            color: #333;
            @media all and(max-width: 640px) {
              font-size: 17px;
            }
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
          @media all and(max-width: 640px) {
            font-size: 13px;
          }
        }
        .item {
          width: 95px;
          height: 50px;
          margin: 3px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          &.first {
            background: #60f97b;
          }
          &.second {
            background: #39c2ff;
          }
          &.third {
            background: #076bd5;
          }
          @media all and(max-width: 768px) {
            width: 30%;
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
        cursor: pointer;
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
