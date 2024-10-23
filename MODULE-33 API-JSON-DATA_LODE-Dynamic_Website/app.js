const clickJsonDataLoad2 = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => console.log(data));
}

const clickJsonDataLoad3 = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => displayUser(data));
}


const displayUser = (data) => {
    console.log(data);
}