"use strict";
const http = 'https://jsonplaceholder.typicode.com/posts';
const getPosts = async (address) => {
    const response = await fetch(address);
    const data = await response.json();
    return data;
};
const toDOM = (data) => {
    let html = '<div class="todos-grid">';
    let line = 1;
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
    return html;
};
const container = document.querySelector('#container');
let posts;
getPosts(http)
    .then(data => { container.innerHTML = toDOM(data); })
    .catch(err => { console.log("error catched:", err); });
const elements = [
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
];
const postHttp = 'https://jsonplaceholder.typicode.com/posts/1/comments';
const postPos = async (elements) => {
    elements.forEach(element => {
        fetch(postHttp, {
            method: 'POST',
            body: JSON.stringify(element),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        }).then(response => {
            return response.json();
        }).catch(err => console.error(err));
    });
};
postPos(elements);
