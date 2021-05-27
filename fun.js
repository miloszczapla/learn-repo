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
