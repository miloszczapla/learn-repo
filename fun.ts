function Log():void {
    console.log('It is fun!');
}

const expressedFunction = function ():void {
    console.log('expressing...');
};

Log();

expressedFunction();

const welcomFun = function (name: string = 'miłosz', timeOfDay: string = 'midnight'): void {
    console.log(`Hello ${name} it must be wonderful ${timeOfDay}.`);
};

welcomFun();
welcomFun(undefined, 'night');
// const pi: number = 3.14;

//circle area and Volume
const calcArea = function (radius:number = 0): number {
    const area = pi * radius ** 2;
    return area;
}

const calccircuit = function (radius: number): number {
    const circuit = radius * pi * 2;
    return circuit;
};

let r:number = 10;

console.log(`the radius is: ${r}, then the circuit is: ${calccircuit(r).toPrecision(3)}, and the area is: ${calcArea(r).toPrecision(3)}`);


//arrow funtions
//square area and circuit
const calcSqtArea = (side: number): number => {
    const area: number = side**2;
    return area;
};

const calcSqtcircuit = (side: number): number => side * 4;


const hello = ():void => console.log('hello world');
hello()

const area: number = calcSqtArea(5);
console.log('Sqt area = ' + area);
console.log('Sqt circuit = ' + calcSqtcircuit(4));

const myFunc = (callBackFun:any): number => callBackFun ** 2;


console.log(myFunc(() => 23));

// Objects

console.log('------ Objects -------');
interface user{
    name: string | null,
    age: number| null,
    eamil: string| null,
    city: string| null,
    score: number| null,
    married: boolean,
    introduceYourSelf: Function
};

let user: user = {
    name: 'Adam',
    age: 32,
    eamil: 'adam@mail.com',
    city: null,
    score: null,
    married: false,
    introduceYourSelf: function () {
        console.log(`Your name is ${this.name} and you are ${this.age}, living in ${this.city} writing mails from ${this.eamil}. You are married ${this.married} and have life score of ${this.score}`);
    }
}

const listInfo = (user: user):void => {
    console.log(`Your name is ${user.name} and you are ${user.age}, living in ${user.city} writing mails from ${user.eamil}. You are married ${user.married} and have life score of ${user.score}`);
};
// listInfo(user);

user.introduceYourSelf();

let number: number = 10.3;

console.log(Math.round(number));

let random: number = Math.random();
console.log(random);
console.log(Math.round(random * 100));
