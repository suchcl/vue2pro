let num: number[] = [3, 4, 89];


let strArray: string[] = ["Hello world!"];


const languages: string[] = [false];
console.log('languages: ', languages);



// 表示定义一个字符串类型的数组，这种怪怪的方式，叫做泛型
let fruits: Array<string> = ["apple", "peach", "banana"];


let books: [string, number, boolean] = ["Javascript高级程序设计", 99.86, true];


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

enum PayStatus {
    unpaid, paid = 2.3, success
};

const paySuccess: PayStatus = PayStatus.success;
console.log('paySuccess: ', paySuccess);  // 3.3  前一个元素赋值了2.3，而当前元素没有赋值，就取值为前一个元素的值+1
const payUnpaid: PayStatus = PayStatus.unpaid;
console.log('payUnpaid: ', payUnpaid); // 0 索引仍从0开始

enum HelloMsg {
    welcome,
    hello = "你好",
    wolrd = "hello world"
}

const welcomeMsg: HelloMsg = HelloMsg.welcome;
console.log('welcomeMsg: ', welcomeMsg);  // 0
const helloMsg: HelloMsg = HelloMsg.hello;
console.log('helloMsg: ', helloMsg); // 你好
const wordMsg: HelloMsg = HelloMsg.wolrd;
console.log('wordMsg: ', wordMsg); // hello world

let arr2: any = [1, 2, "hello"];
console.log('arr2: ', arr2); // [ 1, 2, 'hello' ]

let n: never;
n = (() => {
    throw new Error("Error");
})();