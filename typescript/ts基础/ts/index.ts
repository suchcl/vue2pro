// let oBox: any = document.getElementById("box");
// oBox.style.color = "#f60"


// ts中，可以为变量声明为多种类型，那么在给变量赋值时，就可以是声明的这几种变量中的任意一种类型
let nums: string | number;

nums = "Nicholas"; // string类型
console.log('nums: ', nums); // Nicholas

nums = 16; // number类型
console.log('nums: ', nums); // 16

let a: string | undefined;
console.log('a: ', a); // undefined


function run(): void {
    console.log("running");
}

run(); // running