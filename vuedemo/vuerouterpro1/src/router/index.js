// import Vue from 'vue'
// import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

// Vue.use(Router)

// export default new Router({
//   routes: [
//     {
//       path: '/',
//       name: 'HelloWorld',
//       component: HelloWorld
//     }
//   ]
// })

// 使用了路由懒加载效果的路由配置
// 配置路由
import Vue from "vue";
import VueRouter from "vue-router";

// 导入组件
// import Home from "../components/home.vue";
// 早期结合Vue的异步组件和webpac的，实现路由懒加载的方式
const Home = resolve => {
  require.ensure(["../components/home.vue"], () => {
    resolve(require("../components/home.vue"));
  });
};
const HomeNews = () => import("../components/HomeNews");
const HomeMessage = () => import("../components/HomeMessage");
// // import About from "../components/about.vue";
// // 使用AMD模块化方法，实现路由懒加载的方式
const About = resolve => require(["../components/about.vue"], resolve);
// // import User from "../components/user.vue";
// // 结合ES6标准语法，使用的最简单的方式实现路由懒加载的Vue异步组件和webpack的代码切割
const User = () => import("../components/user.vue");
// // import UserDetail from "../components/userDetail.vue"
const UserDetail = () => import("../components/userDetail");
const Profile = () => import("../components/profile");

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
    // component: Home
    redirect: "/home" // 配置一个默认路由，当进入项目时，重定向到一个指定的组件、路由
  },
  {
    path: "/home",
    component: Home,
    children: [
      {
        path: "",
        redirect: "news"
      },
      {
        path: "news",
        component: HomeNews
      },
      {
        path: "msg",
        component: HomeMessage
      }
    ]
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
  },
  {
    path: "/profile",
    component: Profile
  }
];
const router = new VueRouter({
  // 配置路由和组件之间的映射关系
  routes,
  mode: "history",
  linkActiveClass: "linkedOn" // 配置被选中路由的样式
});

// 3. 将vue-router对象挂载到vue实例中
export default router;
