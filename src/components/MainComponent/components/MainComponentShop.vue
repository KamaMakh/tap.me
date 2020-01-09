<template>
  <div class="main-component-shop">
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
      Магазин
    </div>
    <div class="sub-title">
      Поделитесь со своими клиентами акциями и скидками на Ваши товары.
    </div>
    <blue-button text="Добавить товар" to="main" />
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
            <b-link :to="{ name: 'MainComponentSocialEdit' }" class="edit">
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
    .handle {
      padding-top: 8px;
      padding-bottom: 8px;
      margin-right: 14px;
    }
    .def-icon {
      width: 35px;
      height: 35px;
      background: #999;
      border-radius: 2px;
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
