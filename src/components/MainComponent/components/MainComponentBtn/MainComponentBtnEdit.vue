<template>
  <b-link v-if="to" :to="to" class="main-component-btn-edit">
    <span style="margin-right: 16px">
      <svg
        width="21"
        height="22"
        viewBox="0 0 21 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M13.0583 3.50873L17.3301 7.8074L6.5169 18.6887L2.24743 14.39L13.0583 3.50873ZM20.5717 2.47195L18.6666 0.554925C17.9303 -0.186 16.7348 -0.186 15.996 0.554925L14.1712 2.39127L18.443 6.68995L20.5717 4.54792C21.1427 3.97335 21.1427 3.04658 20.5717 2.47195ZM0.0118999 20.4321C-0.0658751 20.7842 0.250075 21.0996 0.6 21.014L5.36025 19.8526L1.09078 15.5539L0.0118999 20.4321Z"
          fill="white"
        />
      </svg>
    </span>
    Редактировать
  </b-link>
  <div v-else class="main-component-btn-edit">
    <span style="margin-right: 16px">
      <svg
        width="21"
        height="22"
        viewBox="0 0 21 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M13.0583 3.50873L17.3301 7.8074L6.5169 18.6887L2.24743 14.39L13.0583 3.50873ZM20.5717 2.47195L18.6666 0.554925C17.9303 -0.186 16.7348 -0.186 15.996 0.554925L14.1712 2.39127L18.443 6.68995L20.5717 4.54792C21.1427 3.97335 21.1427 3.04658 20.5717 2.47195ZM0.0118999 20.4321C-0.0658751 20.7842 0.250075 21.0996 0.6 21.014L5.36025 19.8526L1.09078 15.5539L0.0118999 20.4321Z"
          fill="white"
        />
      </svg>
    </span>
    Редактировать
  </div>
</template>

<script>
export default {
  props: ["to"],
  name: "MainComponentBtnEdit"
};
</script>

<style scoped lang="scss">
.main-component-btn-edit {
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ff5c03;
  box-shadow: 0px 0px 43px rgba(255, 92, 3, 0.54);
  font-weight: 600;
  font-size: 17px;
  color: #ffffff;
  border-radius: 5px;
  padding: 33px 20px;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  width: 100%;
  transition: all 0.3s;
  cursor: pointer;
  text-decoration: none;
  &:hover {
    background: #dedede;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
  }
}
</style>
