function Person(name, age) {
  this.name = name;
  this.age = age;
  this.play = function () {
    return this.name + " is playing!";
  };
}
Person.prototype.work = function () {
  return this.name + " is working!";
};

function Child(name, age) {
  Person.call(this, name, age); // 对象冒充的继承模式，子类可以向父类传参了
}
// Child.prototype = new Person();
Child.prototype = Person.prototype; // 子类的prototype指向父类的prototype，实现原型继承

var c = new Child("Nicholas Zakas", 18);
console.log(c.play()); // undefined is playing!
console.log(c.work()); // 可以继承父类的原型方法
