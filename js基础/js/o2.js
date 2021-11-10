// var tt = "LiSongfeng";

// function add(a,b){
//     return a+b;
// }

// console.log(typeof add); // function

// const obj = {};

// Object.defineProperty(obj,"info",{
//     name:"Nicholas Zakas",
//     age: 18,
//     height: 1.98
// });

// console.log(obj);

// let double = value => value * 2;
// console.log(double(3)); // 6

// 高阶函数
// const forEach = function (arr, fn) {
//     for (let i = 0; i < arr.length; i++) {
//         fn(arr[i]);
//     }
// }

// let arr = [1, 2, 3];
// forEach(arr, (item) => {
//     console.log(item);
// });

// const once = (fn) => {
//     let done = false;
//     return function () {
//         if (!done) {
//             fn.apply(this, fn);
//         } else {
//             console.log("函数已经执行");
//         }
//         done = true;
//     }
// }

// // 柯里化  二元柯里化
// let fn = (x, y) => x + y;
// const curry = function (fn) {
//     return function (x) {
//         return function (y) {
//             return fn(x, y);
//         }
//     }
// }
// let myfn = curry(fn);
// console.log(myfn(1)(2));

// 多元柯里化
// const mulCurry = function (fn) {
//     return function curriedFn(...args) {
//         if (args.length < fn.length) {
//             return function () {
//                 return curriedFn(...args.concat([...arguments]));
//             }
//         }
//         return fn(...args)
//     }
// }

// const fn = (x, y, z, a) => x + y + z + a;
// const myfn = mulCurry(fn);
// console.log(myfn(1)(2)(3)(4));

// 组合函数
function afn(a) {
    return a * 2;
}

function bfn(b) {
    return b * 3;
}

const compose = (a, b) => c => a(b(c));

let myfn = compose(afn, bfn);
console.log(myfn(4)); // 24