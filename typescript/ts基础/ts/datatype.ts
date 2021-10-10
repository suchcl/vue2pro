let num: number[] = [3, 4, 89];


let strArray: string[] = ["Hello world!"];


const languages: string[] = ["false"];
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

// let n: never;
// n = (() => {
//     throw new Error("Error");
// })();

function sum(num1: number, num2: number): number {
    return num1 + num2;
}
console.log('sum(12, 10): ', sum(12, 10));


let add = function (num1: number, num2: number): number {
    return num1 + num2;
}

console.log('add(4,8): ', add(4, 8));

function getInfo(username: string, age: number): string {
    return `${username}今年${age}岁`;
}

console.log('getInfo("Nicholas",18): ', getInfo("Nicholas", 18));

function getUserInfo(username: string, age?: number) {
    if (age) {
        return `${username} 今年${age}岁了`;
    } else {
        return `${username} 的年龄保密，打听别人的年龄很不礼貌哦！`;
    }
}
console.log('getUserInfo("HuHansan",57): ', getUserInfo("HuHansan", 57)); // HuHansan 今年57岁了
console.log('getUserInfo("Dageda"): ', getUserInfo("Dageda")); // Dageda 的年龄保密，打听别人的年龄很不礼貌哦！

function getUserMsg(username: string, age: number = 23) {
    return `${username}今年${age}岁了`;
}
console.log('getUserMsg("Nicholas"): ', getUserMsg("Nicholas")); // Nicholas今年23岁了

function multiSum(num: number, ...result: number[]): number {
    let sum = num;
    for (let i = 0; i < result.length; i++) {
        sum += result[i];
    }
    return sum;
}
console.log('multiSum(2,3): ', multiSum(6, 2, 3)); // 11

// function getAuthorInfo(username: string): string;
// function getAuthorInfo(age: number): number;
// function getAuthorInfo(str: any): any {
//     if(typeof str === "string"){
//         console.log('str: ', "我的名字是：" + str);
//     }else{
//         console.log("作者今年" + str +"岁了");
//     }
// }

// getAuthorInfo("Nicholas"); // 我的名字是：Nicholas
// getAuthorInfo(18); // 作者今年18岁了

function getAuthorInfo(username: string): string;
function getAuthorInfo(username: string, age: number): string;
function getAuthorInfo(username: any, age?: any): any {
    if (age) {
        console.log(`作者${username}今年${age}岁了`);
    } else {
        console.log(`作者是${username},年龄保密哦，不允许随意打听别人的年龄！`);
    }
}

getAuthorInfo("Nicholas"); // 作者是Nicholas,年龄保密哦，不允许随意打听别人的年龄！
getAuthorInfo("Nicholas", 26); // 作者Nicholas今年26岁了