<template>
  <div class="main-component-call-back">
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
      Обратная связь
    </div>
    <div class="help-block">
      <div class="help-title">Нужна помощь?</div>
      <div class="help-sub-title">Выберите лучший способ связи с нами</div>
      <div class="soc-list">
        <span>
          <img src="../assets/socials/viber_big.png" />
        </span>
        <span>
          <img src="../assets/socials/tg_big.png" />
        </span>
        <span>
          <img src="../assets/socials/whatsapp_big.png" />
        </span>
        <span>
          <img src="../assets/socials/skype_big.png" />
        </span>
        <span>
          <img src="../assets/socials/vk_big.png" />
        </span>
        <span>
          <img src="../assets/socials/fbm_big.png" />
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainComponentCallBack"
};
</script>

<style scoped lang="scss">
.main-component-call-back {
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
    margin-top: 13px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 35px 20px;
  }
  .help-title {
    font-weight: 500;
    font-size: 20px;
    color: #151515;
    text-align: center;
  }
  .help-sub-title {
    font-weight: 200;
    font-size: 14px;
    color: #151515;
    text-align: center;
  }
  .soc-list {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 15px;
    max-width: 165px;
    flex-wrap: wrap;
    span {
      cursor: pointer;
      text-align: center;
    }
  }
}
</style>
