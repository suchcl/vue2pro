<script setup>
import { ref } from 'vue'

defineProps({
  msg: String
})

const count = ref(0)
</script>

<template>
<div class="hello">
  <h1>{{ msg }}</h1>

  <p>
    Recommended IDE setup:
    <a href="https://code.visualstudio.com/" target="_blank">VSCode</a>
    +
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
  </p>

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">
      Vite Documentation
    </a>
    |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Documentation</a>
  </p>

  <button type="button" @click="count++">count is: {{ count }}</button>
  <p class="txt">
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement  撒大方.
  </p>
  <p>自定义添加的文字</p>
  <p>又添加了一行</p>
  <p>刚才为什么没有出来呢?为什么没有HMR呢?</p>
</div>
</template>

<style scoped>
a {
  color: #42b983;
}
.txt {
  color: #f20;
  font-size: 28px;
}
</style>
