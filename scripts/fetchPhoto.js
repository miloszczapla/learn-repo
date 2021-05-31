"use strict";
const Http = 'https://jsonplaceholder.typicode.com/albums/1/photos';
;
const getPhotos = async () => {
    const response = await fetch(Http);
    const data = await response.json();
    return data;
};
const addPhoto = (photos) => {
    try {
        const link = document.querySelectorAll('.todos-grid');
        let userid = 0;
        link.forEach(gridEle => {
            userid++;
            for (let i = 0; i < gridEle.children.length; i++) {
                const post = gridEle.children[i];
                const counter = post.children[1];
                const img = document.createElement('img');
                img.src = photos[userid].url;
                img.alt = photos[userid].title;
                img.classList.add('post-img');
                counter === null || counter === void 0 ? void 0 : counter.after(img);
                post.addEventListener('dblclick', () => {
                    post.remove();
                }, false);
            }
        });
    }
    catch (err) {
        console.error(err);
    }
};
getPhotos()
    .then(data => addPhoto(data))
    .catch(err => console.error(err));
