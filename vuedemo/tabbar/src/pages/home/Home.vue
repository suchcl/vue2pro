<template>
  <div class="home">
    <h2>Home</h2>
    <h3>delete和Vue.delete删除数组的区别</h3>
    <div class="array-a">
      <ul>
        <li v-for="(item, index) in a" :key="index">{{ item }}</li>
      </ul>
      <button @click="deleteArrayA">delete删除数组</button>
    </div>
    <div class="array-b">
      <ul>
        <li v-for="(item, index) in b" :key="index">{{ item }}</li>
      </ul>
      <button @click="deleteArrayB">Vue.delete删除数组</button>
    </div>
  </div>
</template>
<script>
export default {
  name: "VueDelete",
  data() {
    return {
      a: [1, 2, 3, 4],
      b: [5, 6, 7, 8],
    };
  },
  methods: {
    deleteArrayA() {
      delete this.a[1];
      this.$set(this.a);
      console.log(this.a);
    },
    deleteArrayB() {
      this.$delete(this.b, 1);
      console.log(this.b);
    },
  },
};
</script>
