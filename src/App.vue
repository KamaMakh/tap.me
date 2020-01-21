<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Montserrat:400,500,600,700&display=swap&subset=cyrillic-ext");
html {
  height: 100%;
  min-height: 100%;
}
body,
#app {
  height: 100%;
  min-height: 100%;
}
#app {
  font-family: "Montserrat", sans-serif !important;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #272727;
}
.ps {
  max-height: 100%;
}
.VueCarousel-dot {
  background: none !important;
  border: 1px solid #7c7c7c !important;
  width: 12px !important;
  height: 12px !important;
  padding: 0 !important;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  margin: 0 2px !important;
}
.VueCarousel-dot[aria-selected="true"] {
  background-color: #ff5c03 !important;
  border-color: transparent !important;
}
.main-component-product .pics__line {
  .custom-switch {
    cursor: pointer;
    input {
      outline: none !important;
    }
    .custom-control-label {
      &:before {
        width: 62px;
        height: 17px;
        background: #fafafa;
        border-radius: 8px;
        border: none !important;
        box-shadow: none;
      }
      &:after {
        width: 39px;
        height: 39px;
        background: #ffffff;
        border: 1px solid #5acd50;
        box-shadow: 0px 1px 4px rgba(90, 205, 80, 0.367925);
        border-radius: 50%;
        top: -7px;
        right: -4px;
        left: auto;
        cursor: pointer;
      }
    }
    &.hide {
      .custom-control-label {
        &:after {
          border: 1px solid darkred;
          right: auto;
          left: -49px;
          box-shadow: 0px 1px 4px #b67d70;
        }
      }
    }
  }
}
</style>
