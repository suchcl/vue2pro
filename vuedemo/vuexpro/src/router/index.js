import Vue from "vue";
import VueRouter from "vue-router";

// 组件导入
// const PageDataFresh = () => import("../components/fresh.vue");
import PageFresh from "../components/fresh.vue";

Vue.use(VueRouter);


const routes = [
    {
        path: "/fresh",
        component: PageFresh,
        meta:{
            title: "上拉加载，下拉刷新效果"
        }
    }
];

const router = new VueRouter({
    routes
});

export default router;