"use strict";
console.log('"hello " worls');
let fullName, firstName, lastName, mail;
mail = "hello@happy.mail.com";
firstName = "Leaon";
lastName = "Geopard";
fullName = firstName + " " + lastName;
console.log(fullName);
console.log("pozycja 3 ", fullName[2]);
console.log(fullName.length);
console.log(fullName.toUpperCase());
console.log(fullName[0].toLowerCase());
let lowerCasedName = fullName.toLowerCase();
console.log(lowerCasedName);
let index = mail.indexOf(".");
console.log(index);
let addres = "Wroclaw, Wielka 54/41";
index = addres.lastIndexOf("a");
console.log(`Last index of "a": ${index}`);
let result = addres.slice(3, 5);
console.log(`sliced addres ${result}`);
result = addres.substr(-5, 5);
console.log(`substring:   ${result}`);
result = addres.replace("a", "/");
console.log(`result: ${result}`);
console.log("------ Numbers --------");
const pi = 3.14;
let resultNum;
let radius = 10;
resultNum = 10 / 2;
resultNum = radius / pi;
resultNum = 5 ** 10;
resultNum = pi % 3;
resultNum += radius;
result += resultNum;
result = `name have: ${resultNum} letters`;
console.log('----- Arrays ------');
let cities = ['Wroclaw', 'Berlin', 'Pekin'];
let streets = ['Brochow', 'Victory'];
let population = [0.5, 1, 12];
result = cities[1];
resultNum = population[1];
let resultArray;
let output;
output = result + ' ' + resultNum;
result = cities.join(" ");
output = cities[resultNum].indexOf('n').toString();
resultNum = cities.indexOf('Wroclaw');
resultArray = cities.concat(streets);
resultNum = resultArray.push('Wielka');
let resultBool;
resultBool = mail.includes('@');
resultBool = mail.includes('1');
resultBool = Boolean(resultNum);
resultNum = 25;
result = '25';
resultBool = (result == resultNum.toString());
console.log('----- boolean ------');
console.log('resultBool: ' + resultBool);
console.log('resultArray: ' + resultArray);
console.log('resultNum: ' + resultNum);
console.log('result: ' + result);
console.log('output: ' + output);
