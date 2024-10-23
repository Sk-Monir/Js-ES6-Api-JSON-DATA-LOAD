const actor = {
    name: 'Ananata',
    age: 30,
    phone: '01717653844',
}

const {name, age:boyos } = actor;

// console.log(name);
// console.log(boyos);

// arrow Function 
const makeDuble = (a, b) => [a * 2 , b * 2]; 

// destructure  metond 
const [first, second] = makeDuble(4, 5);

console.log(first, second);