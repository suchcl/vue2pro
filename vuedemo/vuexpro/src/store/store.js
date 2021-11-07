import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
const ModuleA = {
    state:{},
    mutations:{},
    actions:{},
    getters:{}
};

const ModuleB = {
    state:{},
    mutations:{},
    actions:{},
    getters:{}
};

const store = new Vuex.Store({
    modules:{
        a: ModuleA,
        b: ModuleB
    }
});

export default store;

// 应用
store.state.a // 模块ModuleA中的状态
store.state.b // 模块ModuleB中的状态