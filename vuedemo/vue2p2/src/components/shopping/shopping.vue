<template>
  <div class="shopping">
    <h2>购物车</h2>
    <ul>
      <li>编号：{{ userinfo.id }}</li>
      <li>姓名：{{ userinfo.username }}</li>
      <li>年龄：{{ userinfo.age }}</li>
    </ul>
    <button @click="getUserInfo">获取信息</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userinfo: this.$route.params,
    };
  },
  mounted() {
    if (!localStorage.getItem("userinfo")) {
      this.saveUserInfo();
    }
  },
  methods: {
    saveUserInfo() {
      localStorage.setItem("userinfo", JSON.stringify(this.userinfo));
    },
    getUserInfo() {
      //   console.log(localStorage.getItem("userinfo"));
    },
  },
};
</script>
