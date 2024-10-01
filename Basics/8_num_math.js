const score = 400;
console.log(score);

const balance = new Number(100);
console.log(balance);      //[Number: 100]

console.log(balance.toString().length);       //3 char in 100
console.log(balance.toFixed(2));         //100.00, 2 is the precision

const otherNum = 123.234;
console.log(otherNum.toPrecision(4));      //123.2

const otherNum2 = 123.5;
console.log(otherNum.toPrecision(3));        //124; starting from 129.50

const otherNum3 = 1233.5;
console.log(otherNum3.toPrecision(3));     //1.23e+3

const hundreds = 1000000
console.log(hundreds.toLocaleString());           //10,00,000

//Maths
console.log(Math);          //Object [Math] {}
console.log(Math.abs(-4));    //4
console.log(Math.round(4.49));    //4
console.log(Math.ceil(4.01));        //5
console.log(Math.floor(4.99));         //4
console.log(Math.min(2,3,4,1,6,8));    //1
console.log(Math.max(2,3,4,1,6,8));    //8
console.log(Math.random());       //generates random values between 0 and 1
console.log(Math.floor((Math.random() * 10) + 1));     //+1 to avoid 0 for 0.01 (generates from 1 to 9)


const min = 1;
const max = 6;
console.log(Math.floor(Math.random() * (max - min +1) + min));    //generates 1 to 6 for a dice game
