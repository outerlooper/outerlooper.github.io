// WORKS: Photography
// Promise.all with Async/Await
// https://www.taniarascia.com/promise-all-with-async-await/


// load remote json file
// kudos: https://codepen.io/KryptoniteDove/post/load-json-file-locally-using-pure-javascript
function loadJSON(src, callback) {
    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', src, true);
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
            callback(xobj.responseText);
        }
    };
    xobj.send(null);
}

// First promise returns an array
// const getPhotos = (src) => {
//     loadJSON(src, function (response) {
//         var obj, res=[];
//         obj = JSON.parse(response);
//         return obj;
//     })
// }

// Format Photo
const formatPhotos = (photo, path) => {
    var item = document.createElement('DIV');
    var wrap = document.createElement('DIV');
    var img = document.createElement('IMG');

    //item.id = 'grid-item-'; // ???
    item.className = 'grid-item';
    wrap.className = 'grid-item-wrapper';
    img.src = path + 'thumbnails/' + photo.thumbnail;

    wrap.appendChild(img);
    item.appendChild(wrap);
    return item;
}

const getBaseGrid = () => {
    var baseGrid = document.createElement('DIV');
    var col1 = document.createElement('DIV');
    var col2 = document.createElement('DIV');
    var col3 = document.createElement('DIV');
    var col4 = document.createElement('DIV');

    baseGrid.className = 'grid';
    col1.className = 'grid-col grid-col--1';
    col2.className = 'grid-col grid-col--2';
    col3.className = 'grid-col grid-col--3';
    col4.className = 'grid-col grid-col--4';

    baseGrid.appendChild(col1);
    baseGrid.appendChild(col2);
    baseGrid.appendChild(col3);
    baseGrid.appendChild(col4);

    console.log('getBaseGrid()');

    return baseGrid;
}

// Get Works: Photography
const getWorksPhotography = (section, data, path, order, filter) => {

    var photoItems = [];
    
    loadJSON(data, function (response) {
        var obj, res=[];
        obj = JSON.parse(response);

        var photos = obj;
        
        console.log('getWorksPhotography()');

        var baseGrid = document.createElement('DIV');
        var col1 = document.createElement('DIV');
        var col2 = document.createElement('DIV');
        var col3 = document.createElement('DIV');
        var col4 = document.createElement('DIV');

        baseGrid.className = 'grid';
        col1.className = 'grid-col grid-col--1';
        col2.className = 'grid-col grid-col--2';
        col3.className = 'grid-col grid-col--3';
        col4.className = 'grid-col grid-col--4';

        baseGrid.appendChild(col1);
        baseGrid.appendChild(col2);
        baseGrid.appendChild(col3);
        baseGrid.appendChild(col4);

        var grid = baseGrid;
        
        // Masonry Colcade
        // element as first argument
        // var colc = new Colcade(grid, {
        //     columns: '.grid-col',
        //     items: '.grid-item'
        // });
        

        // Filter
        if (filter) {
            var photosFiltered = photos.filter(function (pic) {
                return pic.tags.includes(filter);
            });
            photos = photosFiltered;
        }
        
        // Order
        switch (order) {
            case 'reverse':
                photos = photos.reverse(); // reverse (last to first)
                break;
            case 'shuffle':
                photos = shuffleArray(photos); // shuffle (randomize)
                break;
        }

        // Map
        photos.map((photo) => {
            const photosFormatted = formatPhotos(photo, path);
            photoItems.push(photosFormatted);
            grid.appendChild(photosFormatted);
        }),
        formatMasonryGrid(section, grid, photoItems) 

    })
    
    
    
}

// Masonry Grid
function formatMasonryGrid(section, grid, photoItems) {
    const gridContainer = document.querySelector('#' + section + '-grid');

    console.log('formatMasonryGrid(grid)');

    // Masonry Colcade
    // element as first argument
    var colc = new Colcade(grid, {
        columns: '.grid-col',
        items: '.grid-item'
    });

    // GSAP Stagger
    gsap.from(photoItems, {
        duration: 3.53,
        opacity: 0,
        stagger: 0.53,
        onComplete: () => {
            //tlAbout.play();
            console.log('I love you so much <3')
        }
    });

    gridContainer.classList.add('hello-brave-new-world');
    gridContainer.appendChild(grid);
}

// // ROCK THIS BITCH!
// function setPhotographyGrid(section, payload) {
//     const grid = document.querySelector('#' + section + '-grid');
//     console.log('setPhotographyGrid()');
//     console.log(payload);
//     console.log(payload.length);
//     console.log(worksPhotography.length);

//     grid.classList.add('hi');

//     var i;
//     for (i = 0; i < payload.length; i++) {
//         console.log(payload[i]);
//         grid.appendChild(payload[i]);
//     }

//     grid.classList.add('hello');

//     // // Masonry Colcade
//     // // element as first argument
//     // var colc = new Colcade(grid, {
//     //     columns: '.grid-col',
//     //     items: '.grid-item'
//     // });
// }




// // usage:
// getWorksPhotography(
//    'photography', // section
//     '../assets/data/works-photography.json', // data
//     '../assets/images/works/photography/', // image path
//     'reverse', // order
//     'sonic' // filter
// );
