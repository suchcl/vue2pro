<template>
  <div id="app">
    <router-view />
    <main-tabbar></main-tabbar>
  </div>
</template>

<script>
import MainTabbar from "./components/tabbar/MainTabbar.vue";
export default {
  name: "App",
  components: {
    MainTabbar,
  },
};
</script>
