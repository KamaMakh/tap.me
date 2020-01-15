<template>
  <b-link
    v-if="to"
    :to="to"
    class="header-button"
    :class="{ reverse: reverse }"
  >
    {{ text ? text : "text" }}
  </b-link>
  <div v-else class="header-button" :class="{ reverse: reverse }">
    {{ text ? text : "text" }}
  </div>
</template>

<script>
export default {
  props: ["text", "to", "reverse"],
  name: "HeaderButton"
};
</script>

<style scoped lang="scss">
.header-button {
  font-weight: 600;
  font-size: 16px;
  line-height: 30px;
  color: #7f360d;
  transition: all 0.3s;
  border-radius: 25px;
  padding: 10px 35px;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    color: #7f360d;
    background: #fff;
  }
  &.reverse {
    color: #7f360d;
    background: #fff;
    &:hover {
      opacity: 0.8;
    }
  }
}
</style>
