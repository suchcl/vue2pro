import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  //h，实际上是一个函数createElement，但是这里为什么是名字h，不清楚，也可以用下面的方式
  render: h => h(App)
  // render:function(createElement){
  //   // createElement，可以设置3个参数，标签名、属性列表（对象,简单测试了下，只能有1个属性）、内容（数组）
  //   return createElement("h2",{"class":"box"},["Nicholas Zakas","HuMeimei"]);
  // }
})
