// fatch data to another website
const url = 'https://jsonplaceholder.typicode.com/posts';
fetch(url).then(res => res.json()).then(data => displayPost(data));

const displayPost = (posts) => {
    const mainContainer = document.querySelector('.post-container');

    posts.forEach(post => {
        const div = document.createElement('div');
        div.classList.add('post');
        div.innerHTML = `
        <p>Id : ${post.id}</p>
        <h4>Title : ${post.title}</h4>
        <p>Post : ${post.body}</p>
        `;
        mainContainer.appendChild(div);
    });
}

