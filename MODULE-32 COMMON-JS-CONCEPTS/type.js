const nums = [5, 10, 15, 20, 25, 30];
// nums.forEach((num,index,fullArr) => {
//     console.log('dobule : ', num, 'index : ',index, fullArr  );
// });
// const maping = nums.map((num) =>  num * 2
  
// );

// console.log(maping)

const sum = nums.reduce((prev, current) => prev + current, 1);
console.log(sum);