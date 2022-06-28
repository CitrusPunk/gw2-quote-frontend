import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/AboutView.vue"),
  },
  {
    path: "/quotes",
    name: "quotes",
    component: () => import("../components/QuotesList.vue"),
  },
  {
    path: "/quotes/:id",
    name: "quotes-details",
    component: () => import("../components/QuoteDetails.vue"),
  },
  {
    path: "/quotes/add",
    name: "quotes-add",
    component: () => import("../components/QuoteAdd.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: "active",
  linkExactActiveClass: "exact-active",
});

export default router;
