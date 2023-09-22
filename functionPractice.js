/*
const add = (x, y) => {
    return x + y;
}

const subtract = (x, y) => {
    return x - y;
}

const multiply = (x, y) => {
    return x * y;
}

const divide = (x, y) => {
    return x / y;
}

const weirdCombo = (x, y) => {
    let number = multiply(add(divide(y, subtract(x, y)), x), (divide(x, y)));
    return number;
}
*/
let person = {
    name: 'Bryan', 
    age: 32, 
    location: 'NC',
    hair: 'blond',
    cool: true
}

let person2 = {
    name: 'Larry', 
    age: 72, 
    location: 'NC',
    hair: 'gray',
    cool: false
}

const printInfo = ({name, age, location, hair, cool}) => {
    return `${name} is a ${age}-year-old with ${hair} hair living in ${location}. It is ${cool} that he is cool.`;
}

console.log(printInfo(person));
console.log(printInfo(person2));

