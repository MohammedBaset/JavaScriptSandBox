//Creat number object using number constructor

let x;

const num = new Number(5);

// console.log(typeof num);

x = num.toString();

console.log(x);

x = num.toString().length;

console.log(x);

x = num.toFixed(2)

console.log(x);

x = num.toPrecision(3);

console.log(x);

console.log(typeof x);

x = num.toExponential(2)

console.log(x);

x = num.toLocaleString('en-US');

console.log(x);

// x = num.__proto__;

console.log(num);

x = num.valueOf();

console.log(x);

x = Number.MAX_VALUE;

console.log(x);

x = Number.MIN_VALUE;

console.log(x);

