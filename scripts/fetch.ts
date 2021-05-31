const http = 'https://jsonplaceholder.typicode.com/posts';

const getPosts = async (address : string):Promise<Post[]> => {

    const response = await fetch(address);
    const data = await response.json();

    return data;
}

interface Post {
    userId: number,
    id: number,
    title: string,
    body: string
}

const toDOM = (data: Post[]): string => {
    let html: string = '<div class="todos-grid">';
    let line: number = 1;

    for (i = 0; i < data.length; i++){
        if (line < data[i].userId) {
            html += `
            </div>
            <div class="line"></div>
            <div class="todos-grid">
            `;
            line++;
        }
        html += `
        <div class="post ">
            <h1>${data[i].title}</h1>
            <div class="post-counter">
                <span>Todo</span>
                <span>#${i}</span>
            </div>
            <p>${data[i].body}</p>
        </div>
        `;
    }
    html += '</div>';
    return html
}

const container: HTMLElement|null = document.querySelector('#container');
console.log(container);


let posts: Object[];
getPosts(http)
    .then(data => { container!.innerHTML = toDOM(data) })
    .catch(err => { console.log("error catched:", err); });

