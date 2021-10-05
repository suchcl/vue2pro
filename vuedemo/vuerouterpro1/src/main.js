import Vue from "vue";
import App from "./App";
import router from "./router"; // 当目标是一个目录的时候，它会自动找该目录下的index文件，如果不是index，那么就需要跟上具体的文件名称
// import router from "./router/router";

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  render: h => h(App)
});
