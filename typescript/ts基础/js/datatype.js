"use strict";
var num = [3, 4, 89];
var strArray = ["Hello world!"];
var languages = [false];
console.log('languages: ', languages);
// 表示定义一个字符串类型的数组，这种怪怪的方式，叫做泛型
var fruits = ["apple", "peach", "banana"];
var books = ["Javascript高级程序设计", 99.86, true];
// enum PayStatus {
//     unpaid = 0,
//     paid = 1,
//     success = 2
// }
// const pageStatus: PayStatus = PayStatus.paid;
// 下面的枚举定义不合法，枚举不允许使用数字类型的标识符
// enum PayStatus {
//     1 = 未支付,
//     2 = 已支付,
//     3 = 交易成功
// }
// const payStatus: PayStatus = PayStatus.已支付;
var PayStatus;
(function (PayStatus) {
    PayStatus[PayStatus["unpaid"] = 0] = "unpaid";
    PayStatus[PayStatus["paid"] = 2.3] = "paid";
    PayStatus[PayStatus["success"] = 3.3] = "success";
})(PayStatus || (PayStatus = {}));
;
var paySuccess = PayStatus.success;
console.log('paySuccess: ', paySuccess); // 3.3  前一个元素赋值了2.3，而当前元素没有赋值，就取值为前一个元素的值+1
var payUnpaid = PayStatus.unpaid;
console.log('payUnpaid: ', payUnpaid); // 0 索引仍从0开始
var HelloMsg;
(function (HelloMsg) {
    HelloMsg[HelloMsg["welcome"] = 0] = "welcome";
    HelloMsg["hello"] = "\u4F60\u597D";
    HelloMsg["wolrd"] = "hello world";
})(HelloMsg || (HelloMsg = {}));
var welcomeMsg = HelloMsg.welcome;
console.log('welcomeMsg: ', welcomeMsg); // 0
var helloMsg = HelloMsg.hello;
console.log('helloMsg: ', helloMsg); // 你好
var wordMsg = HelloMsg.wolrd;
console.log('wordMsg: ', wordMsg); // hello world
var arr2 = [1, 2, "hello"];
console.log('arr2: ', arr2); // [ 1, 2, 'hello' ]
var n;
n = (function () {
    throw new Error("Error");
})();
