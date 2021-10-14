import Vue from "vue";
import VueRouter from "vue-router";

// const Layout = () => import("../layout/layout");
import Layout from "../layout/layout.vue";
import Home from "../components/home/home.vue";
import ShoppingCar from "../components/shopping/shopping.vue";
import NewsList from "../components/news/NewsList.vue";
import User from "../components/user/User.vue";

Vue.use(VueRouter);

// routes最好名字固定，不要自定义，否则实例化router实例的时候，就不能使用es6的简便写法了
const routes = [
  {
    path: "/",
    component: Layout,
    meta: {
      title: "首页",
    },
    children: [
      {
        path: "/home",
        component: Home,
        meta: {
          title: "首页",
        },
      },
      {
        path: "/shoppingCar",
        name: "ShoppingCar",
        component: ShoppingCar,
        meta: {
          title: "购物车",
        },
      },
      {
        path: "/news",
        component: NewsList,
        meta: {
          title: "新闻中心",
        },
      },
      {
        path: "/user",
        component: User,
        meta: {
          title: "个人中心",
        },
      },
    ],
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
