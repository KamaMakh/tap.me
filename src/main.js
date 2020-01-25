import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import BasicButton from "@/components/Buttons/BasicButton";
import BlueButton from "@/components/Buttons/BlueButton";
import PerfectScrollbar from "vue2-perfect-scrollbar";
import "vue2-perfect-scrollbar/dist/vue2-perfect-scrollbar.css";
import GeneralComponentHeader from "@/components/GeneralComponent/GeneralComponentHeader";
import Validations from "vuelidate";
import MainComponentTitle from "@/components/MainComponent/components/MainComponentTitle";
import VueWindowSize from "vue-window-size";
import backend from "./backend";

import "animate.css";
import "fullpage-vue/src/fullpage.css";
import VueFullpage from "fullpage-vue";
Vue.use(VueFullpage);

Vue.component("basic-button", BasicButton);
Vue.component("blue-button", BlueButton);
Vue.component("general-header", GeneralComponentHeader);
Vue.component("main-title", MainComponentTitle);

Vue.use(BootstrapVue);
Vue.use(Validations);
Vue.use(PerfectScrollbar);
Vue.use(VueWindowSize);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  backend,
  render: h => h(App)
}).$mount("#app");
