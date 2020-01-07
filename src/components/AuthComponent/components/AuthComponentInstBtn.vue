<template>
  <div class="auth-component-inst-btn">
    <span style="margin-right: 17px">
      <svg
        width="25"
        height="25"
        viewBox="0 0 25 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M6.89883 0H18.1006C21.905 0 25.0001 3.095 24.9998 6.89913V18.101C24.9998 21.9051 21.905 25.0001 18.1006 25.0001H6.89883C3.09482 25.0001 -0.00012207 21.9052 -0.00012207 18.101V6.89913C-0.00012207 3.095 3.09482 0 6.89883 0ZM18.1007 22.7819C20.682 22.7819 22.7818 20.6822 22.7818 18.101H22.7817V6.89913C22.7817 4.3181 20.6817 2.21812 18.1006 2.21812H6.89883C4.31783 2.21812 2.21797 4.3181 2.21797 6.89913V18.101C2.21797 20.6822 4.31783 22.7821 6.89883 22.7819H18.1007ZM6.05804 12.5004C6.05804 8.94824 8.94777 6.05842 12.4999 6.05842C16.0519 6.05842 18.9418 8.94824 18.9418 12.5004C18.9418 16.0523 16.0519 18.942 12.4999 18.942C8.94777 18.942 6.05804 16.0523 6.05804 12.5004ZM8.27613 12.5002C8.27613 14.8291 10.171 16.7237 12.4999 16.7237C14.8288 16.7237 16.7236 14.8291 16.7236 12.5002C16.7236 10.1711 14.8289 8.27646 12.4999 8.27646C10.1708 8.27646 8.27613 10.1711 8.27613 12.5002ZM18.0629 4.6538C18.3648 4.35061 18.7845 4.17762 19.2119 4.17762C19.6408 4.17762 20.0607 4.35061 20.3623 4.6538C20.6655 4.95543 20.8385 5.37541 20.8385 5.80426C20.8385 6.23158 20.6655 6.65156 20.3623 6.95475C20.0592 7.25638 19.6408 7.43084 19.2119 7.43084C18.7845 7.43084 18.3645 7.25638 18.0629 6.95475C17.7597 6.65156 17.5853 6.23178 17.5853 5.80426C17.5853 5.37541 17.7596 4.95543 18.0629 4.6538Z"
          fill="white"
        />
      </svg>
    </span>
    Войти через Instagram
  </div>
</template>

<script>
export default {
  name: "AuthComponentInstBtn"
};
</script>

<style scoped lang="scss">
.auth-component-inst-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 350px;
  max-width: 100%;
  height: 65px;
  background: linear-gradient(33.35deg, #ffc355 7.9%, #de3473 92.1%);
  box-shadow: 0px 0px 20px rgba(52, 67, 179, 0.22);
  cursor: pointer;
  transition: all 0.3s;
  font-weight: 600;
  font-size: 15px;
  color: #fff;
  border-radius: 5px;
  &:hover {
    opacity: 0.8;
  }
}

@media all and (max-width: 400px) {
  .auth-component-inst-btn {
    width: 65px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0;
    span {
      margin: 0 !important;
    }
  }
}
</style>
