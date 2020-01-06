<template>
  <div class="basic-button">{{ text ? text : "Button" }}</div>
</template>

<script>
export default {
  props: ["text"],
  name: "BasicButton"
}
</script>

<style scoped lang="scss">
.basic-button {
  display: flex;
  align-items: center;
  justify-content: center;
  background: #FF5C03;
  box-shadow: 0px 0px 43px rgba(255, 92, 3, 0.54);
  font-weight: 600;
  font-size: 17px;
  color: #FFFFFF;
  border-radius: 5px;
  padding: 20px;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  width: 100%;
  transition: all 0.3s;
  cursor: pointer;
  &:hover {
    background: #DEDEDE;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
  }
}
</style>
