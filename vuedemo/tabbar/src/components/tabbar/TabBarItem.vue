<template>
  <div class="tab-bar-item">
    <slot name="item-icon"></slot>
    <slot name="item-text"></slot>
  </div>
</template>

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
}
</style>
