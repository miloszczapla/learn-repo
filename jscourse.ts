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
