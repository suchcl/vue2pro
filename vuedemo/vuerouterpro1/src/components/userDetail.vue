<template>
  <div class="user-detail">
    <h2>用户详情</h2>
    <h3>姓名：{{ userid }}</h3>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userid: this.$route.params.userid
    };
  }
};
</script>
