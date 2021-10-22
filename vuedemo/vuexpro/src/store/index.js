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
  },
  mutations: {
    // increment称为事件类型，后面的部分称为回调函数，state是回调函数的第一个参数
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    incrementCount(state, count) {
      state.counter += count;
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
