// 导入Vue、Vuex
import Vue from "vue";
import Vuex from "vuex";

// 安装（管理、应用）Vuex
Vue.use(Vuex);

// 创建Vuex对象
/**
 * 注意不是new Vuex，而是new Vuex.Store,因为真正起作用的是Vuex的Store属性,Store本身也是一个类
 */
const store = new Vuex.Store({
  // Vuex就用这几个属性，固定的，不会变
  state: {},
  mutations: {},
  actions: {},
  getters: {},
  modules: {},
});

// 导出store
export default store;
