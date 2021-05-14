// // WORKS: Photography
// // Promise.all with Async/Await
// // https://www.taniarascia.com/promise-all-with-async-await/


// // load remote json file
// // kudos: https://codepen.io/KryptoniteDove/post/load-json-file-locally-using-pure-javascript
// function loadJSON(src, callback) {
//     var xobj = new XMLHttpRequest();
//     xobj.overrideMimeType("application/json");
//     xobj.open('GET', src, true);
//     xobj.onreadystatechange = function () {
//         if (xobj.readyState == 4 && xobj.status == "200") {
//             callback(xobj.responseText);
//         }
//     };
//     xobj.send(null);
// }

// // First promise returns an array
// const getPhotos = (src) => {
//     return new Promise((resolve, reject) => {
//         loadJSON(src, function (response) {
//             var obj, res=[];
//             obj = JSON.parse(response);
//             return resolve(obj);
//         })
//     })
// }

// // // Order
// // const orderPhotos = (photos) => {
// //     return new Promise((resolve, reject) => {
// //         return resolve(photos.reverse());
// //     })
// // }

// // Format Photo
// const formatPhotos = (photo, path) => {
//     return new Promise((resolve, reject) => {
//         var item = document.createElement('DIV');
//         var wrap = document.createElement('DIV');
//         var img = document.createElement('IMG');

//         //item.id = 'grid-item-'; // ???
//         item.className = 'grid-item';
//         wrap.className = 'grid-item-wrapper';
//         img.src = path + 'thumbnails/' + photo.thumbnail;

//         wrap.appendChild(img);
//         item.appendChild(wrap);
//         return resolve(item);
//     })
// }

// const getBaseGrid = async () => {
//     var baseGrid = document.createElement('DIV');
//     var col1 = document.createElement('DIV');
//     var col2 = document.createElement('DIV');
//     var col3 = document.createElement('DIV');
//     var col4 = document.createElement('DIV');

//     baseGrid.className = 'grid';
//     col1.className = 'grid-col grid-col--1';
//     col2.className = 'grid-col grid-col--2';
//     col3.className = 'grid-col grid-col--3';
//     col4.className = 'grid-col grid-col--4';

//     baseGrid.appendChild(col1);
//     baseGrid.appendChild(col2);
//     baseGrid.appendChild(col3);
//     baseGrid.appendChild(col4);

//     console.log('getBaseGrid()');

//     return baseGrid;
// }

// // Get Works: Photography
// const getWorksPhotography = async (section, data, path, order, filter) => {
    
//     let photos = await getPhotos(data);
    
//     console.log('getWorksPhotography()');

//     var baseGrid = document.createElement('DIV');
//     var col1 = document.createElement('DIV');
//     var col2 = document.createElement('DIV');
//     var col3 = document.createElement('DIV');
//     var col4 = document.createElement('DIV');

//     baseGrid.className = 'grid';
//     col1.className = 'grid-col grid-col--1';
//     col2.className = 'grid-col grid-col--2';
//     col3.className = 'grid-col grid-col--3';
//     col4.className = 'grid-col grid-col--4';

//     baseGrid.appendChild(col1);
//     baseGrid.appendChild(col2);
//     baseGrid.appendChild(col3);
//     baseGrid.appendChild(col4);

//     var grid = baseGrid;
    
//     // Masonry Colcade
//     // element as first argument
//     var colc = new Colcade(grid, {
//         columns: '.grid-col',
//         items: '.grid-item'
//     });
    

//     // Filter
//     if (filter) {
//         var photosFiltered = photos.filter(function (pic) {
//             return pic.tags.includes(filter);
//         });
//         photos = photosFiltered;
//     }
    
//       // Order
//     switch (order) {
//         case 'reverse':
//             photos = photos.reverse(); // reverse (last to first)
//             break;
//         case 'shuffle':
//             photos = shuffleArray(photos); // shuffle (randomize)
//             break;
//     }

//     // Async Promise
//     Promise.all(
//         photos.map(async (photo) => {
//             const photosFormatted = await formatPhotos(photo, path);
//             grid.appendChild(photosFormatted);
//         }),
//         formatMasonryGrid(section, grid) 
//     )
// }

// // Masonry Grid
// function formatMasonryGrid(section, grid) {
//     const gridContainer = document.querySelector('#' + section + '-grid');

//     console.log('formatMasonryGrid(grid)');

//     // // Masonry Colcade
//     // // element as first argument
//     // var colc = new Colcade(grid, {
//     //     columns: '.grid-col',
//     //     items: '.grid-item'
//     // });

//     // GSAP Stagger

//     gridContainer.classList.add('hello-world');
//     gridContainer.appendChild(grid);
// }

// // // ROCK THIS BITCH!
// // function setPhotographyGrid(section, payload) {
// //     const grid = document.querySelector('#' + section + '-grid');
// //     console.log('setPhotographyGrid()');
// //     console.log(payload);
// //     console.log(payload.length);
// //     console.log(worksPhotography.length);

// //     grid.classList.add('hi');

// //     var i;
// //     for (i = 0; i < payload.length; i++) {
// //         console.log(payload[i]);
// //         grid.appendChild(payload[i]);
// //     }

// //     grid.classList.add('hello');

// //     // // Masonry Colcade
// //     // // element as first argument
// //     // var colc = new Colcade(grid, {
// //     //     columns: '.grid-col',
// //     //     items: '.grid-item'
// //     // });
// // }




// // // usage:
// // getWorksPhotography(
// //    'photography', // section
// //     '../assets/data/works-photography.json', // data
// //     '../assets/images/works/photography/', // image path
// //     'reverse', // order
// //     'sonic' // filter
// // );
