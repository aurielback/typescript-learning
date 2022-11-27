"use strict";
//add
const sub = (num1, num2) => num1 - num2;
let b = function add2Numbers(num1, num2, num3) {
    return num3 ? num1 + num2 + num3 : num1 + num2;
};
function getName(name1, name2) {
    return name1 + ' ' + name2;
}
function addMoreNumbers(num1, num2, ...num3) {
    return num1 + num2 + num3.reduce((a, b) => a + b);
}
const numbers = [1, 2, 3, 4, 5];
console.log(addMoreNumbers(2, 3, ...numbers));
