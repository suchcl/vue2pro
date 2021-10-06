<template>
  <div class="about">
    <h2>{{ info }}</h2>
    <div class="home-nav">
      <router-link to="/home/news">新闻中心</router-link>
      <router-link to="/home/msg">消息列表</router-link>
      <router-link
        :to="{
          path: '/profile',
          query: { username: 'Nicholas Zakas', age: 18, height: 182 }
        }"
        >个人中心</router-link
      >
      <!--按钮点击事件实现路由传参：query-->
      <button @click="profileClick">个人中心</button>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      info: "首页首页，我是首页",
      username: "XinYunhan",
      age: 28,
      job: "Teacher"
    };
  },
  methods: {
    // query传参方式
    profileClick() {
      this.$router.push({
        path: "/profile",
        query: {
          username: this.username,
          age: this.age,
          job: this.job
        }
      });
    }
  }
};
</script>
