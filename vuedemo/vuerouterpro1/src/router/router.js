// 没有使用路由懒加载效果的路由配置
// 配置路由
import Vue from "vue";
import VueRouter from "vue-router";

// 导入组件
import Home from "../components/home.vue";
import About from "../components/about.vue";
import User from "../components/user.vue";
import UserDetail from "../components/userDetail.vue";

// 1. 通过Vue.use()来安装、挂载插件
Vue.use(VueRouter);

// 2. 创建路由实例
const routes = [
  /**
   * 配置路由和组件之间的映射关系
   * 一个映射就是一个对象
   */
  {
    path: "/",
    component: Home
    // redirect: "/home"
  },
  {
    path: "/home",
    component: Home
  },
  {
    path: "/about",
    component: About
  },
  {
    path: "/user",
    component: User
  },
  {
    path: "/user/:userid",
    component: UserDetail
  }
];
const router = new VueRouter({
  // 配置路由和组件之间的映射关系
  routes,
  // mode: "history",
  linkActiveClass: "linkedOn" // 配置被选中路由的样式
});

// 3. 将vue-router对象挂载到vue实例中
export default router;
