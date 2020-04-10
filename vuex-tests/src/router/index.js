import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/repos",
    name: "Repos",
    component: () => import("../views/Repos.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
