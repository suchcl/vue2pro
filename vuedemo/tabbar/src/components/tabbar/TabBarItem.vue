<template>
  <div class="tab-bar-item" @click="itemClick">
    <div class="tab-item-icon" v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div class="tab-item-icon" v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <div
      class="tab-item-text"
      :class="{ active: isActive }"
      :style="activeTextStyle"
    >
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  data() {
    return {
      // isActive: false, // 判断当前路由是否处于活跃路由，这样的判断方式不可取，因为是写死的
    };
  },
  props: {
    path: String,
    activeColor: {
      type: String,
      default: "#f20",
    },
  },
  computed: {
    // 判断当前路由处于活跃状态
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1;
    },
    // 处理活跃状态的文字颜色
    activeTextStyle() {
      return this.isActive ? { color: this.activeColor } : {};
    },
  },
  methods: {
    itemClick() {
      this.$router.push(this.path);
    },
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
