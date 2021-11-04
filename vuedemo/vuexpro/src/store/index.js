// 导入Vue、Vuex
import Vue from "vue";
import Vuex from "vuex";
import {INCREMENT} from '@/store/mutation-types';

// 安装（管理、应用）Vuex
Vue.use(Vuex);

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
    }
  },
  mutations: {
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
  actions: {},
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
  modules: {},
});

// 导出store
export default store;
