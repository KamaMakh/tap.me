<template>
  <div class="main-component-share">
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
      Поделиться
    </div>
    <div class="sub-title">
      Ваш Link
    </div>
    <div class="share">
      <input id="myLink" :value="user.url" />
      <span @click="copyText" style="cursor: pointer" title="Скопировать">
        <svg
          width="27"
          height="26"
          viewBox="0 0 27 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M0.0385742 4.84546H22.3329V25.8818H0.0385742V4.84546ZM1.58143 24.3061H20.79V6.42122H1.58143V24.3061Z"
            fill="#FF5505"
          />
          <path
            d="M26.9614 0.118179H5.28427V1.69394H25.4186V20.4848H26.9614V0.118179Z"
            fill="#FF5505"
          />
        </svg>
      </span>
    </div>
    <div class="text">
      Поделитесь своей ссылкой с клиентами, чтобы они могли начать чат в
      мессенджере, в котором им удобно.
    </div>
    <div class="qr-code">
      <qrcode-vue :value="user.url" :size="size" level="H"></qrcode-vue>
    </div>
    <div class="download" @click="downloadQR">
      Скачать
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import QrcodeVue from "qrcode.vue";
export default {
  name: "MainComponentShare",
  components: {
    QrcodeVue
  },
  data() {
    return {
      size: 230
    };
  },
  computed: {
    ...mapState({
      user: state => state.user.user
    })
  },
  methods: {
    downloadQR() {
      let link = document.createElement("a");
      link.download = "qr.png";
      link.href = document.querySelector("canvas").toDataURL();
      link.click();
    },
    copyText() {
      let text = document.getElementById("myLink");
      text.select();
      text.setSelectionRange(0, 99999);
      document.execCommand("copy");
    }
  }
};
</script>

<style scoped lang="scss">
.main-component-share {
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
    color: #151515;
    mix-blend-mode: normal;
    opacity: 0.4;
    margin-top: 23px;
    margin-bottom: 2px;
  }
  .share {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 9px 19px 9px 15px;
    background: #f2f2f2;
    border-radius: 6px;
    input {
      border: none;
      background: none;
      pointer-events: none;
      outline: none;
    }
  }
  .text {
    font-weight: 200;
    font-size: 14px;
    letter-spacing: -0.163333px;
    color: #727272;
    mix-blend-mode: normal;
    margin-top: 11px;
  }
  .qr-code {
    margin-top: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .download {
    font-weight: 600;
    font-size: 14px;
    text-align: center;
    letter-spacing: -0.163333px;
    color: #1b3fc6;
    margin-top: 0;
    cursor: pointer;
  }
}
</style>
