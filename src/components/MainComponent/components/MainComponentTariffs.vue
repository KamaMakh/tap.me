<template>
  <div class="main-component-tariffs">
    <main-title text="Тарифы" :to="{ name: 'MainComponentMyPage' }" />
    <div class="share">
      {{ user.url }}
      <span>
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
    </div>
    <div class="edit">
      <editBtn :to="{ name: 'MainComponentEdit' }" />
    </div>
    <div class="list">
      <b-list-group>
        <b-list-group-item>
          <b-link :to="{ name: 'MainComponentShop' }">
            <span>
              <span class="icon shop"> </span>
              Магазин
            </span>
            <span class="arrow"></span>
          </b-link>
        </b-list-group-item>
        <b-list-group-item>
          <b-link :to="{ name: 'MainComponentSocials' }">
            <span>
              <span class="icon socials"></span>
              Социальные сети
            </span>
            <span class="arrow"></span>
          </b-link>
        </b-list-group-item>
        <b-list-group-item>
          <b-link :to="{ name: 'MainComponentCallBack' }">
            <span>
              <span class="icon">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12.0742 16.2637C12.0742 15.6704 11.5933 15.1894 10.9999 15.1894C10.4066 15.1894 9.92575 15.6704 9.92575 16.2637C9.92575 16.857 10.4066 17.3379 10.9999 17.3379C11.5933 17.3379 12.0742 16.857 12.0742 16.2637ZM-5.34058e-05 11C-5.34058e-05 4.91983 4.92052 0 10.9999 0C17.0802 0 22 4.92063 22 11C22 17.0803 17.0793 22 10.9999 22C4.91975 22 -5.34058e-05 17.0794 -5.34058e-05 11ZM1.7187 11C1.7187 16.1302 5.8705 20.2813 10.9999 20.2813C16.1301 20.2813 20.2812 16.1295 20.2812 11C20.2812 5.86985 16.1294 1.71875 10.9999 1.71875C5.86982 1.71875 1.7187 5.87055 1.7187 11ZM7.56247 8.959C7.56247 7.06355 9.10452 5.52147 10.9999 5.52147C12.8954 5.52147 14.4374 7.06355 14.4374 8.959C14.4374 10.5578 13.3403 11.9052 11.8593 12.2877V13.6856C11.8593 14.1602 11.4745 14.5449 10.9999 14.5449C10.5253 14.5449 10.1406 14.1602 10.1406 13.6856V11.5371C10.1406 11.0625 10.5253 10.6778 10.9999 10.6778C11.9476 10.6778 12.7187 9.90675 12.7187 8.959C12.7187 8.01127 11.9476 7.24025 10.9999 7.24025C10.0522 7.24025 9.28125 8.01127 9.28125 8.959C9.28125 9.43365 8.89647 9.81837 8.42182 9.81837C7.94717 9.81837 7.56247 9.43365 7.56247 8.959Z"
                    fill="black"
                  />
                </svg>
              </span>
              Обратная связь
            </span>
            <span class="arrow"></span>
          </b-link>
        </b-list-group-item>
        <b-list-group-item>
          <b-link :to="{ name: 'MainComponentAnalytics' }">
            <span>
              <span class="icon">
                <svg
                  width="22"
                  height="19"
                  viewBox="0 0 22 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M18.6143 0.513303C19.4731 -0.250757 20.7615 -0.149205 21.5013 0.732379C22.2413 1.61929 22.148 2.94971 21.2892 3.71375C20.4303 4.47777 19.142 4.37626 18.4021 3.49468L15.9548 5.28994C16.2084 6.0593 16.0221 6.90886 15.4685 7.48055C14.6666 8.31402 13.3628 8.31939 12.5556 7.49122L10.0825 9.64445C10.2274 10.8092 9.43576 11.8831 8.30778 12.0327C7.17987 12.1823 6.14509 11.3649 5.99505 10.2001L4.03933 9.3826C3.8117 10.1841 3.14943 10.7718 2.34743 10.8894C1.21953 11.0497 0.179499 10.2428 0.019183 9.07808C-0.136089 7.91329 0.645237 6.83403 1.77312 6.67374C2.90102 6.51345 3.94105 7.32026 4.10136 8.48503L6.05711 9.30246C6.19683 8.80024 6.5176 8.3728 6.94709 8.09499C7.91458 7.47518 9.18221 7.78509 9.78234 8.7842L12.09 6.7753C11.7692 5.94708 11.9762 5.00139 12.6177 4.40299C13.461 3.61222 14.7649 3.68168 15.5254 4.55259L17.9986 2.74131C17.7554 1.93985 17.9986 1.06363 18.6143 0.513303ZM18.9299 7.08514H20.9995V19H18.9299V7.08514ZM12.9799 10.9321H15.0494V19H12.9799V10.9321ZM9.04771 14.9393H6.97808V19H9.04771V14.9393ZM1.02804 13.8173H3.09766V19H1.02804V13.8173Z"
                    fill="black"
                  />
                </svg>
              </span>
              Аналитика
            </span>
            <span class="arrow"></span>
          </b-link>
        </b-list-group-item>
        <b-list-group-item>
          <b-link :to="{ name: 'MainComponentTariffs' }">
            <span>
              <span class="icon">
                <svg
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M23.9732 9.75267C23.9226 9.59626 23.7881 9.48216 23.6262 9.45837L15.8575 8.32226L12.3833 1.23849C12.3112 1.09069 12.1616 0.997352 11.9985 0.997352C11.8353 0.997352 11.6854 1.09069 11.6137 1.23849L8.13902 8.32272L0.370312 9.4588C0.208444 9.48256 0.074464 9.59626 0.023308 9.7531C-0.026896 9.90916 0.0147119 10.0811 0.131976 10.1957L5.75387 15.7099L4.4265 23.4963C4.39895 23.6584 4.46512 23.8222 4.59697 23.919C4.72966 24.0166 4.90528 24.0292 5.0492 23.9518L11.9985 20.2759L18.947 23.9518C19.0097 23.9851 19.0788 24.0015 19.1471 24.0015C19.236 24.0015 19.3245 23.9738 19.3996 23.919C19.5318 23.8222 19.598 23.6584 19.5701 23.4963L18.2431 15.7103L23.865 10.1957C23.9818 10.0803 24.0239 9.90868 23.9732 9.75267Z"
                    fill="#FF5C03"
                  />
                </svg>
              </span>
              Выбрать тариф
            </span>
            <span class="arrow"></span>
          </b-link>
        </b-list-group-item>
      </b-list-group>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import MainComponentBtnEdit from "./MainComponentBtn/MainComponentBtnEdit";
