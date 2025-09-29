//Values are stored on the stack
const name = 'John';
const age = 30;

console.log(name);

//Reference values are stored on the heap
const person = {
    name: 'Brad',
    age: 40
}

console.log(person);

let newName = name;

newName = 'Johnathan'

console.log(name, newName);

let newPerson = person;
newPerson.name = 'Bradley';

console.log(person, newPerson);