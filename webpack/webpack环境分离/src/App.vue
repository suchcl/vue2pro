<template>
  <div class="user-center">
    <h2>{{username}}</h2>
    <p>{{age}}</p>
    <p>{{height}}</p>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      username: "Nicholas Zakas",
      age: 18,
      height: 1.88
    }
  }
}
</script>

<style scoped>

</style>