// 导入Vue、Vuex
import Vue from "vue";
import Vuex from "vuex";
import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";
import moduleA from "./modules/moduleA";
import moduleB from './modules/moduleB'


// 安装（管理、应用）Vuex
Vue.use(Vuex);

const state = {
  counter: 2,
  students: [
    {
      id: 100,
      name: "Nicholas Zakas",
      age: 18,
    },
    {
      id: 101,
      name: "Kobe",
      age: 22,
    },
    {
      id: 102,
      name: "Carry",
      age: 28,
    },
    {
      id: 104,
      name: "Yaoming",
      age: 16,
    },
  ],
  book: {
    name: "Ajax高级程序设计",
    price: 129.99,
    author: "Nicholas C. Zakas"
  },
  userinfo: {
    name: "Jordan",
    height: 1.98,
    age: 23,
    sex: "male"
  }
}

// 创建Vuex对象
/**
 * 注意不是new Vuex，而是new Vuex.Store,因为真正起作用的是Vuex的Store属性,Store本身也是一个类
 */
const store = new Vuex.Store({
  // Vuex就用这几个属性，固定的，不会变
  state,
  mutations,
  actions,
  getters,
  modules: {
    fbook: moduleA,
    order: moduleB
  },
});

// 导出store
export default store;
