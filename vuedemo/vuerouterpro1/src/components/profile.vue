<template>
  <div class="profile">
    <h2>姓名：{{ profile.username }}</h2>
    <p>年龄：{{ profile.age }}</p>
    <p v-if="profile.height">身高：{{ profile.height }}</p>
    <p v-if="profile.job">职业：{{ profile.job }}</p>
  </div>
</template>

<script>
import getUrlParams from "../utils/getUrlParams";
export default {
  name: "Profile",
  data() {
    return {
      profile: this.$route.query
    };
  },
  created() {
    let urlPa = getUrlParams(location.href);
    const { username, token } = urlPa;
    console.log(username);
    console.log("token222:", token);
  }
};
</script>
