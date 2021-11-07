// 导入Vue、Vuex
import Vue from "vue";
import Vuex from "vuex";
import {INCREMENT,UPDATEATHINFO,UPDATEATHDESCMUTATION,UPDATEBOOKNAME,ASYNCUPDATEBOOKNAME} from '@/store/mutation-types';

// 安装（管理、应用）Vuex
Vue.use(Vuex);

// 模块A moduleA
const moduleA = {
  state:{
    bookName: "Javascript数据结构与算法",
    price: 69.00,
    author: "罗伊安妮.格罗纳"
  },
  getters:{
    // state：当前module下的state
    bookBaseInfo(state){
      return `书名:${state.bookName}，作者：${state.author}`;
    },
    // getters：就是当前的getters，可以调用当前module中getters中的其他属性
    bookAllBaseInfo(state,getters){
      return `${getters.bookBaseInfo}，价格：${state.price}`;
    },
    // rootState,根state，可以通过rootState获取根state中的状态
    bookAllInfo(state,getters,rootState){
      return `${getters.bookAllBaseInfo}，数量为：${rootState.counter}`;
    }
  },
  mutations:{
    [UPDATEBOOKNAME](state){
      state.bookName = "Javascript权威指南";
    },
    [ASYNCUPDATEBOOKNAME](state,payload){
      console.log(state);
      state.bookName = payload;
    }
  },
  actions:{
    aAsyncUpDateBookNameByAction(context,payload){
      setTimeout(() => {
        context.commit(ASYNCUPDATEBOOKNAME,payload)
      },1000);
    }
  },
  modules:{}
};

// 模块B moduleB
const moduleB = {
  state:{},
  getters:{},
  mutations:{},
  actions:{},
  modules:{}
};

// 创建Vuex对象
/**
 * 注意不是new Vuex，而是new Vuex.Store,因为真正起作用的是Vuex的Store属性,Store本身也是一个类
 */
const store = new Vuex.Store({
  // Vuex就用这几个属性，固定的，不会变
  state: {
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
    book:{
      name: "Ajax高级程序设计",
      price: 129.99,
      author: "Nicholas C. Zakas"
    },
    userinfo:{
      name: "Jordan",
      height: 1.98,
      age: 23,
      sex: "male"
    }
  },
  mutations: {
    /**
     * 通过action修改state
     * @param {*} state 
     */
    [UPDATEATHDESCMUTATION](state){
      state.userinfo.height = 3.2;
    },

    // 修改运动员信息
    [UPDATEATHINFO](state){
      // state.userinfo.name = "Duncan";

      /**
       * 现在从这个地方(mutation中)执行一个异步操作
       * 这里的变化，页面上也响应式的变化了，但是devtools中，并没有跟着变化，没有捕捉到这个变化
       */
      setTimeout(() => {
        state.userinfo.name = "Nicholas Zakas";
      },1000)
    },
    // 书的信息修改
    bookInfoChange(state){
      // 简单的修改书名
      // state.book.name = "Javascript高级程序设计";

      // 移除价格属性  price属性会从book对象中移除掉，但是没有响应的显示到页面中
      // delete state.book.price

      // 通过Vue.delete删除book的price属性 删除后的数据，响应式的显示到了页面上
      Vue.delete(state.book,"price");
    },
    // increment称为事件类型，后面的部分称为回调函数，state是回调函数的第一个参数
    [INCREMENT] (state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    /**
     * 接收提交的mutation
     * 如果提交mutaition的时候，是按照type方式提交的，那么这里的第二个参数，则是一个对象，不仅仅是一个具体的变量了，参数名也可更改为payload
     * @param {*} state
     * @param {Object} count 
     */
    incrementCount(state, count) {
      console.log(count);
      state.counter += count.count;
    },
    addStudent(state, stu) {
      state.students.push(stu);
    },
  },
  actions: {
    /**
     * 修改运动员简介
     * context:上下文，在vuex中，就可以简单的理解为store对象
     * action中的方法，默认的第一个参数，不是state了，而是context
     */
    // updateAthDescAction(context,playload){
    //   setTimeout(() => {
    //     context.commit(UPDATEATHDESCMUTATION);
    //     playload(); // 组件中传递过来的函数，这里直接执行即可
    //   },1000);
    // }

    // 下面的实现和上面的实现，都是常规且可行的方案，还有一种通过Promsie的优雅的实现方案
    // updateAthDescAction(context,playload){
    //   setTimeout(() => {
    //     context.commit(UPDATEATHDESCMUTATION);
    //     console.log(playload.message); // 组件中传递过来的是对象，可以直接调用
    //     playload.success();
    //   },1000);
    // }

    // 通过Promise实现
    updateAthDescAction(context,payload){
      return new Promise((resolve) => {
        setTimeout(() => {
          context.commit(UPDATEATHDESCMUTATION);
          console.log(payload);
          resolve("action中的参数"); // resolve执行后，不再后面继续执行then，而是在组件派发action的地方去执行then
        },1000);
      });
    }
  },
  getters: {
    // 获取数的平方
    powerCounter(state) {
      return state.counter * state.counter;
    },
    // 获取20岁以上学生信息
    over20YearsOld(state) {
      return state.students.filter((item) => {
        return item.age >= 20;
      });
    },
    // 获取20岁以上学生的人数
    over20YearsOldNum(state, getters) {
      return getters.over20YearsOld.length;
    },

    /**
     * 获取大于自定义年龄的学生信息
     * 上面的案例都是直接返回一个具体的数值
     * 本需求不能直接返回一个具体的值，因为不知道具体的值是多少
     * 可以返回一个函数，在调用getters时去执行函数就可以了
     */
    overAgeYearsOldNum(state) {
      // 普通函数实现
      // return function(age) {
      //   return state.students.filter((item) => item.age >= age);
      // };
      // 也可以箭头函数实现
      return (age) => {
        return state.students.filter((item) => item.age >= age);
      };
    },
  },
  modules: {
    fbook:moduleA,
    order:moduleB
  },
});

// 导出store
export default store;
