<template>
  <div class="landing-component fullpage-container">
    <div class="fullpage-wp" v-fullpage="opts" ref="example">
      <div
        class="sale-more page-1 page"
        style="flex-wrap: wrap; margin-top: 0;"
      >
        <general-header
          class="part-1 general-header"
          v-animate="{ value: 'bounceInRight', delay: 400 }"
          style="flex: 1 1 100%;"
        />
        <div
          class="sale-more__left sale-block part-1"
          v-animate="{ value: 'bounceInLeft', delay: 400 }"
        >
          <div class="sale-block__title">
            Продавайте больше
          </div>
          <div class="sale-block__sub-title">
            Страница, которая помогает вашим клиентам найти наилучший способ
            связи с вами
          </div>
          <div class="sale-block__btn">
            <HeaderButton text="Создать бесплатно" :reverse="true" />
          </div>
        </div>
        <div
          class="sale-more__right pic-block part-1"
          v-animate="{ value: 'bounceInRight', delay: 400 }"
        ></div>
      </div>
      <div class="how-it-works page-2 page">
        <div
          v-animate="{ value: 'bounceInLeft', delay: 400 }"
          class="how-it-works__title part-2"
        >
          Как это работает?
        </div>
        <div
          v-animate="{ value: 'bounceInRight', delay: 400 }"
          class="how-it-works__first first part-2"
        >
          <div class="first__left">
            <div class="first__title">1. Создайте страницу</div>
            <div class="first__text">
              Легкая настройка. Расскажите своим покупателям о себе и о своих
              товарах или услугах.
            </div>
          </div>
          <div class="first__right form"></div>
        </div>
      </div>
      <div class="how-it-works page-3 page">
        <div
          v-animate="{ value: 'bounceInRight', delay: 400 }"
          class="how-it-works__second second part-3"
        >
          <div class="second__left"></div>
          <div class="second__right">
            <div class="second__title">2. Поделитесь ссылкой</div>
            <div class="second__text">
              Где угодно. Поставьте её в Instagram профиль, как подпись в
              email...
            </div>
          </div>
        </div>
      </div>
      <div class="how-it-works page-4 page">
        <div
          v-animate="{ value: 'bounceInLeft', delay: 400 }"
          class="how-it-works__third third part-4"
        >
          <div class="third__left">
            <div class="third__title">3. Начните продавать</div>
            <div class="third__text">
              Держите руку на пульсе. Покупатели кликают на вашу ссылку и
              выбирают удобный для них способ связи.
            </div>
          </div>
          <div class="third__right form"></div>
        </div>
      </div>
      <div class="opportunities page-5 page" style="margin-bottom: 0">
        <div
          v-animate="{ value: 'bounceInRight', delay: 400 }"
          class="opportunities__title part-5"
        >
          Возможности, которые всем понравятся
        </div>
        <div
          v-if="windowWidth > 1200"
          v-animate="{ value: 'bounceInLeft', delay: 400 }"
          class="opportunities__first-list first-list part-5"
        >
          <div class="first-list__item first">
            <div class="first__top">
              mssg.me/robinhood
            </div>
            <div class="first__bottom">
              <div class="first__title">
                Короткая ссылка
              </div>
              <div class="first__text">
                Получите красивую и короткую ссылку, которая просто призывает к
                действию: «Напиши мне»
              </div>
            </div>
          </div>
          <div class="first-list__item second">
            <div class="second__top"></div>
            <div class="second__bottom">
              <div class="second__title">
                QR код
              </div>
              <div class="second__text">
                Используйте его офлайн. Привлекайте клиентов на свою страницу с
                помощью QR кода.
              </div>
            </div>
          </div>
          <div class="first-list__item third">
            <div class="third__top"></div>
            <div class="third__bottom">
              <div class="third__title">
                E-mail подпись
              </div>
              <div class="third__text">
                Оставьте почту для чего-то скучного. Перенесите важные разговоры
                в мессенджеры.
              </div>
            </div>
          </div>
        </div>
        <carousel
          v-else
          v-animate="{ value: 'bounceInLeft', delay: 400 }"
          :perPageCustom="[
            [320, 1],
            [480, 1],
            [768, 1],
            [960, 2]
          ]"
          class="opportunities__first-list first-list second-list part-5"
        >
          <slide>
            <div class="first-list__item first">
              <div class="first__top">
                mssg.me/robinhood
              </div>
              <div class="first__bottom">
                <div class="first__title">
                  Короткая ссылка
                </div>
                <div class="first__text">
                  Получите красивую и короткую ссылку, которая просто призывает
                  к действию: «Напиши мне»
                </div>
              </div>
            </div>
          </slide>
          <slide>
            <div class="first-list__item second">
              <div class="second__top"></div>
              <div class="second__bottom">
                <div class="second__title">
                  QR код
                </div>
                <div class="second__text">
                  Используйте его офлайн. Привлекайте клиентов на свою страницу
                  с помощью QR кода.
                </div>
              </div>
            </div>
          </slide>
          <slide>
            <div class="first-list__item third">
              <div class="third__top"></div>
              <div class="third__bottom">
                <div class="third__title">
                  E-mail подпись
                </div>
                <div class="third__text">
                  Оставьте почту для чего-то скучного. Перенесите важные
                  разговоры в мессенджеры.
                </div>
              </div>
            </div>
          </slide>
          <slide>
            <div class="second-list__item first2">
              <div class="first2__top">
                <div class="search"></div>
                <div class="fb"></div>
              </div>
              <div class="first2__bottom">
                <div class="first2__title">
                  Аналитика
                </div>
                <div class="first2__text">
                  Анализируйте уровень влияния вашей страницы. Оптимизируйте
                  свои рекламные кампании с помощью Google Analytics и Facebook
                  Pixel.
                </div>
              </div>
            </div>
          </slide>
          <slide>
            <div class="second-list__item second2">
              <div class="second2__top"></div>
              <div class="second2__bottom">
                <div class="second2__title">
                  Виджет для сайта
                </div>
                <div class="second2__text">
                  Замените старую форму контакта на своем сайте на наш виджет,
                  тем самым давая пользователям новый опыт связи с вами.
                </div>
              </div>
            </div>
          </slide>
        </carousel>
      </div>
      <div v-if="windowWidth > 1200" class="opportunities page-6 page">
        <div
          v-if="windowWidth > 1200"
          v-animate="{ value: 'bounceInRight', delay: 400 }"
          class="opportunities__second-list second-list part-6"
        >
          <div class="second-list__item first2">
            <div class="first2__top">
              <div class="search"></div>
              <div class="fb"></div>
            </div>
            <div class="first2__bottom">
              <div class="first2__title">
                Аналитика
              </div>
              <div class="first2__text">
                Анализируйте уровень влияния вашей страницы. Оптимизируйте свои
                рекламные кампании с помощью Google Analytics и Facebook Pixel.
              </div>
            </div>
          </div>
          <div class="second-list__item second2">
            <div class="second2__top"></div>
            <div class="second2__bottom">
              <div class="second2__title">
                Виджет для сайта
              </div>
              <div class="second2__text">
                Замените старую форму контакта на своем сайте на наш виджет, тем
                самым давая пользователям новый опыт связи с вами.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="page-7 page">
        <div
          v-animate="{ value: 'bounceInLeft', delay: 400 }"
          class="bot-form part-7"
        >
          <div class="wr">
            <div class="bot-form__title">
              Создай свою страницу и начни больше продавать
            </div>
            <div class="bot-form__btn">
              <basic-button class="basic" text="Создать бесплатно" />
            </div>
          </div>
        </div>
      </div>
      <div class="page page-8">
        <div
          v-animate="{ value: 'bounceInRight', delay: 400 }"
          class="footer part-8"
        >
          <div class="bottom-menu">
            <div class="menu-item">
              <b-link to="/">Политика конфиденциальности</b-link>
            </div>
            <div class="menu-item">
              <b-link to="/">Условия использования</b-link>
            </div>
            <div class="menu-item">
              <b-link to="/">Тарифы</b-link>
            </div>
            <div class="menu-item">
              <b-link to="/">Задайте вопрос</b-link>
            </div>
            <div class="menu-item">
              <b-link to="/">База знаний</b-link>
            </div>
            <div class="menu-item">
              <b-link to="/">Блог</b-link>
            </div>
            <div class="menu-item">
              <b-link to="/">English</b-link>
            </div>
            <div class="menu-item">
              <b-link to="/">Русский</b-link>
            </div>
            <div class="menu-item">
              <b-link to="/">telegram icon</b-link>
            </div>
            <div v-if="windowWidth <= 755" class="bottom-tg"></div>
          </div>
          <div v-if="windowWidth > 755" class="bottom-tg"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import VueCarousel from "vue-carousel";
