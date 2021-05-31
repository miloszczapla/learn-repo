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

    data.forEach(post => {
        if (line < post.userId) {
            html += `
            </div>
            <div class="line"></div>
            <div class="todos-grid">
            `;
            line++;
        }
        html += `
        <div class="post ">
            <h1>${post.title}</h1>
            <div class="post-counter">
                <span>Todo</span>
                <span>#${i}</span>
            </div>
            <p>${post.body}</p>
        </div>
        `;
    });

    html += '</div>';
    return html
}

const container: HTMLElement|null = document.querySelector('#container');

let posts: Object[];
getPosts(http)
    .then(data => { container!.innerHTML = toDOM(data) })
    .catch(err => { console.log("error catched:", err); });


const elements:Object[] = [
    {
        userId: 2,
        city: 'Wroclaw',
        drivingLicense: true,
        workHouers: 5
    },

    {
        userId: 3,
        city: 'Wroclaw',
        drivingLicense: false,
        workHouers: 8
    },
    {
        userId: 4,
        city: 'Poznan',
        drivingLicense: false,
        workHouers: 8
    },
    {
        userId: 5,
        city: 'Warsaw',
        drivingLicense: true,
        workHouers: 3
    },

]

const postHttp = 'https://jsonplaceholder.typicode.com/posts/1/comments';

const postPos = async (elements: Object[]) => {
    elements.forEach(element => {
        fetch(postHttp, {
            method: 'POST',
            body: JSON.stringify(element),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        }).then(response => {
            return response.json();
        }).catch(err=>console.error(err))

    })

}

postPos(elements);