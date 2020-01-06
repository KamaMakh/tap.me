<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Montserrat:400,500,600,700&display=swap&subset=cyrillic-ext");
html,
body,
#app {
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
</style>
