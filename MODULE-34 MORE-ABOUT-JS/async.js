const myLoad = () => {
    return new Promise((resolve, reject) => {
        const success = Math.random();
        if (success <= 0.5) {
            resolve(success);
        }
        else {
            reject(success);
        }
    });
};
myLoad()
    .then(data => console.log('resolved data', data))
    .catch(error => console.error('rejected with value  : ', error));

//normal function
async function loadData() {
    const resolve = await fetch(' ');
    const data = await resolve.json();
    console.log(data);
}
loadData()
// arrow function
const loadData2 = async () => {
    const response = await fetch(' ');
    const data = await response.json();
    console.log(data);
}
loadData2()