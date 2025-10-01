let x;

// Array Literal
const numbers = [12, 45, 33, 29, 39, 102];

x = numbers[0];

console.log(x);

x = numbers[0] + numbers[3];

console.log(x);

x = numbers.length

console.log(x);

//Mixed Array

const mixed = [12, 'Hello', true, null];


//Array Constructor

const fruits = new Array('apple', 'grape', 'orange');

x = `My favorite fruit is an ${fruits[2]}`;

console.log(x);

fruits[2] = 'pears';

x = fruits;

console.log(x);

// fruits.length = 2;

// x = fruits;

// console.log(x);

fruits[3] = 'strawberry';

x = fruits;

console.log(x);

fruits[fruits.length]= 'blueberry';

x = fruits;

console.log(x)


fruits[fruits.length]= 'peach';

x = fruits;

console.log(x);
