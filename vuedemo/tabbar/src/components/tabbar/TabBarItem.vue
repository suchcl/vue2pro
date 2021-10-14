<template>
  <div class="tab-bar-item">
    <div class="tab-item-icon" v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div class="tab-item-icon" v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <div class="tab-item-text" :class="{ active: isActive }">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  data() {
    return {
      isActive: false,
    };
  },
};
</script>
<style lang="less">
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  img {
    width: 24px;
    height: 24px;
  }
  .text {
    font-size: 12px;
  }
  .active {
    color: #f20;
  }
}
</style>
