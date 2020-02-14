<template>
  <div v-if="loading" class="basic-button">
    <b-spinner small></b-spinner>
  </div>
  <b-link v-else-if="to" :to="to" class="basic-button" @click="callEvent">{{
    text ? text : "Button"
  }}</b-link>
  <div v-else class="basic-button" @click="callEvent">
    {{ text ? text : "Button" }}
  </div>
</template>

<script>
export default {
  props: ["text", "to", "loading"],
  name: "BasicButton",
  methods: {
    callEvent() {
      this.$emit("event");
    }
  }
};
</script>

<style scoped lang="scss">
.basic-button {
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ff5c03;
  box-shadow: 0px 0px 43px rgba(255, 92, 3, 0.54);
  font-weight: 600;
  font-size: 17px;
  color: #ffffff;
  border-radius: 5px;
  padding: 20px;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  width: 100%;
  transition: all 0.3s;
  cursor: pointer;
  &:hover {
    background: #dedede;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
  }
}

.basic-button:hover {
  text-decoration: none;
}
</style>
