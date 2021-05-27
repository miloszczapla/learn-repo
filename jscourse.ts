// string
console.log('"hello " worls')

let fullName: string, firstName: string, lastName: string, mail: string;

mail = "hello@happy.mail.com";

firstName = "Leaon";
lastName = "Geopard";

fullName = firstName + " " + lastName;
console.log(fullName);

console.log("pozycja 3 ",fullName[2]);

// String methods
console.log(fullName.length);

console.log(fullName.toUpperCase());

console.log(fullName[0].toLowerCase() );

let lowerCasedName: string = fullName.toLowerCase();

console.log(lowerCasedName);

let index: number = mail.indexOf(".");

console.log(index);

//Little more methods
let addres: string = "Wroclaw, Wielka 54/41";

index = addres.lastIndexOf("a");

console.log(`Last index of "a": ${index}`);

let result: string = addres.slice(3, 5);
console.log(`sliced addres ${result}`);

result = addres.substr(-5, 5);
console.log(`substring:   ${result}`);

result = addres.replace("a", "/");


console.log(`result: ${result}`);


// Numbers
console.log("------ Numbers --------");

const pi: number = 3.14;

let resultNum: number;
let radius = 10;
resultNum = 10 / 2;

resultNum = radius / pi;

resultNum = 5 ** 10;

resultNum = pi % 3;

resultNum += radius;

result += resultNum;

result = `name have: ${resultNum} letters`;

console.log(resultNum);

console.log(result);