import Vue from "vue";
import VueRouter from "vue-router";

import Auth from "../views/Auth";
import Main from "../views/Main";
import Guest from "../views/Guest";
import Landing from "../views/Landing";

import AuthComponentTabs from "@/components/AuthComponent/components/AuthComponentTabs";
import AuthComponentReset from "@/components/AuthComponent/components/AuthComponentReset";
import AuthComponentCreateLink from "@/components/AuthComponent/components/AuthComponentCreateLink";

import MainComponentMyPage from "@/components/MainComponent/components/MainComponentMyPage";
import MainComponentEdit from "@/components/MainComponent/components/MainComponentEdit";
import MainComponentSocials from "@/components/MainComponent/components/MainComponentSocials";
import MainComponentSocialEdit from "@/components/MainComponent/components/MainComponentSocialEdit";
import MainComponentShare from "@/components/MainComponent/components/MainComponentShare";
import MainComponentCallBack from "@/components/MainComponent/components/MainComponentCallBack";
import MainComponentAnalytics from "@/components/MainComponent/components/MainComponentAnalytics";
import MainComponentShop from "@/components/MainComponent/components/MainComponentShop";
import MainComponentProduct from "@/components/MainComponent/components/MainComponentProduct";
import MainComponentSettings from "@/components/MainComponent/components/MainComponentSettings";
import MainComponentTariffs from "@/components/MainComponent/components/MainComponentTariffs";

import GuestComponentLink from "@/components/GuestComponent/components/GuestComponentLink";
import GuestComponentShare from "@/components/GuestComponent/components/GuestComponentShare";
import GuestComponentProduct from "@/components/GuestComponent/components/GuestComponentProduct";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "LandingComponent",
    component: Landing
  },
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
      },
      {
        path: "share",
        name: "MainComponentShare",
        component: MainComponentShare
      },
      {
        path: "call-back",
        name: "MainComponentCallBack",
        component: MainComponentCallBack
      },
      {
        path: "analytics",
        name: "MainComponentAnalytics",
        component: MainComponentAnalytics
      },
      {
        path: "shop",
        name: "MainComponentShop",
        component: MainComponentShop
      },
      {
        path: "product",
        name: "MainComponentProduct",
        component: MainComponentProduct
      },
      {
        path: "settings",
        name: "MainComponentSettings",
        component: MainComponentSettings
      },
      {
        path: "tariffs",
        name: "MainComponentTariffs",
        component: MainComponentTariffs
      }
    ]
  },
  {
    path: "/guest",
    component: Guest,
    children: [
      {
        path: "/",
        name: "GuestComponentLink",
        component: GuestComponentLink
      },
      {
        path: "share",
        name: "GuestComponentShare",
        component: GuestComponentShare
      },
      {
        path: "product",
        name: "GuestComponentProduct",
        component: GuestComponentProduct
      }
    ]
  }
];

const router = new VueRouter({
  routes
});

export default router;