export default {
  name: "MainComponentTariffs",
  components: {
    editBtn: MainComponentBtnEdit
  },
  computed: {
    ...mapState({
      user: state => state.user.user
    })
  }
};
</script>

<style scoped lang="scss">
.main-component-tariffs {
  padding-top: 15px;
  .share {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 9px 19px 9px 15px;
    background: #f2f2f2;
    border-radius: 6px;
    margin-top: 26px;
    margin-bottom: 40px;
  }
  .list {
    margin-top: 45px;
    .list-group-item {
      border: none;
      padding: 0;
      a {
        font-weight: 600;
        font-size: 14px;
        line-height: 19px;
        color: #000000;
        text-decoration: none;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 14px 0;
        border-bottom: 1px solid #e5e5e5;
        span:first-child {
          display: flex;
          align-items: center;
          .icon {
            margin-right: 8px;
            &.socials {
              width: 22px;
              height: 22px;
              background: url("../assets/socials.png") 0 0 no-repeat;
            }
            &.shop {
              width: 22px;
              height: 22px;
              background: url("../assets/shop.png") 0 0 no-repeat;
            }
          }
        }
        .arrow {
          width: 9px;
          height: 14px;
          background: url("../assets/arrow.png") 0 0 no-repeat;
        }
      }
    }
  }
}
</style>
