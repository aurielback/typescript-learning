"use strict";
//number
let age;
age = 20;
console.log(age);
let someNumber = parseInt('25');
console.log(someNumber);
//string
let fname = 'Rondel';
console.log(fname);
console.log("Try.. " + fname.toUpperCase());
let newName = fname.toUpperCase();
console.log(newName);
//boolean + possibly 'undefined'
let isValid;
console.log(isValid);
//arrays
let anyList = [1, 'rondel'];
let numberList = [1, 1, 2, 3, 5, 8, 13, 21];
let stringList = ['rose', 'blue', 'blue', 'white'];
console.log('Colours are : ' + stringList);
console.log('Numbers are : ' + numberList);
console.log('Different type list : ' + anyList);
let filterResultList = numberList.filter((n) => n < 10);
console.log(filterResultList);
let findResultList = numberList.find((n) => n === 3);
console.log(findResultList);
//if a colour is not finded, there is undefinded
//if there are 2 founded colours - it will return one element
let findColourList = stringList.find((n) => n === 'blue');
console.log(findColourList);
let accelerationResult = numberList.reduce((acc, n) => acc + n);
console.log(accelerationResult);
