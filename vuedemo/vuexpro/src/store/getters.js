export default {
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
  }