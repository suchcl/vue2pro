var mA = require("./a");

console.log(mA.flag); // true
console.log(mA.sum(3, 4)); // 7

var { flag, sum } = require("./a");
console.log(flag); // true
console.log(sum(2, 3)); // 5
