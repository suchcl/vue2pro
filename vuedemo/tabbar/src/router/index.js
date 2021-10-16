import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

// 导入组件
const Home = () => import("../pages/home/Home.vue");

const routes = [
  {
    path: "",
    redirect: "/home",
  },
  {
    path: "/home",
    component: Home,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
