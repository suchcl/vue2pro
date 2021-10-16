import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

// 导入组件
const Home = () => import("../pages/home/Home.vue");
const Category = () => import("../pages/category/Category.vue");
const ShopCar = () => import("../pages/shopcar/ShopCar.vue");
const Profile = () => import("../pages/profile/Profile.vue");

const routes = [
  {
    path: "",
    redirect: "/home",
  },
  {
    path: "/home",
    component: Home,
  },
  {
    path: "/category",
    component: Category,
  },
  {
    path: "/shopcar",
    component: ShopCar,
  },
  {
    path: "/profile",
    component: Profile,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
