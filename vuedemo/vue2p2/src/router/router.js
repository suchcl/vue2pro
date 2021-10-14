import Vue from "vue";
import VueRouter from "vue-router";

// const Layout = () => import("../layout/layout");
import Layout from "../layout/layout.vue";
import Main from "../layout/header.vue";

Vue.use(VueRouter);

// routes最好名字固定，不要自定义，否则实例化router实例的时候，就不能使用es6的简便写法了
const routes = [
  {
    path: "/",
    component: Layout,
    meta: {
      title: "首页",
    },
  },
  {
    path: "/header",
    component: Main,
  },
];

let router = new VueRouter({
  routes,
  mode: "history",
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});
export default router;