import HeaderButton from "@/components/Buttons/HeaderButton";
Vue.use(VueCarousel);
export default {
  name: "LandingComponent",
  components: {
    HeaderButton
  },
  data() {
    return {
      opts: {
        start: 0,
        dir: "v",
        duration: 500,
        overflow: scroll,
        beforeChange: (currentSlideEl, currenIndex, nextIndex) => {
          this.$emit("on-scroll-block", {
            el: currentSlideEl,
            curr: currenIndex,
            next: nextIndex
          });
        },
        movingFlag: true
      }
    };
  }
};
</script>

<style scoped lang="scss">
.landing-component {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  .general-header {
    align-items: center;
  }
  .page {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    max-height: 100%;
    margin-bottom: 0 !important;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media all and(max-width: 768px) {
      &.page-7 {
        overflow-y: scroll;
      }
    }
    .part-4 {
      margin-bottom: 0 !important;
    }
    &.page-1 {
      margin-bottom: 0 !important;
      padding: 0;
      flex-direction: row;
    }
    &.page-6 {
      justify-content: center;
      margin-bottom: 0 !important;
    }
  }
  .sale-more {
    display: flex;
    justify-content: space-between;
    padding-bottom: 30px;
    margin-bottom: 55px;
    margin-top: 145px;
    @media all and(max-width: 1170px) {
      flex-direction: column;
    }
    @media all and(max-width: 724px) {
      justify-content: center;
      margin-top: 99px;
    }
    .sale-block {
      display: flex;
      flex-direction: column;
      flex: 0 1 48%;
      @media all and(max-width: 1170px) {
        max-width: 446px;
      }
      @media all and(max-width: 700px) {
        max-width: 100%;
        margin-bottom: 50px;
        justify-content: center;
        align-items: center;
        text-align: center;
      }
      &__title {
        font-weight: bold;
        font-size: 72px;
        color: #fff;
        margin-bottom: 20px;
        line-height: 80px;
        @media all and(max-width: 1170px) {
          font-size: 51px;
        }
        @media all and(max-width: 700px) {
          font-size: 35px;
        }
      }
      &__sub-title {
        font-size: 20px;
        color: #fff;
        margin-bottom: 50px;
        @media all and(max-width: 1170px) {
          font-size: 17px;
        }
        @media all and(max-width: 700px) {
          font-size: 13px;
        }
      }
      &__btn {
        width: 301px;
        text-align: center;
        .header-button {
          padding: 20px 35px;
          border-radius: 40px;
          color: #7f360d !important;
          @media all and(max-width: 1170px) {
            font-size: 15px;
          }
          @media all and(max-width: 700px) {
            font-size: 13px;
          }
        }
      }
    }
    .pic-block {
      background: url("./assets/sale_bg.png") 0 0 no-repeat;
      width: 440px;
      height: 640px;
      @media all and(max-width: 1170px) {
        align-self: flex-end;
        margin-top: -105px;
        width: 335px;
        height: 427px;
        -webkit-background-size: contain;
        background-size: contain;
      }
      @media all and(max-width: 724px) {
        /*margin-top: 0;*/
        /*align-self: center;*/
        display: none;
      }
    }
  }
  .how-it-works {
    display: flex;
    flex-direction: column;
    &__title {
      font-weight: bold;
      font-size: 72px;
      color: #101010;
      margin-bottom: 56px;
      width: 50%;
      line-height: 80px;
      @media all and(max-width: 1170px) {
        font-size: 51px;
        line-height: 62px;
      }
      @media all and(max-width: 700px) {
        font-size: 35px;
        width: 100%;
        line-height: 43px;
        margin-bottom: 25px;
      }
    }
    .first {
      display: flex;
      justify-content: space-around;
      margin-bottom: 28px;
      @media all and(max-width: 700px) {
        flex-direction: column;
        align-items: center;
      }
      &__left {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 48%;
        max-width: 419px;
        @media all and(max-width: 700px) {
          width: 100%;
          max-width: 100%;
        }
      }
      &__title {
        color: #101010;
        font-weight: 200;
        font-size: 35px;
        line-height: 80px;
        @media all and(max-width: 1170px) {
          font-size: 25px;
        }
        @media all and(max-width: 700px) {
          font-size: 20px;
        }
      }
      &__text {
        font-size: 19px;
        color: #343434;
        @media all and(max-width: 1170px) {
          font-size: 15px;
        }
        @media all and(max-width: 700px) {
          font-size: 12px;
        }
      }
      .form {
        box-shadow: 0px 0px 109px rgba(0, 0, 0, 0.18);
        width: 372px;
        height: 398px;
        background: url("./assets/first_step.png") 0 0 no-repeat;
        @media all and(max-width: 1170px) {
          width: 279px;
          height: 298px;
          -webkit-background-size: contain;
          background-size: contain;
        }
        @media all and(max-width: 700px) {
          width: 199px;
          height: 213px;
          margin-top: 20px;
        }
      }
    }
    .second {
      display: flex;
      align-items: center;
      justify-content: space-between;
      @media all and(max-width: 1170px) {
        margin-top: 30px;
      }
      @media all and(max-width: 700px) {
        flex-direction: column-reverse;
        justify-content: center;
      }
      &__right {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 48%;
        @media all and(max-width: 700px) {
          width: 100%;
        }
      }
      &__title {
        color: #101010;
        font-weight: 200;
        font-size: 35px;
        line-height: 80px;
        @media all and(max-width: 1170px) {
          font-size: 25px;
        }
        @media all and(max-width: 700px) {
          font-size: 20px;
        }
      }
      &__text {
        font-size: 19px;
        color: #343434;
        @media all and(max-width: 1170px) {
          font-size: 15px;
        }
        @media all and(max-width: 700px) {
          font-size: 12px;
        }
      }
      &__left {
        width: 379px;
        height: 607px;
        background: url("./assets/second_step.png") 0 0 no-repeat;
        @media all and(max-width: 1170px) {
          width: 305px;
          height: 382px;
          -webkit-background-size: contain;
          background-size: contain;
        }
        @media all and(max-width: 700px) {
          width: 215px;
          height: 269px;
          margin-top: 20px;
        }
      }
    }
    .third {
      display: flex;
      justify-content: flex-start;
      /*margin-top: -47px;*/
      margin-bottom: 60px;
      @media all and(max-width: 1170px) {
        margin-top: 20px;
        align-items: center;
        justify-content: space-between;
      }
      @media all and(max-width: 700px) {
        flex-direction: column;
        justify-content: center;
      }
      &__left {
        display: flex;
        flex-direction: column;
        justify-content: center;
        max-width: 395px;
        margin-right: 208px;
        @media all and(max-width: 1170px) {
          margin-right: 0;
        }
        @media all and(max-width: 700px) {
          width: auto;
          max-width: 100%;
        }
      }
      &__title {
        margin-top: -100px;
        color: #101010;
        font-weight: 200;
        font-size: 35px;
        line-height: 80px;
        @media all and(max-width: 1170px) {
          margin-top: 0;
          font-size: 25px;
        }
        @media all and(max-width: 700px) {
          font-size: 20px;
        }
      }
      &__text {
        font-size: 19px;
        color: #343434;
        @media all and(max-width: 1170px) {
          font-size: 15px;
        }
        @media all and(max-width: 700px) {
          font-size: 12px;
        }
      }
      .form {
        width: 425px;
        height: 650px;
        background: url("./assets/third_step.png") 0 0 no-repeat;
        position: relative;
        &:after {
          z-index: -1;
          content: "";
          display: block;
          position: absolute;
          width: 278px;
          height: 374px;
          top: -6px;
          right: -142px;
          left: auto;
          background: url("./assets/small_bg.png") 0 0 no-repeat;
        }
        @media all and(max-width: 1170px) {
          &:after {
            left: -45px;
          }
          width: 297px;
          height: 472px;
          -webkit-background-size: contain;
          background-size: contain;
        }
        @media all and(max-width: 700px) {
          width: 202px;
          height: 323px;
          margin-top: 20px;
          &:after {
            left: -80px;
          }
        }
      }
    }
  }
  .opportunities {
    display: flex;
    flex-direction: column;
    margin-bottom: 249px;
    @media all and(max-width: 700px) {
      margin-bottom: 50px;
    }
    &__title {
      font-weight: bold;
      font-size: 50px;
      line-height: 80px;
      color: #101010;
      margin-bottom: 20px;
      @media all and(max-width: 1170px) {
        font-size: 51px;
      }
      @media all and(max-width: 700px) {
        font-size: 19px;
        line-height: 1;
        margin-bottom: 10px;
      }
    }
    .first-list {
      display: flex;
      justify-content: space-between;
      margin-bottom: 30px;
      @media all and(max-width: 1170px) {
        flex-wrap: wrap;
        justify-content: space-around;
      }
      &__item {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        width: 372px;
        max-width: 100%;
        border-radius: 10px;
        padding: 94px 30px 65px;
        height: 450px;
        box-shadow: 0px 0px 109px rgba(0, 0, 0, 0.09);
        background: #fff;
        @media all and(max-width: 1170px) {
          margin-bottom: 20px;
        }
        @media all and(max-width: 1200px) {
          margin: 0 auto;
        }
        @media all and(max-width: 768px) {
          padding: 30px;
        }
        @media all and(max-width: 400px) {
          width: 300px;
          height: auto;
        }
      }
      .first {
        background: url("./assets/op_bg.png") 0 0 no-repeat;
        -webkit-background-size: cover;
        background-size: cover;
        box-shadow: 0 0 109px rgba(255, 166, 118, 0.36);
        &__top {
          width: 311px;
          max-width: 100%;
          height: 57px;
          background: #fff;
          border-radius: 26px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          text-align: center;
          color: #101010;
        }
        &__title {
          font-weight: 600;
          font-size: 25px;
          line-height: 80px;
          color: #fff;
        }
        &__text {
          font-size: 16px;
          line-height: 26px;
          color: #fff;
        }
      }
      .second {
        &__top {
          width: 60px;
          height: 60px;
          background: url("./assets/qr.png") 0 0 no-repeat;
        }
        &__title {
          font-weight: 600;
          font-size: 25px;
          line-height: 80px;
          color: #ff5c03;
        }
        &__text {
          font-size: 16px;
          line-height: 26px;
          color: #343434;
        }
      }
      .third {
        &__top {
          width: 56px;
          height: 42px;
          background: url("./assets/sms.png") 0 0 no-repeat;
        }
        &__title {
          font-weight: 600;
          font-size: 25px;
          line-height: 80px;
          color: #ff5c03;
        }
        &__text {
          font-size: 16px;
          line-height: 26px;
          color: #343434;
        }
      }
    }
    .second-list {
      display: flex;
      justify-content: space-between;
      @media all and(max-width: 1170px) {
        flex-wrap: wrap;
        justify-content: space-around;
      }
      &__item {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        width: 570px;
        max-width: 100%;
        border-radius: 10px;
        padding: 114px 55px 59px;
        height: 450px;
        box-shadow: 0px 0px 109px rgba(0, 0, 0, 0.09);
        @media all and(max-width: 1170px) {
          margin-bottom: 20px;
          width: 372px;
        }
        @media all and(max-width: 1200px) {
          margin: 0 auto;
          padding: 114px 30px 59px;
        }
        @media all and(max-width: 768px) {
          padding: 30px;
        }
        @media all and(max-width: 400px) {
          width: 300px;
          height: auto;
        }
      }
      .first2 {
        background: #fff;
        &__top {
          display: flex;
          align-items: center;
          .search {
            width: 54px;
            height: 54px;
            background: url("./assets/search.png") 0 0 no-repeat;
            margin-right: 19px;
          }
          .fb {
            width: 30px;
            height: 51px;
            margin-left: 19px;
            background: url("./assets/fb.png") 0 0 no-repeat;
          }
        }
        &__title {
          font-weight: 600;
          font-size: 25px;
          line-height: 80px;
          color: #ff5c03;
        }
        &__text {
          font-size: 16px;
          line-height: 26px;
          color: #343434;
        }
      }
      .second2 {
        background: url("./assets/widget.png") 0 0 no-repeat;
        &__title {
          font-weight: 600;
          font-size: 25px;
          line-height: 80px;
          color: #ff5c03;
        }
        &__text {
          font-size: 16px;
          line-height: 26px;
          color: #fff;
        }
      }
    }
  }
  .bot-form {
    display: flex;
    background: url("./assets/form_bg.png") -108px -108px no-repeat;
    min-height: 376px;
    margin-bottom: 50px;
    @media all and(max-width: 700px) {
      background: none;
      justify-content: center;
    }
    .wr {
      width: 100%;
      padding: 0px 68px 80px 54px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      @media all and(max-width: 1170px) {
        padding: 0px 20px 80px 20px;
      }
      @media all and(max-width: 700px) {
        flex-direction: column;
        justify-content: center;
        width: 320px;
        max-width: 100%;
        background: url("./assets/bot_form_mob.png") 0px 0px no-repeat;
      }
    }
    &__title {
      font-weight: 600;
      max-width: 600px;
      font-size: 44px;
      line-height: 54px;
      color: #101010;
      @media all and(max-width: 1170px) {
        font-size: 24px;
        line-height: 31px;
        max-width: 334px;
      }
      @media all and(max-width: 700px) {
        font-size: 17px;
        line-height: 29px;
        max-width: 100%;
        margin-bottom: 20px;
        padding: 0 15px;
      }
    }
    &__btn {
      .basic {
        border-radius: 36px;
        padding: 24px 63px;
        @media all and(max-width: 1170px) {
          font-size: 18px;
          width: 253px;
          height: 67px;
          padding: 0;
        }
        @media all and(max-width: 700px) {
          font-size: 15px;
          width: 208px;
          height: 55px;
        }
      }
    }
  }
  .footer {
    display: flex;
    justify-content: space-between;
    .bottom-menu {
      max-width: 948px;
      height: 110px;
      display: flex;
      flex-flow: wrap column;
      flex-grow: 1;
      .menu-item {
        flex: 1 1 33%;
        a {
          color: #fff;
          text-decoration: none;
          font-weight: 600;
          font-size: 16px;
          line-height: 36px;
          @media all and(max-width: 755px) {
            line-height: 25px;
            font-size: 11px;
          }
        }
        @media all and(max-width: 755px) {
          flex: 0 1 25px;
        }
      }
      @media all and(max-width: 755px) {
        height: 207px;
      }
      @media all and(max-width: 400px) {
        min-height: 400px;
        height: auto;
      }
    }
    .bottom-tg {
      width: 119px;
      margin-right: 100px;
      height: 47px;
      background: url("./assets/bot-tg.png") 0 0 no-repeat;
      @media all and(max-width: 1170px) {
        margin-right: 0;
      }
      @media all and(max-width: 755px) {
        margin-top: auto;
      }
    }
  }
}
</style>
