"use strict";
//number
let age;
age = 20;
let someNumber = parseInt('25');
//string
let fname = 'Rondel';
let newName = fname.toUpperCase();
//boolean + possibly 'undefined'
let isValid;
//arrays
let anyList = [1, 'rondel'];
let numberList = [1, 1, 2, 3, 5, 8, 13, 21];
let stringList = ['rose', 'blue', 'blue', 'white'];
let filterResultList = numberList.filter((n) => n < 10);
let findResultList = numberList.find((n) => n === 3);
//if a colour is not finded, there is undefinded
//if there are 2 founded colours - it will return one element
let findColourList = stringList.find((n) => n === 'blue');
let accelerationResult = numberList.reduce((acc, n) => acc + n);
let c = 2 /* Colours.Blue */;
//functions
let twoNumbers;
function swapColours(num1, num2) {
    return [num2, num1];
}
let swapNumbs = swapColours(10, 20);
console.log(swapNumbs);
swapNumbs = [1];
swapNumbs = [2];
//different types
let department;
department = 1;
department = 'IT';
