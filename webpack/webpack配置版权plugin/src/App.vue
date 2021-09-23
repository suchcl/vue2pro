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
      age: 26,
      height: 2.36
    }
  }
}
</script>

<style scoped>

</style>