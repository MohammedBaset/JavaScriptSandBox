let amount = '100';

console.log(amount, typeof amount);

//Convert string to number
//amount = parseInt(amount);
amount = +amount;
//amount = Number(amount);

console.log(amount, typeof amount);

//Convert number to string

let amount1 = 100;

//amount1 = amount1.toString();
amount1 = String(amount1);

console.log(amount1, typeof amount1);

//Convert string to decimal

let amount2 = '99.5';

amount2 = parseFloat(amount2);

console.log(amount2, typeof amount2);

//Convert number to boolean

let amount3 = 0;

amount3 = Boolean(amount3);

console.log(amount3, typeof amount3);

//Convert string to NaN number

let amount4 = 'hello';

amount4 = parseInt(amount4);

console.log(amount4, typeof amount4);

//Ways to get NaN
console.log(Math.sqrt(-1));
console.log(1 + NaN);
console.log(undefined + undefined);
console.log('foo' / 3);










