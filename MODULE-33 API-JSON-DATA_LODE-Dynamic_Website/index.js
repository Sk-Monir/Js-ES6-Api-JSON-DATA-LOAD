const clickJsonDataLoad4 = () => {
    const url = 'https://jsonplaceholder.typicode.com/users';
    fetch(url)
        .then(res => res.json())
        .then(data => displayUser2(data))
}

const displayUser2 = (data) => {
    const ul = document.querySelector('.ul-container');
    data.forEach(user => {
        const li = document.createElement('li');
        li.style.listStyleType = "decimal";
        li.innerText = user.name;
        ul.appendChild(li);

    });
}
