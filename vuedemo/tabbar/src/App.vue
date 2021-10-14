<template>
  <div id="app">
    <tabbar>
      <tab-bar-item>
        <img slot="item-icon" src="./assets/images/tabbar/img1.png" alt="" />
        <img
          slot="item-icon-active"
          src="./assets/images/tabbar/img1-active.png"
          alt=""
        />
        <span slot="item-text">首页</span>
      </tab-bar-item>
      <tab-bar-item>
        <img slot="item-icon" src="./assets/images/tabbar/img2.png" alt="" />
        <img
          slot="item-icon-active"
          src="./assets/images/tabbar/img2-active.png"
          alt=""
        />
        <span slot="item-text">分类</span>
      </tab-bar-item>
      <tab-bar-item>
        <img slot="item-icon" src="./assets/images/tabbar/img3.png" alt="" />
        <img
          slot="item-icon-active"
          src="./assets/images/tabbar/img3-active.png"
          alt=""
        />
        <span slot="item-text">购物车</span>
      </tab-bar-item>
      <tab-bar-item
        ><img slot="item-icon" src="./assets/images/tabbar/img4.png" alt="" />
        ><img
          slot="item-icon-active"
          src="./assets/images/tabbar/img4-active.png"
          alt=""
        />
        <span slot="item-text">我的</span>
      </tab-bar-item>
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
