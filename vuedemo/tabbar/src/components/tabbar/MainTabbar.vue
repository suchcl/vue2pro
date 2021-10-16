<template>
  <tarbar>
    <tab-bar-item path="/home" activeColor="green">
      <img slot="item-icon" src="../../assets/images/tabbar/img1.png" alt="" />
      <img
        slot="item-icon-active"
        src="../../assets/images/tabbar/img1-active.png"
        alt=""
      />
      <span slot="item-text">首页</span>
    </tab-bar-item>
    <tab-bar-item path="/category" activeColor="#369">
      <img slot="item-icon" src="../../assets/images/tabbar/img2.png" alt="" />
      <img
        slot="item-icon-active"
        src="../../assets/images/tabbar/img2-active.png"
        alt=""
      />
      <span slot="item-text">分类</span>
    </tab-bar-item>
    <tab-bar-item path="/shopcar">
      <img slot="item-icon" src="../../assets/images/tabbar/img3.png" alt="" />
      <img
        slot="item-icon-active"
        src="../../assets/images/tabbar/img3-active.png"
        alt=""
      />
      <span slot="item-text">购物车</span>
    </tab-bar-item>
    <tab-bar-item path="/profile">
      <img slot="item-icon" src="../../assets/images/tabbar/img4.png" alt="" />
      <img
        slot="item-icon-active"
        src="../../assets/images/tabbar/img4-active.png"
        alt=""
      />
      <span slot="item-text">我的</span>
    </tab-bar-item>
  </tarbar>
</template>

<script>
import Tarbar from "./tabbar.vue";
import TabBarItem from "./TabBarItem.vue";
export default {
  components: {
    Tarbar,
    TabBarItem,
  },
};
</script>
