<template>
  <div class="main-component-analytics">
    <div class="title">
      <span>
        <b-link :to="{ name: 'MainComponentMyPage' }">
          <svg
            width="11"
            height="19"
            viewBox="0 0 11 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <rect width="11" height="19" fill="url(#pattern0)" />
            <mask
              id="mask0"
              mask-type="alpha"
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="11"
              height="19"
            >
              <rect width="11" height="19" fill="url(#pattern1)" />
            </mask>
            <g mask="url(#mask0)">
              <rect width="11" height="19" fill="black" fill-opacity="0.01" />
            </g>
            <defs>
              <pattern
                id="pattern0"
                patternContentUnits="objectBoundingBox"
                width="1"
                height="1"
              >
                <use
                  xlink:href="#image0"
                  transform="scale(0.0909091 0.0526316)"
                />
              </pattern>
              <pattern
                id="pattern1"
                patternContentUnits="objectBoundingBox"
                width="1"
                height="1"
              >
                <use
                  xlink:href="#image0"
                  transform="scale(0.0909091 0.0526316)"
                />
              </pattern>
              <image
                id="image0"
                width="11"
                height="19"
                xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAATCAYAAABGKffQAAABdmlDQ1BJQ0MgUHJvZmlsZQAAeJx1kc8rBGEYxz+7iFg5cJAc5oAkaqPkyDq4bNKiLC47s7O7anZ2mtlNclUuDspBXPw6+A+4KldKKVKS8h/4ddE2ntdsrWTf6Z3n0/d9v0/v+30hHLeMvFcfhbxddBNTMW0huag1vhChkxa6GUgZnjMxMxOn5vi8I6Tq7ZDqVXvfv6MlbXoGhJqERw3HLQqPC8dXi47iLeEOI5dKCx8KD7pyQOErpesBPyvOBvyu2J1LTEJY9dSyv1j/xUbOzQv3C/fkrZJROY+6ScS052eldsnsxiPBFDE0dEqsYFFkSKotmf3vi/74pimIx5C/wxquOLLkxDsoakm6mlIzopvyWayp3P/m6WVGhoPukRg0PPn+Wy807kB52/e/jny/fAx1j3BhV/0FyWnsQ/TtqtZzAG0bcHZZ1fRdON+Ezgcn5aZ+pDqZ4UwGXk+hNQntN9C8FGRVWefkHubW5YmuYW8f+mR/2/I3BFZoDMcvwwIAAABzSURBVHicjdLBCYAwDEbhJ7iAC1TcH3QCTypu4SrxYiSUpsl//l7ooRBvFBFEJIQFOIAlwgV4AAE2YMjAW5+Shi3swhp3ocUhVJyCivcPCjB5UPFsLl/R5XRgFwb1ukFrbuCtGfRmg5XOr7PBSeI/6/43v9Maz86BoB+NAAAAAElFTkSuQmCC"
              />
            </defs>
          </svg>
        </b-link>
      </span>
      Аналитика
    </div>
    <div v-if="user.pro">
      <div class="activate">
        <div class="sub-title">
          Подключить
        </div>
        <div class="buttons">
          <div class="fb-analytics"></div>
          <div class="google-analytics"></div>
        </div>
      </div>
      <div class="click-stats">
        <div class="sub-title">
          Клики
        </div>
        <div v-for="(element, key) in clicks" class="item" :key="key">
          <div class="left">
            <span>
              <img
                v-if="element.id === 0"
                src="../assets/socials/fb.png"
                :alt="element.name"
              />
              <img
                v-else-if="element.id === 1"
                src="../assets/socials/viber.png"
                :alt="element.name"
              />
              <img
                v-else-if="element.id === 2"
                src="../assets/socials/tg.png"
                :alt="element.name"
              />
              <img
                v-else-if="element.id === 3"
                src="../assets/socials/fbm.png"
                :alt="element.name"
              />
              <img
                v-else-if="element.id === 4"
                src="../assets/socials/skype.png"
                :alt="element.name"
              />
              <img
                v-else-if="element.id === 5"
                src="../assets/socials/whatsapp.png"
                :alt="element.name"
              />
              <img
                v-else-if="element.id === 6"
                src="../assets/socials/vk.png"
                :alt="element.name"
              />
            </span>
          </div>
          <div class="right">
            <div class="name">{{ element.name }}</div>
            <div class="stats">
              <div class="stats-item">
                <div class="count">{{ element.day }}</div>
                <div class="text">За день</div>
              </div>
              <div class="stats-item">
                <div class="count">{{ element.week }}</div>
                <div class="text">За неделю</div>
              </div>
              <div class="stats-item">
                <div class="count">{{ element.month }}</div>
                <div class="text">За месяц</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <div class="help-block">
        <div class="help-title">Перейдите на <span>PRO</span></div>
        <div class="help-sub-title">
          Данный функионал <br />
          дотступен в PRO аккаунте
        </div>
        <div class="pro-btn" @click="user.pro = !user.pro">
          Перейти на Pro
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "MainComponentAnalytics",
  data() {
    return {
      clicks: [
        {
          id: 3,
          name: "Facebook Messanger",
          day: 21,
          week: 103,
          month: 1244
        },
        {
          id: 5,
          name: "WhatsApp",
          day: 21,
          week: 103,
          month: 1244
        }
      ]
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
.main-component-analytics {
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
  .help-block {
    border-radius: 8px;
    background: #fafafa;
    margin-top: 21px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 35px 20px;
  }
  .help-title {
    font-weight: 200;
    font-size: 24px;
    color: #151515;
    text-align: center;
    span {
      font-weight: 900;
    }
  }
  .help-sub-title {
    text-align: center;
    font-weight: 200;
    font-size: 14px;
    color: #151515;
    margin-top: 6px;
  }
  .pro-btn {
    width: 263px;
    max-width: 100%;
    margin: 38px auto 0;
    padding: 12px;
    text-align: center;
    border: 2px solid #1b3fc6;
    font-weight: 600;
    font-size: 15px;
    color: #000000;
    cursor: pointer;
  }
  .activate {
    display: flex;
    flex-direction: column;
    margin-top: 28px;
    .sub-title {
      font-weight: 600;
      font-size: 13px;
      color: #000;
    }
    .fb-analytics {
      width: 342px;
      max-width: 100%;
      height: 50px;
      background: url("../assets/socials/fbanalytics.png") 0 0 no-repeat;
      cursor: pointer;
      margin-top: 8px;
      -webkit-background-size: contain;
      background-size: contain;
    }
    .google-analytics {
      width: 342px;
      max-width: 100%;
      height: 50px;
      background: url("../assets/socials/googleanaly.png") 0 0 no-repeat;
      cursor: pointer;
      margin-top: 8px;
      -webkit-background-size: contain;
      background-size: contain;
    }
  }
  .click-stats {
    margin-top: 50px;
    .sub-title {
      font-weight: 600;
      font-size: 13px;
      color: #000;
    }
    .item {
      background: #fafafa;
      border-radius: 3px;
      padding: 19px;
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
      margin-top: 10px;
      display: flex;
      .right {
        display: flex;
        flex-direction: column;
        margin-left: 12px;
        .name {
          font-weight: normal;
          font-size: 14px;
          color: #151515;
          margin-bottom: 11px;
        }
        .stats {
          display: flex;
          .stats-item {
            display: flex;
            flex-direction: column;
            margin-right: 8px;
            .count {
              color: #506acd;
              font-weight: 500;
              font-size: 20px;
            }
            .text {
              font-weight: 200;
              font-size: 12px;
              letter-spacing: 0.5px;
              text-transform: uppercase;
              color: #151515;
            }
          }
        }
      }
    }
  }
}
</style>
