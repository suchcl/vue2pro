import Vue from "vue";
import VueRouter from "vue-router";

// 导入组件
const DataFresh = () => import("../components/DataFresh.vue");
const UserList = () => import("../pages/users/UserList.vue");
const Home = () => import("../pages/index.vue");
const NotFound = () => import("../components/NotFound.vue");

// 组件通信测试
const Cmp = () => import("../pages/cmpcom/cmp.vue");
const Pcmp = () => import("../pages/cmpcom/pcc/Parent.vue");

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        component: Home,
        meta: {
            title: "首页"
        }
    },
    {
        path: "/DataFresh",
        component: DataFresh,
        meta: {
            title: "上拉加载，下拉刷新案例"
        }
    },
    {
        path: "/UserList",
        component: UserList,
        meta:{
            title: "用户列表"
        }
    },
    {
        path: "/compo",
        component:Cmp,
        children:[
            {
                path: "cpcmp",
                component: Pcmp,
                meta: {
                    title: "父组件"
                }
            }
        ]
    },
    {
        path: "*",
        component: NotFound,
        meta: {
            title: "不存在，重新跳转一个吧"
        }
    }
];

const router = new VueRouter({
    routes,
    mode: "history"
});

router.beforeEach((to,from,next) => {
    if(to.meta.title){
        document.title = to.meta.title
    }
    next();
});

export default router;