<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul class="list">
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ul>
    <div class="num">
      <h3>数字列表</h3>
      <ul class="num-list">
        <li v-for="(item, index) in num" :key="index">{{ item }}</li>
      </ul>
    </div>
    <button @click="changeOrder">调整顺序</button>
    <button @click="getVersion">获取版本号</button>
    <button @click="setVresion">设置版本号</button>
  </div>
</template>

<script>
/**
 * requie:导入的是一个值的引用，使用导入后的值和原来数据已经没有什么关系了
 * import:导入的是对原数据的引用，导入后的数据修改了，原数据也会跟着修改
 */
// const version = import('../../package.json');
import Version from "../../package.json";
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      vn: {
        tag: "ul",
        children: [
          { tag: "li", children: [{ vnode: { text: 1 } }] },
          { tag: "li", children: [{ vnode: { text: 2 } }] },
          { tag: "li", children: [{ vnode: { text: 3 } }] }
        ]
      },
      num: [1, 2, 3]
    };
  },
  methods: {
    getVersion() {
      console.log(Version.version);
    },
    setVresion() {
      Version.version = "1.1.2";
    },
    changeOrder() {
      console.log("调整顺序");
      this.num.reverse();
    }
  }
};
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.num {
  background-color: #42b983;
  padding: 20px;
  margin-bottom: 20px;
}
</style>
