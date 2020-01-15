<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Montserrat:400,500,600,700&display=swap&subset=cyrillic-ext");
html {
  height: 100%;
}
body,
#app {
  height: 100%;
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
  border: 1px solid #7C7C7C !important;
  width: 12px !important;
  height: 12px !important;
  padding: 0 !important;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  margin: 0 2px !important;
}
.VueCarousel-dot[aria-selected="true"] {
  background-color: #FF5C03 !important;
  border-color: transparent !important;
}
</style>
