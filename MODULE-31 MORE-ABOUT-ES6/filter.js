const height = [56, 62, 66, 67, 68, 69, 70, 72, 52];

const army = height.filter(h => h >= 68);
// console.log(army);
const oddNumber = height.filter(n => n % 2 === 1);
console.log(oddNumber);

const names = ['jodoxvfgd', 'modoff', 'kododfas', 'dadsdo', 'loo'];
const oddFirend = names.filter(name => name.length % 2 ===1)
console.log(oddFirend);
