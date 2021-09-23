import { add } from "./js/a.js";

console.log(add(10, 20));

require("./css/nornal.css")
require("./less/normal.less")

// 配置vue进行vue的开发
import Vue from "vue";

// import App from "./vue/App"
import App from "./vue/App.vue"
// 把App单独抽离出去到app.js,然后通过import引入
// const App = {
//   template: `
//   <div class="userinfo">
//     <h2>{{ userName }}</h2>
//     <p>{{ age }}</p>
//     <p>{{ job }}</p>
//   </div>
//   `,
//   data() {
//     return {
//       userName: "Nicholas Zakas",
//       age: 26,
//       job: "Teacher"
//     }
//   },
//   methods: {
//     btnClick() {

//     }
//   }
// };

/**
 * 现在学习了很长时间的vue了，const app就可以省略了
 * 之前的demo中一直都是const app = new Vue();主要是为了在浏览器开发者工具中调试响应式效果，现在已经不需要了
 * 可以直接new Vue()了
 */
// const app = new Vue({
//         el: "#app",
//         data: {
//             msg: "Hello Webpack!"
//         }
//     }
// );

new Vue({
  el: "#app",
  template: `<App />`,
  components: {
    App
  }
});