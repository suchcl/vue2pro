<template>
  <div class="profile">
    <h2>姓名：{{ profile.username }}</h2>
    <p>年龄：{{ profile.age }}</p>
    <p v-if="profile.height">身高：{{ profile.height }}</p>
    <p v-if="profile.job">职业：{{ profile.job }}</p>
  </div>
</template>

<script>
export default {
  name: "Profile",
  data() {
    return {
      profile: this.$route.query
    };
  }
};
</script>
