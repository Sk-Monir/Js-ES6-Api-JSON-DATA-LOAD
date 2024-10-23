// Write an arrow function where  it will do the following:
// a) it will take and Array where the array Element will be the name of your friend
// b) Check if the length each element is event , push element with event length to a new array and return the result
// print the result

const friendsLengthEventNames = (friends) => {
    let evenNames = [];
    for (let friend of friends) {
        if (friend.length % 2 === 0) {
            evenNames.push(friend);
        }
    }
    return evenNames;
}

const friendsList = ["Alicee", "Bob", "Charlie", "Davide", "Eve"];
const result = friendsLengthEventNames(friendsList);
console.log(result); // Output: ['Alicee', 'Davide']

