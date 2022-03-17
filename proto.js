
'use strict';

let Person = function (name) {
    this.initPerson(name);
}

// can be used after Object.create()
Person.prototype.initPerson = function (name) {
    this.myName = name;
}

Person.prototype.getName = function () {
    return  this.myName;
}
Person.prototype.greet = function () {
   console.log(`hello, my name is ${this.getName()}!`);
}

let dave = new Person("dave");
dave.greet();

let jon = new Person("jon");
jon.greet();

Person.prototype.farewell = function () {
   console.log(`Goodbye from ${this.getName()}!`);
}

dave.farewell();

jon.farewell();

dave.getName = function () {
    return this.myName.toUpperCase();
}

dave.init = function (name, age) {
    this.initPerson(name);
    this.age = age;
}

dave.farewell();

jon.farewell();

let youngDave = Object.create(dave);

youngDave.init("youngDave", 64);

youngDave.farewell();

let youngJon = Object.create(Person.prototype);
youngJon.initPerson("youngJon");

youngJon.farewell();
