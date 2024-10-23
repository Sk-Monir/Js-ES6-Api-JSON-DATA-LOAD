// Write an arrow function where  it will do the following:
// a) It Will Take two Array input
// b) Combine the two array and assign them in a new array
// c) Find the maximum number from the new array and return the result


const maxNumber = (numbers1, numbers2) => {
    const newArr = [...numbers1, ...numbers2];

    const arrMax = Math.max(...newArr);
    return arrMax
}

const arr1 = [1, 2, 3, 4, 5, 6];
const arr2 = [7, 8, 9, 10, 11, 12];
const result = maxNumber(arr1, arr2);
console.log(result);