<template>
  <b-link v-if="to" :to="to" class="header-button">
    {{ text ? text : "text" }}
  </b-link>
  <div v-else class="header-button">
    {{ text ? text : "text" }}
  </div>
</template>

<script>
export default {
  props: ["text", "to"],
  name: "HeaderButton"
};
</script>

<style scoped lang="scss">
.header-button {
  font-weight: 600;
  font-size: 16px;
  line-height: 30px;
  color: #FFFFFF;
  transition: all 0.3s;
  border-radius: 25px;
  padding: 10px 35px;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    color: #7F360D;
    background: #fff;
  }
}
</style>
