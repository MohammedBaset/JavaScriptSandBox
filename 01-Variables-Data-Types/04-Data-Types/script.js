// String

const firstName = 'Sara';

console.log(firstName, typeof firstName);

const output = firstName;

console.log(output, typeof firstName);

//Number

const age = 30;

const outputAge = age;

console.log(outputAge, typeof outputAge);

//Float

const temp = 98.9;

const outputTemp = temp;

console.log(outputTemp, typeof outputTemp);

//Bool

const hasKids = true;

const outputHasKids = hasKids;

console.log(outputHasKids, typeof outputHasKids);

//Null

const aptNumber = null;

const outputAptNumber = aptNumber;

console.log(outputAptNumber, typeof outputAptNumber);

//Undefined

//const score = undefined;
let score;

const outputScore = score;
console.log(outputScore, typeof outputScore);

//Symbol

const id = Symbol('id');

const outputId = id;
console.log(outputId, typeof outputId);

//BigInt

const n = 9007199254740991n;

const outputN = n;
console.log(outputN, typeof outputN);

//Reference Types Array

const numbers = [1,2,3,4];

const outputNumbers = numbers;
console.log(outputNumbers, typeof outputNumbers);

//Reference Types Object

const person = {
    name:'Brad',
}

const outputPerson = person;
console.log(outputPerson, typeof outputPerson);

// Reference Types Function

function sayHello(){
    console.log('Hello');
}

    const outputSayHello = sayHello;
    console.log(outputSayHello, typeof outputSayHello);






