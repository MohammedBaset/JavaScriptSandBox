let x;

const fruits = ['apple', 'pear', 'orange'];
const berries = ['strawberry', 'blueberry', 'rasberry'];

// fruits.push(berries);

// console.log(fruits);

// x = fruits[3]

// console.log(x);

// x = fruits[3] [1];

// console.log(x);

const allFruits = [fruits, berries];

x = allFruits

console.log(x);

x = allFruits [1] [0];

console.log(x);

// Concatenat Arrays

x = fruits.concat(berries);

console.log(x);

//Spread Operator (...)

x = [...fruits, ...berries]

console.log(x);

//Flatten Arrays

const arr = [1, 2, [3, 4], 5, [6, 7], 8];

console.log(arr);

x = arr.flat();

console.log(x);

//Static Methods on Arrat Object

x = Array.isArray(fruits);

console.log(x);

x = Array.from('12345');

console.log(x);

const a = 1;
const b = 2;
const c = 3;

x = Array.of(a, b, c);

console.log(x);