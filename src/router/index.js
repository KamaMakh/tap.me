import Vue from "vue";
import VueRouter from "vue-router";
import Auth from "../views/Auth";
import Main from "../views/Main";
import AuthComponentTabs from "@/components/AuthComponent/components/AuthComponentTabs";
import AuthComponentReset from "@/components/AuthComponent/components/AuthComponentReset";
import AuthComponentCreateLink from "@/components/AuthComponent/components/AuthComponentCreateLink";
import MainComponentMyPage from "@/components/MainComponent/components/MainComponentMyPage";
import MainComponentEdit from "@/components/MainComponent/components/MainComponentEdit";
import MainComponentSocials from "@/components/MainComponent/components/MainComponentSocials";
import MainComponentSocialEdit from "@/components/MainComponent/components/MainComponentSocialEdit";

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
  },
  {
    path: "/main",
    component: Main,
    children: [
      {
        path: "/",
        name: "MainComponentMyPage",
        component: MainComponentMyPage
      },
      {
        path: "edit",
        name: "MainComponentEdit",
        component: MainComponentEdit
      },
      {
        path: "socials",
        name: "MainComponentSocials",
        component: MainComponentSocials
      },
      {
        path: "soc-edit",
        name: "MainComponentSocialEdit",
        component: MainComponentSocialEdit
      }
    ]
  }
];

const router = new VueRouter({
  routes
});

export default router;
