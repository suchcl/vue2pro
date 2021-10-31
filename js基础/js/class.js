// class Person {

// }
// console.log(Animal);
// const Animal = class {

// }

// /**
//  * 大红书写到：可以在类上定义静态方法，且每个类中最多只能有1个静态成员
//  * 案例中，定义了多个静态方法，以及多个静态属性
//  * 代码运行正常
//  * 大红书中的结论好像有问题，待求证
//  */
// class Person {
//     static getName() {
//         console.log("这是静态方法");
//     }
//     static getNum() {
//         console.log("类中的第二个静态方法");
//     }
//     static a = "12";
//     static b = 13;
// }

// Person.getName(); // 这是静态方法
// console.log(Person.a); // 12
// Person.getNum(); // 类中的第二个静态方法
// console.log(Person.b); // 13

// // 类的继承
// class Vehicle {
//     constructor(name) {
//         this.name = name;
//     }
//     // 类中也可以定义属性，但是定时属性时不要使用var、let、const
//     num = 1332;
//     run() {
//         console.log("running");
//     }
//     getName() {
//         return this.name;
//     }
// }
// console.log(Vehicle.num);

// // 继承类,继承了一个class
// class Bus extends Vehicle {

// }

// let b = new Bus("依维柯");
// b.run(); // running
// console.log(b.num);
// console.log(b.getName());

// // 普通的函数构造函数基类
// function Person() {
//     this.play = function () {
//         console.log("playing football");
//     }
// }

// // 继承一个普通构造函数的派生类
// class Teacher extends Person {

// }
// let t = new Teacher();
// t.play(); // playing football

// let Animal = {
//     num: 12,
//     eat() {
//         console.log("having food");
//     }
// };

// class Monkey extends Animal { // 会报异常  字面量对象没有[[construct]]和原型对象

// }
// let m = new Monkey();
// m.eat();

// if (undefined == null) {
//     console.log("一样了");
// } else {
//     console.log("不一样");
// }


// var a = undefined;
// var b = null;
// console.log(a == b);

// var a;
// console.log(typeof a);
// console.log(typeof b);

// let car = null;
// let obj = {
//     name: "Nicholas Zakas"
// };
// car = obj;
// if (car != null) {
//     console.log("car有新的对象了");
// } else {
//     console.log("car还是一个null，空对象指针");
// }

// console.log(undefined === null);

let a = {
    name: "less",
    age: 18
};

let b = a;
console.log(a.name); // less
b.name = "Sun";
console.log(a.name); // Sun
console.log(b.name); // Sun