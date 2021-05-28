"use strict";
function Log() {
    console.log('It is fun!');
}
const expressedFunction = function () {
    console.log('expressing...');
};
Log();
expressedFunction();
const welcomFun = function (name = 'miłosz', timeOfDay = 'midnight') {
    console.log(`Hello ${name} it must be wonderful ${timeOfDay}.`);
};
welcomFun();
welcomFun(undefined, 'night');
const calcArea = function (radius = 0) {
    const area = pi * radius ** 2;
    return area;
};
const calccircuit = function (radius) {
    const circuit = radius * pi * 2;
    return circuit;
};
let r = 10;
console.log(`the radius is: ${r}, then the circuit is: ${calccircuit(r).toPrecision(3)}, and the area is: ${calcArea(r).toPrecision(3)}`);
const calcSqtArea = (side) => {
    const area = side ** 2;
    return area;
};
const calcSqtcircuit = (side) => side * 4;
const hello = () => console.log('hello world');
hello();
const area = calcSqtArea(5);
console.log('Sqt area = ' + area);
console.log('Sqt circuit = ' + calcSqtcircuit(4));
const myFunc = (callBackFun) => callBackFun ** 2;
console.log(myFunc(() => 23));
console.log('------ Objects -------');
;
let user = {
    name: 'Adam',
    age: 32,
    eamil: 'adam@mail.com',
    city: null,
    score: null,
    married: false,
    introduceYourSelf: function () {
        console.log(`Your name is ${this.name} and you are ${this.age}, living in ${this.city} writing mails from ${this.eamil}. You are married ${this.married} and have life score of ${this.score}`);
    }
};
const listInfo = (user) => {
    console.log(`Your name is ${user.name} and you are ${user.age}, living in ${user.city} writing mails from ${user.eamil}. You are married ${user.married} and have life score of ${user.score}`);
};
user.introduceYourSelf();
let number = 10.3;
console.log(Math.round(number));
let random = Math.random();
console.log(random);
console.log(Math.round(random * 100));
