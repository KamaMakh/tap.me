import Vue from "vue";
import VueRouter from "vue-router";
import Auth from "../views/Auth";
import AuthComponentTabs from "@/components/AuthComponent/components/AuthComponentTabs";
import AuthComponentReset from "@/components/AuthComponent/components/AuthComponentReset";
import AuthComponentCreateLink from "@/components/AuthComponent/components/AuthComponentCreateLink";

Vue.use(VueRouter);

const routes = [
  {
    path: "/auth",
    component: Auth,
    children: [
      {
        path: "/",
        name: "AuthComponentTabs",
        component: AuthComponentTabs
      },
      {
        path: "reset",
        name: "AuthComponentReset",
        component: AuthComponentReset
      },
      {
        path: "link",
        name: "AuthComponentCreateLink",
        component: AuthComponentCreateLink
      }
    ]
  }
];

const router = new VueRouter({
  routes
});

export default router;
