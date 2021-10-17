import Vue from "vue";
import App from "./App.vue";
import store from "./store/index";

Vue.config.productionTip = false;
Vue.prototype.$store = store;

new Vue({
  render: (h) => h(App),
  store,
}).$mount("#app");
