<template>
  <b-link v-if="to" :to="to" :class="getClass()">
    {{ text ? text : "Button" }}
  </b-link>
  <div v-else :class="getClass()">
    {{ text ? text : "Button" }}
  </div>
</template>

<script>
export default {
  props: ["text", "to", "disabled"],
  name: "BlueButton",
  methods: {
    getClass: function() {
      if (this.disabled) return "blue-button disabled";
      else return "blue-button";
    }
  }
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

.blue-button.disabled {
  background-color: #c3bec6;
  cursor: inherit;
}
</style>
