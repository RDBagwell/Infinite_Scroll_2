const postContainer = document.getElementById('post-container');
const loader = document.getElementById('loader');
const filter = document.getElementById('filter');

let limit = 5;
let page = 1;

async function getPost() {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`);
    const data = await res.json();
    return data;
}

async function showPost() {
    const data = await getPost();
    const posts = data.map(post => `
        <div class="post">
            <div class="number">${post.id}</div>
            <h2 class="post-title">${post.title}</h2>
            <p class="post-body">${post.body}</p>   
        </div>
    `).join('');
    postContainer.innerHTML = posts;
}

showPost();