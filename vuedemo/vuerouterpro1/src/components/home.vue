<template>
  <div class="about">
    <h2>{{ info }}</h2>
    <div class="home-nav">
      <router-link to="/home/news">新闻中心</router-link>
      <router-link to="/home/msg">消息列表</router-link>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      info: "首页首页，我是首页"
    };
  }
};
</script>
