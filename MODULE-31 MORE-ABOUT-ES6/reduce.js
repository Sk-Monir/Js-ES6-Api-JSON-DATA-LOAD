const height = [56, 62, 66, 67, 68, 69, 70, 72, 52];

const sum = height.reduce((previous, current) => previous + current, 0);
console.log(sum);

const total = height.reduce((p, c) => p + c, 0);
console.log(total);