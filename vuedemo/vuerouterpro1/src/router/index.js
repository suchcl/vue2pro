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
    component: Home,
    // redirect: "/home", // 配置一个默认路由，当进入项目时，重定向到一个指定的组件、路由
    meta: {
      title: "首页"
    }
  },
  {
    path: "/home",
    component: Home,
    children: [
      // {
      //   path: "",
      //   redirect: "news"
      // },
      {
        path: "news",
        component: HomeNews,
        beforeEnter: (to, from, next) => {
          next();
        },
        meta: {
          title: "新闻中心"
        }
      },
      {
        path: "msg",
        component: HomeMessage,
        meta: {
          title: "消息列表"
        }
      }
    ]
  },
  {
    path: "/about",
    component: About,
    meta: {
      title: "关于我们"
    }
  },
  {
    path: "/user",
    // component: User,
    component: () => import("../components/user.vue"),
    meta: {
      title: "用户列表"
    }
  },
  {
    path: "/user/:userid",
    component: UserDetail,
    meta: {
      title: "用户详情"
    }
  },
  {
    path: "/profile",
    component: Profile,
    meta: {
      title: "用户档案"
    }
  }
];
const router = new VueRouter({
  // 配置路由和组件之间的映射关系
  routes,
  mode: "history",
  linkActiveClass: "linkedOn" // 配置被选中路由的样式
});

// 前置钩子（hook、guard）
router.beforeEach((to, from, next) => {
  document.title = to.meta.title; // 有时在有路由嵌套时，会取不到to.meta.title,这个时候可以这样取：to.matched[0].meta.title
  next();
});

router.afterEach((to, from) => {});

// 3. 将vue-router对象挂载到vue实例中
export default router;
