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

