const numbers = [2, 4, 6, 8, 10, 16, 45];
const double = num => num * 2;
const sum = numbers.map(double);
// console.log(sum);

const sum2 = numbers.map(n => n * 2);
// console.log(sum2);

const sum3 = numbers.map(n => n + 5);
// console.log(sum3);

const sum4 = numbers.map(n => n - 2);
// console.log(sum4);

const sum5 = numbers.map(n => n / 2);
console.log(sum5);


const names = ['jodoxvfgd', 'modoff', 'kododfas', 'dadsdo', 'loo'];
const length = names.map(len => len.length);
// console.log(length);
const firstLetter = names.map(firstL => firstL[0]);
console.log(firstLetter);