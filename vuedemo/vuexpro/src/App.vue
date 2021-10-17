<template>
  <div id="app">
    <h2>{{ msg }}</h2>
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
</style>
