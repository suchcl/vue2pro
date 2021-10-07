function add(a, b) {
    return a + b;
}
// console.log(add(10, 3));

var flag = true;
if (flag) {
    setTimeout(() => {
        console.log(add("hello", false)); // hellofalse
    }, 1000);
}

const util = {
    aaa: () => {
        console.log("util function");
    }
};

function sum(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
        throw new TypeError("类型异常");
    }

    return a + b;
}

function square(n: number) {
    return n * n;
}
square(10);