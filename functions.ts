//add


const sub = (num1 : number, num2 : number) => num1 - num2;


let b = function add2Numbers(num1 : number, num2 : number, num3? : number) : number{
    return num3 ? num1 + num2 + num3 : num1 + num2;
}

function getName(name1 : string, name2 : string){
    return name1 + ' ' + name2;
}

function addMoreNumbers(num1 : number, num2 : number, ...num3 : number[]) : number{
    return num1 + num2 + num3.reduce((a,b) => a + b);
}

const numbers : number[] = [1,2,3,4,5];

console.log(addMoreNumbers(2,3,...numbers));