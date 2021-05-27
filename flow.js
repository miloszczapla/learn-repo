"use strict";
console.log('----- for loop ------');
for (let i = 0; i < 5; i++) {
    console.log('loop step: ' + i);
}
const persons = ['Adam', 'Zosia', 'Wiewióra'];
let html = '';
for (let i = 0; i < persons.length; i++) {
    html += `
    <div>${persons[i]}</div>
    `;
}
console.log(html);
console.log('----- while loop ------');
let i = 0;
while (i < 5) {
    console.log('loop step ' + i);
    i++;
}
i = 0;
while (i < persons.length) {
    console.log('hello ' + persons[i]);
    i++;
}
i = 1;
do {
    console.log('the point is ' + i);
    i++;
} while (i < persons.length);
let num = 10;
function Roller(number) {
    switch (number) {
        case 0:
            return 10;
        case 10:
            return 3.14;
        default:
            return 10;
    }
}
console.log(Roller(num));
