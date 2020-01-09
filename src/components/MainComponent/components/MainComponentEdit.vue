<template>
  <div class="main-component-edit">
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
      Настройте вашу страницу
    </div>
    <div class="pics">
      <div class="pics__item">
        <div class="pics__title">
          Аватар
        </div>
        <div class="pics__line">
          <div class="pics__img">
            <img :src="user.avatar" alt="Аватар" />
          </div>
          <div class="pics__btn" @click="modalAvatar = !modalAvatar">
            Изменить
          </div>
        </div>
      </div>
      <div class="pics__item">
        <div class="pics__title">
          Обложка
        </div>
        <div class="pics__line">
          <div class="pics__img">
            <img :src="user.background" alt="Обложка" />
          </div>
          <div class="pics__btn" @click="modalBackground = !modalBackground">
            Изменить
          </div>
        </div>
      </div>
    </div>
    <div class="input-wrap" role="group">
      <label for="input-live">Имя страницы</label>
      <b-form-input
        id="input-live"
        v-model="user.name"
        placeholder="Имя"
        trim
      ></b-form-input>
    </div>
    <div class="input-wrap" role="group">
      <label for="input-live2">Имя страницы в url</label>
      <b-form-input
        id="input-live2"
        v-model="user.url"
        placeholder="Имя страницы в url"
        trim
      ></b-form-input>
    </div>
    <div class="input-wrap" role="group">
      <label for="input-live3">Логин в Instagrm</label>
      <b-form-input
        id="input-live3"
        v-model="user.instagram"
        placeholder="Логин в Instagrm"
        trim
      ></b-form-input>
    </div>
    <div class="input-wrap" role="group">
      <label for="input-live4">Ссылка на онлайн запись</label>
      <b-form-input
        id="input-live4"
        v-model="user.link_online"
        placeholder="Ссылка на онлайн запись"
        trim
      ></b-form-input>
    </div>
    <div class="input-wrap">
      <label for="input-live5">Описание</label>
      <b-form-textarea
        id="input-live5"
        placeholder="Описание"
        rows="5"
      ></b-form-textarea>
    </div>
    <div class="buttons-wrap">
      <div class="buttons-wrap__title">Ссылка на мессенджеры и соцсети</div>
      <div class="buttons-wrap__link">
        <blue-button text="Добавить ссылку" to="main" />
      </div>
      <div class="buttons-wrap__save">
        <basic-button text="Сохранить" />
      </div>
    </div>

    <!--modals-->
    <b-modal
      id="modal-avatar"
      v-model="modalAvatar"
      title="Заменить аватар"
      hide-footer
    >
      <b-form-file
        v-model="user.avatar_file"
        placeholder="Выберите файл или перетащите его"
        drop-placeholder="Перетащите сюда..."
        browse-text="Выбрать"
      ></b-form-file>
      <div class="modal-buttons" style="margin-top: 25px">
        <basic-button text="Добавить" />
      </div>
    </b-modal>
    <b-modal
      id="modal-avatar"
      v-model="modalBackground"
      title="Заменить фоновую картинку"
      hide-footer
    >
      <b-form-file
        v-model="user.back_file"
        placeholder="Выберите файл или перетащите его"
        drop-placeholder="Перетащите сюда..."
        browse-text="Выбрать"
      ></b-form-file>
      <div class="modal-buttons" style="margin-top: 25px">
        <basic-button text="Добавить" />
      </div>
    </b-modal>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "MainComponentEdit",
  data() {
    return {
      modalAvatar: false,
      modalBackground: false
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
.main-component-edit {
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
  .pics {
    margin-top: 24px;
    display: flex;
    margin-bottom: 30px;
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
    }
    &__line {
      display: flex;
      align-items: center;
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
    input {
      background: #ffffff;
      border: 1px solid #cccccc;
      border-radius: 0;
      padding: 16px 13px;
      height: auto;
      box-sizing: border-box;
      font-weight: normal;
      font-size: 14px;
      color: #959595;
    }
    textarea {
      border-radius: 0;
    }
  }
  .buttons-wrap {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    &__title {
      font-weight: 600;
      font-size: 13px;
      color: #000000;
      margin-bottom: 5px;
    }
    &__save {
      margin-top: 28px;
    }
  }
}
</style>
