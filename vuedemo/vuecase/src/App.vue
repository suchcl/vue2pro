<template>
  <div id="app">
    <Header />
    <router-view />
    <button @click="showMsg">我是根节点</button>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
export default {
  name: 'App',
  data() {
    return {
      rootmsg: "我是根组件"
    }
  },
  components: {
    Header
  },
  methods: {
    showMsg() {
      console.log("根组件中的方法被执行了");
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
