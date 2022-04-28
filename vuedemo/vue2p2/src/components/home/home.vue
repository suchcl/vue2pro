<template>
  <div class="home">
    <h2>首页</h2>
    <button @click="btnClick">确认</button>
  </div>
</template>

<script>
  export default {
    methods: {
      btnClick() {
        console.log("来了");
        this.$router.push({
          name: "ShoppingCar",
          params: {
            username: "Nicholas Zakas",
            id: 102,
            age: 18,
          },
        });
      },
      handleClick() {
        
      }
    },
  };
</script>