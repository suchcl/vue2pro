// const {add, mul} = require("./mathUtil.js");
// console.log(add(20, 24));
// console.log(mul(10, 25));

import {add,mul} from "./mathUtil" // webpack环境下，模块文件的扩展名.js可以省略
console.log(add(10, 20));
console.log(mul(15, 20));