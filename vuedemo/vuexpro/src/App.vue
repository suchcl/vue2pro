<template>
  <div id="app">
    <h2>-------App组件-------</h2>
    <h2>{{ msg }}</h2>
    <h3>{{ $store.state.counter }}</h3>
    <button @click="addition">+</button>
    <button @click="subtraction">-</button>
    <h2>---------App组件 Getters----------</h2>
    <p class="text">{{ $store.getters.powerCounter }}</p>
    <h2>------年龄大于20岁的学生-----</h2>
    <div class="stu-info">
      <h3>通过计算属性获取</h3>
      <table>
        <tr>
          <th>学号</th>
          <th>姓名</th>
          <th>年龄</th>
        </tr>
        <tr v-for="item in over20YearsOld" :key="item.id">
          <td>{{ item.id }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.age }}</td>
        </tr>
      </table>
      <h3>通过vuex获取</h3>
      <table>
        <tr>
          <th>学号</th>
          <th>姓名</th>
          <th>年龄</th>
        </tr>
        <tr v-for="item in $store.getters.over20YearsOld" :key="item.id">
          <td>{{ item.id }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.age }}</td>
        </tr>
      </table>
      <p>大于20岁的学生总数：{{ $store.getters.over20YearsOldNum }}</p>
      <h3>大于自定义年龄的学生信息:以17岁为例</h3>
      <table>
        <tr>
          <th>学号</th>
          <th>姓名</th>
          <th>年龄</th>
        </tr>
        <!--overAgeYearsOldNum是一个getters，它返回了一个函数，让函数在执行时传入一个自定义参数-->
        <tr v-for="item in $store.getters.overAgeYearsOldNum(17)" :key="item.id">
          <td>{{ item.id }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.age }}</td>
        </tr>
      </table>
    </div>
    <h2>------子组件---------</h2>
    <user-center :username="username" />
  </div>
</template>

<script>
import UserCenter from "./components/UserCenter.vue";
export default {
  name: "App",
  components: {
    UserCenter,
  },
  data() {
    return {
      msg: "我是App组件",
      username: "Nicholas Zakas",
    };
  },
  computed: {
    over20YearsOld() {
      // 通过数组的filter过滤器筛选
      return this.$store.state.students.filter(item => {
        return item.age >= 20;
      });
    }
  },
  methods: {
    addition() {
      this.$store.commit("increment");
    },
    subtraction() {
      this.$store.commit("decrement");
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h3,
.text {
  font-size: 32px;
}
</style>
