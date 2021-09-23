import {add} from "./js/a.js";

console.log(add(10, 20));

require("./css/nornal.css")
require("./less/normal.less")

// 配置vue进行vue的开发
import Vue from "vue";

const app = new Vue({
        el: "#app",
        data: {
            msg: "Hello Vue!"
        }
    }
);