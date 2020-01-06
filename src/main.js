import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import BasicButton from "@/components/Buttons/BasicButton";
import PerfectScrollbar from "vue2-perfect-scrollbar";
import "vue2-perfect-scrollbar/dist/vue2-perfect-scrollbar.css";
import GeneralComponentHeader from "@/components/GeneralComponent/GeneralComponentHeader";
import Validations from "vuelidate";

Vue.component("basic-button", BasicButton)
Vue.component("general-header", GeneralComponentHeader)

Vue.use(BootstrapVue);
Vue.use(Validations);
Vue.use(PerfectScrollbar);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
