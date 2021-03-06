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
    path: "/login",
    name: "Login",
    component: () => import("../components/Login.vue")
  },
  {
    path: "/add-joke",
    name: "Add",
    component: () => import("../components/AddForm.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
