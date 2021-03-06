"use strict";
var num = [3, 4, 89];
var strArray = ["Hello world!"];
var languages = ["false"];
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
// let n: never;
// n = (() => {
//     throw new Error("Error");
// })();
function sum(num1, num2) {
    return num1 + num2;
}
console.log('sum(12, 10): ', sum(12, 10));
var add = function (num1, num2) {
    return num1 + num2;
};
console.log('add(4,8): ', add(4, 8));
function getInfo(username, age) {
    return username + "\u4ECA\u5E74" + age + "\u5C81";
}
console.log('getInfo("Nicholas",18): ', getInfo("Nicholas", 18));
function getUserInfo(username, age) {
    if (age) {
        return username + " \u4ECA\u5E74" + age + "\u5C81\u4E86";
    }
    else {
        return username + " \u7684\u5E74\u9F84\u4FDD\u5BC6\uFF0C\u6253\u542C\u522B\u4EBA\u7684\u5E74\u9F84\u5F88\u4E0D\u793C\u8C8C\u54E6\uFF01";
    }
}
console.log('getUserInfo("HuHansan",57): ', getUserInfo("HuHansan", 57)); // HuHansan 今年57岁了
console.log('getUserInfo("Dageda"): ', getUserInfo("Dageda")); // Dageda 的年龄保密，打听别人的年龄很不礼貌哦！
function getUserMsg(username, age) {
    if (age === void 0) { age = 23; }
    return username + "\u4ECA\u5E74" + age + "\u5C81\u4E86";
}
console.log('getUserMsg("Nicholas"): ', getUserMsg("Nicholas")); // Nicholas今年23岁了
function multiSum(num) {
    var result = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        result[_i - 1] = arguments[_i];
    }
    var sum = num;
    for (var i = 0; i < result.length; i++) {
        sum += result[i];
    }
    return sum;
}
console.log('multiSum(2,3): ', multiSum(6, 2, 3)); // 11
function getAuthorInfo(username, age) {
    if (age) {
        console.log("\u4F5C\u8005" + username + "\u4ECA\u5E74" + age + "\u5C81\u4E86");
    }
    else {
        console.log("\u4F5C\u8005\u662F" + username + ",\u5E74\u9F84\u4FDD\u5BC6\u54E6\uFF0C\u4E0D\u5141\u8BB8\u968F\u610F\u6253\u542C\u522B\u4EBA\u7684\u5E74\u9F84\uFF01");
    }
}
getAuthorInfo("Nicholas"); // 作者是Nicholas,年龄保密哦，不允许随意打听别人的年龄！
getAuthorInfo("Nicholas", 26); // 作者Nicholas今年26岁了
