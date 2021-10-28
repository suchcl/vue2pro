/**
 *JS对象相关
 */

// 使用Object构造函数创建对象
// let Person = new Object();
// Person.name = "Nicholas Zakas";
// Person.age = 21;
// Person["job"] = "Teacher";
// console.log(Person.name); // Nicholas Zakas
// console.log(Person.constructor); // f Object() 构造函数
// console.log(Person["job"]); // 通过中括号语法读取属性

// // 对象字面量方式创建对象
// let p = {
//     name: "Nicholas Zakas",
//     age: 18
// };
// console.log(p.constructor); // f Objct()  使用对象字面量创建对象，并不会实际调用Object的构造函数，那么为什么constructor指向了Object的构造函数
// console.log(p.name); // Nicholas Zakas

// // 工厂模式创建对象
// function createPerson(name, age, job) {
//     let obj = new Object();
//     obj.name = name;
//     obj.age = age;
//     obj.job = job;
//     obj.getName = function () {
//         return this.name;
//     }
//     return obj;
// }

// let p1 = createPerson("Nicholas Zakas", 26, "Teacher");
// console.log(p1.getName); // Nicholas Zakas
// console.log(p1.constructor); // f Object

// 构造函数模式
// function Person(name, age) {
//     this.name = name;
//     this.age = age;
//     this.getName = function () {
//         return this.name;
//     }
// }

// let p = new Person("Nicholas Zakas", 17);
// console.log(p.getName());
// console.log(p.__proto__);

// let biped = {
//     numLegs: 2,
//     job: "Programmer",
//     age: 18
// };
// let person = {
//     name: "Matt",
//     job: "Teacher",
//     age: 20
// };
// console.log(person.job);
// console.log(Object.getPrototypeOf(person));
// Object.setPrototypeOf(person, biped);
// console.log(Object.getPrototypeOf(person));
// console.log(person.job);
// console.log(person.age);


// // 原型模式
// function Person() {

// }
// Person.prototype.name = "Nicholas Zakas";
// Person.prototype.age = 21;
// Person.prototype.getName = function () {
//     console.log(this.name);
// }
// let p = new Person();
// p.getName();

// 全局作用域
// 定义在了函数外面，是一个全局变量，具有全局的作用域
// var username = "Hanmeimei";
// function getUserName() {
//     return username;
// }
// console.log(getUserName());

// // 函数作用域
// function fn() {
//     var a = "12";
// }
// console.log(a); // Uncaught ReferenceError: a is not defined,a是在函数fn内部的，函数外部不可以调用

// 嵌套作用域，内部可以访问外部作用域中的变量
// function fn() {
//     var a = 1;
//     function inner() {
//         var b = 2;
//         // 内部作用域访问到了外部作用域中的变量a
//         console.log(a);
//     }
//     inner();
//     console.log(b); // object.js:104 Uncaught ReferenceError: b is not defined  虽然这是一个嵌套作用域，但是b是封装在函数内部的变量
// }
// fn();

function fn() {
    var a = 1;
    if (true) {
        console.log(b);
        let b = 2; // Uncaught ReferenceError: Cannot access 'b' before initialization  变量b是通过let声明的，那么这个变量就直接绑定到这个区域，不再受外部的影响；如果b是通过var声明的，则会打印undefiend
    }
}
fn();