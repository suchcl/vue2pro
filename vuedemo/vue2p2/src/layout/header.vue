<template>
  <div class="header">
    <ul class="nav">
      <li>
        <router-link to="/home">首页</router-link>
      </li>
      <li>
        <router-link to="/news">新闻列表</router-link>
      </li>
      <li>
        <router-link to="/user">个人中心</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style lang="less">
.nav {
  display: flex;
  color: #369;
  > li {
    margin: 0 10px;
    a {
      color: #f20;
    }
  }
}
</style>
