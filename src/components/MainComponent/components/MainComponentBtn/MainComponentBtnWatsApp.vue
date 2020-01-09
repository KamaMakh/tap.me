<template>
  <b-link
    v-if="type && type === 'default'"
    :to="to"
    class="main-component-btn-fb blue"
  >
    <span class="def-icon">
      <img src="../../assets/socials/whatsapp.png" alt="" />
    </span>
    Добавить
  </b-link>
  <div v-else class="main-component-btn-fb">
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
        <img src="../../assets/socials/whatsapp.png" alt="" />
      </span>
      {{ element.name }}
    </div>
    <b-link :to="{ name: 'MainComponentSocialEdit' }" class="edit">
      Изменить
    </b-link>
  </div>
</template>

<script>
export default {
  props: ["type", "to", "element"],
  name: "MainComponentBtnFb"
};
</script>

<style scoped lang="scss">
.main-component-btn-fb {
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
  .left {
    font-weight: normal;
  }
  .edit {
    font-weight: 200;
    color: #1b3fc6;
  }
  &.blue {
    background: #2fd74d;
    color: #fff;
    justify-content: center;
  }
  .def-icon {
    margin-right: 9px;
  }
}
</style>
