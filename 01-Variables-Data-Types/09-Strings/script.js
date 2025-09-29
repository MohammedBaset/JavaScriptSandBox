let x;

const name ='Jhon';
const age = 30;

x = 'Hello, my name is' + ' ' + name + ' ' + 'and I am'
 + ' ' + age + ' ' + 'years old.';

console.log(x);

//Template Literals

x =`Hello, my name is ${name} and I am ${age} years old.`;

console.log(x);

// String Properties and Methods

const s = new String('Hello World');

//const s = 'Hello World';

console.log(s);

x = typeof s;

x = s.length;

// Access value by key

x = s[0];

console.log(x);


x = s.__proto__;

console.log(x);


x = s.toUpperCase();

console.log(x);


x = s.toLowerCase()

console.log(x);


x = s.charAt(0);

console.log(x);


x = s.indexOf('H');

console.log(x);


x = s.substring(0, 4);

console.log(x);


x = s.substring(7);

console.log(x);


x = s.slice(-11,-6);

console.log(x);


x = '       Hello World';
x = x.trim();

console.log(x);


x = s.replace('World','Jhon');

console.log(x);


x = s.includes('Hello');

console.log(x);


x = s.valueOf();

console.log(x);


x = s.split('');

console.log(x);




