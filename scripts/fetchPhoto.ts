const Http = 'https://jsonplaceholder.typicode.com/albums/1/photos';

interface Photo{
    albumId: number,
    id: number,
    title: string,
    url: string,
    thumbnailUrl: string
};

const getPhotos = async (): Promise<Photo[]> => {
    const response = await fetch(Http);
    const data = await response.json();
    return data
};

const addPhoto = (photos: Photo[]):void => {
    try {
        const link: NodeListOf<Element> = document.querySelectorAll('.todos-grid');
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
                counter?.after(img);

                post.addEventListener('dblclick', () => {
                    post.remove();
                }, false);
            }
        })

    }
    catch (err) {
        console.error(err);
    }

};

getPhotos()
    .then(data => addPhoto(data))
    .catch(err => console.error(err));