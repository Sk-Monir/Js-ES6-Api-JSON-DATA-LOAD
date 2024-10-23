// Write an arrow function where  it will do the following:
// a) Square each element
// b) Calculate the sum of the Square element
// c) Return the average of the sum of square element 

const average = (nums) => {
    let sum = 0;
    for (const num of nums) {
        const squared = num ** 2;
        sum += squared;
    }
    return (sum / nums.length).toFixed(2);
}
const numbers = [1, 2, 3, 4, 5, 6,];
const result = average(numbers);
console.log(result); // output : 91