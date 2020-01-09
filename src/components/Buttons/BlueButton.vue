<template>
  <b-link v-if="to" :to="to" class="blue-button">
    {{ text ? text : "Button" }}
  </b-link>
  <div v-else class="blue-button">
    {{ text ? text : "Button" }}
  </div>
</template>

<script>
export default {
  props: ["text", "to"],
  name: "BlueButton"
};
</script>

<style scoped lang="scss">
.blue-button {
  display: flex;
  align-items: center;
  justify-content: center;
  background: #1b3fc6;
  border: 1px solid #cccccc;
  padding: 15px 20px;
  box-sizing: border-box;
  font-weight: normal;
  font-size: 15px;
  text-align: center;
  color: #ffffff;
  width: 100%;
  transition: all 0.3s;
  cursor: pointer;
  text-decoration: none;
  border-radius: 2px;
  &:hover {
    opacity: 0.8;
  }
}
</style>
