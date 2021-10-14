<template>
  <div id="app">
    <tabbar>
      <tab-bar-item>
        <img slot="item-icon" src="./assets/images/tabbar/img1.png" alt="" />
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item>
        <img slot="item-icon" src="./assets/images/tabbar/img2.png" alt="" />
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item>
        <img slot="item-icon" src="./assets/images/tabbar/img3.png" alt="" />
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item
        ><img slot="item-icon" src="./assets/images/tabbar/img4.png" alt="" />
        <div slot="item-text">我的</div></tab-bar-item
      >
    </tabbar>
  </div>
</template>

<script>
import Tabbar from "./components/tabbar/tabbar.vue";
import TabBarItem from "./components/tabbar/TabBarItem.vue";
export default {
  name: "App",
  components: {
    Tabbar,
    TabBarItem,
  },
};
</script>
