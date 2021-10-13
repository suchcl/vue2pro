<template>
  <div id="app">
    <!-- <ul class="nav">
      <li>
        <router-link to="/home" tag="button">首页</router-link>
      </li>
      <li>
        <router-link to="/about" replace tag="button">关于我们</router-link>
      </li>
    </ul>
    <div class="btn-link">
      <button @click="homeClick">首页</button>
      <button @click="aboutClick">关于我们</button>
    </div> -->
    <ul class="menu">
      <li>
        <router-link to="/home">首页</router-link>
      </li>
      <li>
        <router-link to="/about">关于我们</router-link>
      </li>
      <li>
        <router-link to="/user">用户列表</router-link>
      </li>
    </ul>
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      userId: 123
    };
  },
  methods: {
    homeClick() {
      this.$router.push("/home");
    },
    aboutClick() {
      this.$router.push("/about");
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.nav li {
  display: inline;
  margin: 0 10px;
}
.active {
  color: #f20;
}
.linkedOn {
  color: #f20;
}
</style>
