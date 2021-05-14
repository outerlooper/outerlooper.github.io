// app config

const main = document.getElementById("main");
let currentPage = '', playlist = [], playlistTrack = 0;

// gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(MotionPathPlugin);

if (document.body.classList.contains('pg-home')) {
    currentPage = 'home';
    playlistTrack = 0;
    playlist = [];
    playlist.push(
        'b6k4OJ5aOOs', // CMA - Open Your Eyes (feat Alan Watts)
        '8D7342Nx1_s', // ELO - Tightrope
        'LnqXm8L5XcQ', // CMA - You're Free
        'XbXqnANTJCI', // CMA - Tomorrow's Another Day
        'Bjndmn6AH1E', // TRANSCENDENCE: Carl Sagan & Alan Watts & Mooji & Neil Degrasse Tyson
        '6oIUdpXkQXg', // It's Already Happening But People Don't See It - Alan Watts on What Is
        'olOMrEiXLZs', // Andreas B. - Floating (Full Version)
        //'yTsErjyRBXI', // BEYOND: Terence Mckenna & Sam Harris & Alan Watts & Sadhguru
        'HgFksUpXVYw' // CMA - Timeless
    );
}
if (document.body.classList.contains('pg-photography')) {
    currentPage = 'photography';
    playlistTrack = 0;
    playlist = [];
    playlist.push(
        'LnqXm8L5XcQ', // CMA - You're Free
        'XbXqnANTJCI', // CMA - Tomorrow's Another Day
        'HgFksUpXVYw' // CMA - Timeless
    );
}
if (document.body.classList.contains('pg-web')) {
    currentPage = 'web';
    playlistTrack = 0;
    playlist = [];
    playlist.push(
        '0uhwPOquByE' // Fil Far - CODING SESSION Music #22
    );
}
if (document.body.classList.contains('pg-design')) {
    currentPage = 'design';
    playlistTrack = 0;
    playlist = [];
    playlist.push(
        'olOMrEiXLZs' // Andreas B. - Floating
    );
}
if (document.body.classList.contains('pg-drawing')) {
    currentPage = 'drawing';
    playlistTrack = 0;
    playlist = [];
    playlist.push(
        'DFT6qm3oIjg' // Going Quantum - Hello? [Monstercat Release]
    );
}
if (document.body.classList.contains('pg-music')) {
    currentPage = 'music';
    playlistTrack = 0;
    playlist = [];
    playlist.push(
        '' // 
    );
}
if (document.body.classList.contains('pg-about')) {
    currentPage = 'about';
    playlistTrack = 0;
    playlist = [];
    playlist.push(
        'YHGu2Pv2kx8', // Dubba Johnny - Home
        'jdVsJWBKZQo', // CMA - Caught In Our thoughts
        'jldHW2xKBao' // Alan Watts ~ It's Just A Show | Wiara
    );
}


// Mobile Device Detection
// https://stackoverflow.com/questions/3514784/what-is-the-best-way-to-detect-a-mobile-device
var isMobileDevice = false; //initiate as false
// device detection
if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) { 
    isMobileDevice = true;

    // Add 'isMobileDevice' CSS ClassName to body tag
    document.body.classList.add('isMobileDevice');

    // Hide buttons, keep task bar
    //https://stackoverflow.com/questions/11280826/html5-full-screen-web-apps-no-browser-bars
    //'<meta name="viewport" content="minimal-ui, width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">'
    var meta = document.createElement('meta');
    meta.setAttribute('name', 'viewport');
    meta.setAttribute('content', 'minimal-ui, width=device-width, initial-scale=1');
    document.getElementsByTagName('head')[0].appendChild();

    // // Intro handling for mobile
    // document.querySelector("#go").remove();
    // document.querySelector("#moon").classList.remove('hide');
    // document.querySelector("#orb").classList.remove('hide');
    // document.querySelector(".quote").classList.remove('hide');
    
    // // Autostart tree intro animation
    // tlAwaken.play(); 
}
// (function (){
//     window.addEventListener('scroll', () => {
//         var header = document.getElementById('header');
//         if (window.scrollY > 10){
//             header.className = 'header-scroll';
//         } else {
//             header.className = 'header-top';
//         }
//     });
// })();
/*(function (){

    const nav = document.querySelector('#nav-works');
    
    var observer = new IntersectionObserver(function(entries) {
        // *Kudos: https://usefulangle.com/post/113/javascript-detecting-element-visible-during-scroll
        // isIntersecting is true when element and viewport are overlapping
        // isIntersecting is false when element and viewport don't overlap
        if(entries[0].isIntersecting === true) {
            nav.className = 'nav-works-scroll';
        } else {
            nav.className = 'nav-works-top';
        }
    }, { threshold: [0] });
    
    observer.observe(document.querySelector("#works"));

})();*/
(function (){
    window.addEventListener('scroll', () => {
        var app = document.getElementById('app');
        if (window.scrollY > 10){
            app.className = 'app-scroll';
        } else {
            app.className = 'app-top';
        }
    });
    
})();


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

// // works

// //var worksDesign = document.getElementById("works-design-grid");

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

// // shuffle array
// // kudos: https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
// function shuffleArray(array) {
//     var currentIndex = array.length,
//         temporaryValue, randomIndex;
//     while (0 !== currentIndex) {
//         randomIndex = Math.floor(Math.random() * currentIndex);
//         currentIndex -= 1;
//         temporaryValue = array[currentIndex];
//         array[currentIndex] = array[randomIndex];
//         array[randomIndex] = temporaryValue;
//     }
//     return array;
// }

// // pagination - skip take
// // kudos: http://jsfiddle.net/fkling/k6GGC/
// var iterator = function(a, n) {
//     var current = 0,
//         l = a.length;
//     return function() {
//         end = current + n;
//         var part = a.slice(current,end);
//         current =  end < l ? end : 0;
//         return part;
//     };
// };
// // // Demo
// // var arr = [1,2,3,4,5,6,7,8];
// // var next = iterator(arr, 3);
// // alert(next()); // gives the first three
// // alert(next()); // gives the next three
// // alert(next());
// // alert(next());

// function getGridItem(thumbnail, image, caption) {
//     if (thumbnail) {
//         var item = document.createElement("DIV");
//         var thm = document.createElement("IMG");
//         var link = document.createElement("A");

//         link.setAttribute("class", "uk-inline");
        
//         if (image) {
//             link.setAttribute("href", image);
//         } else {
//             link.setAttribute("href", thumbnail);
//         }
//         if (caption) {
//             link.setAttribute("data-caption", caption);
//         }

//         thm.setAttribute("data-src", thumbnail);
//         thm.setAttribute("uk-img", "");
//         //thm.setAttribute("alt", "");
//         //thm.setAttribute("title", "");

//         link.appendChild(thm);
//         item.appendChild(link);
//         return item;
//     } 
//     return;
// }

// function setWorks__Grid(container, obj, filter) {
//     if (container && obj){
//         for (var i = 0; i < obj.length; i++) {
//             var item = document.createElement("div");
//             var thumbnail = obj[i]["thumbnail"];
//             var image = obj[i]["image"];
//             var caption = obj[i]["caption"];
//             var tags = obj[i]["tags"];

//             item.className = "grid-item";

//             if (thumbnail) {
//                 if (tags) {
//                     // filter by tags
//                     if (tags.includes(filter)) {
//                         item.appendChild(getGridItem(thumbnail, image, caption));
//                         container.appendChild(item);
//                     }
//                 } else {
//                     // no tag filter
//                     item.appendChild(getGridItem(thumbnail, image, caption));
//                     container.appendChild(item);
//                 }
//             }
//         }
//     }
// }

// function getWorks(section, works, path, order, filter) {
//     //const container = document.getElementById(section + '-grid');
//     //const preloader = document.querySelector('#' + section + ' .preloader');

//     //if (container) {
//     if (worksPhotographyGrid) {
//         loadJSON(works, function (response) {
//             var obj, res=[];

//             obj = JSON.parse(response);

//             for (var i = 0; i < obj.length; i++) {
//                 if (filter) {
//                     // filtered results
//                     if (obj[i]["tags"].includes(filter)) {
//                         res.push({
//                             "title" : obj[i]["title"],
//                             "category" : obj[i]["category"], 
//                             "tags" : obj[i]["tags"],
//                             "teaser" : obj[i]["teaser"],
//                             "description" : obj[i]["description"],
//                             "thumbnail" : obj[i]["thumbnail"],
//                             "image" : obj[i]["image"],
//                             "caption" : obj[i]["caption"]
//                         });
//                     }
                    
//                 } else {
//                     // all results
//                     res = obj;
//                 }
                
//             }

//             switch (order) {
//                 case 'reverse':
//                     res = res.reverse(); // reverse (last to first)
//                     break;
//                 case 'shuffle':
//                     res = shuffleArray(res); // shuffle (randomize)
//                     break;
//             }

//             // if (res && preloader) {
//             //     preloader.remove();
//             //     //console.log(res);
//             // }

//             // const grid = document.createElement('DIV');
//             // grid.className = 'grid';

//             // const col1 = document.createElement('DIV');
//             // const col2 = document.createElement('DIV');
//             // const col3 = document.createElement('DIV');
//             // const col4 = document.createElement('DIV');

//             // col1.className = 'grid-col grid-col--1';
//             // col2.className = 'grid-col grid-col--2';
//             // col3.className = 'grid-col grid-col--3';
//             // col4.className = 'grid-col grid-col--4';

//             // grid.appendChild(col1);
//             // grid.appendChild(col2);
//             // grid.appendChild(col3);
//             // grid.appendChild(col4);
            
//             //var gridItems = [];
//             for (var x = 0; x < res.length; x++) {
//                 var item = document.createElement('DIV');
//                 var wrap = document.createElement('DIV');
//                 var img = document.createElement('IMG');

//                 item.id = 'grid-item-' + x;
//                 item.className = 'grid-item';
//                 wrap.className = 'grid-item-wrapper';
//                 img.src = path + 'thumbnails/' + res[x]["thumbnail"];

//                 wrap.appendChild(img);
//                 item.appendChild(wrap);
//                 //---grid.appendChild(item);
//                 worksPhotography.push(item); // global - see app-config.js
//             }

//             return worksPhotography;

//             // var colc = new Colcade(grid, {
//             //     columns: '.grid-col',
//             //     items: '.grid-item'
//             // });

//             //container.appendChild(grid);






//             // for (var z = 0; z < gridItems.length; z++) {
//             //     gsap.to(gridItems[z], {
//             //         duration: 2.15,
//             //         opacity: 1,
//             //         // onComplete: function() {
//             //         //     console.log(container.offsetHeight);
//             //         // }
//             //     })
//             // }

//             //console.log(container.clientHeight);
//         });

//         //ScrollTrigger.refresh();
//     }
// }


// YouTube Audio Player

// see: https://developers.google.com/youtube/iframe_api_reference
// see this: https://codepen.io/ahmed-wagdi/pen/xdWvBL

function onYouTubeIframeAPIReady(){

    var go = document.getElementById("go");
    var wrapper = document.getElementById("youtube-audio");
    var controller = document.getElementById("audio-controller");
    var icon = document.getElementById("audio-controller-icon");
    //var status = document.getElementById("audio-controller-status");

    const moon = document.querySelector("#moon"),
        orb = document.querySelector("#orb"),
        quote = document.querySelector(".quote");

    var controls = function(isPlaying){
        if (isPlaying) {
            // audio is playing, so a pause button if a player
            controller.className = "audio-on";
            icon.className = "fa fa-volume-up"; //fa fa-pause-circle"; // fa fa-headphones
            //status.innerHTML = "ON";
        } else {
            // audio is stopped, so a play button here if player
            controller.className = "audio-off";
            icon.className = "fa fa-volume-off";
            //status.innerHTML = "OFF";
        }
    };

    var container = document.createElement("div");
    container.setAttribute("id","youtube-player");
    if (wrapper) {
        wrapper.appendChild(container);
    }

    

    var player = new YT.Player("youtube-player",{
        height:"0",
        width:"0",
        videoId: playlist[playlistTrack],
        playerVars:{
            'autoplay': 0,
            'loop': 0,
        },
        events:{
            onReady:function(e){
                player.setPlaybackQuality("small");
                player.unMute();
                player.setVolume(88);
                controller.classList.add('disable-user-control');

                //player.playVideo(); // plays video
                //controller.click(); // click button + play video + set icon

                // switch (currentPage) {
                //     case 'home':
                //         tlAwaken.play(); // start tree intro animation
                //         break;

                //     case 'about':
                //         tlAbout.play();
                //         break;
                // }
            },
            onStateChange:function(e){
                if (e.data===YT.PlayerState.ENDED) {
                    // Song Ended ... increase the playlistTrack and rock on!
                    playlistTrack++;
                    if (playlist.length < (playlistTrack+1)) {
                        playlistTrack = 0;
                    }
                    player.seekTo(0);
                    player.loadVideoById(playlist[playlistTrack], 0, "small");
                }
            }
        }
    })

    go.onclick = function(e){
        e.preventDefault();
        go.remove();
        moon.classList.remove('hide');
        orb.classList.remove('hide');
        quote.classList.remove('hide');
        player.seekTo(0);
        player.playVideo(),controls(!0); // start audio
        tlAwaken.play(); // start tree intro animation
    };

    controller.onclick = function(e){
        e.preventDefault();
        if (!(this).classList.contains('disable-user-control')) {
            player.getPlayerState() === YT.PlayerState.PLAYING || player.getPlayerState() === YT.PlayerState.BUFFERING ? (player.pauseVideo(),controls(!1)) : (player.playVideo(),controls(!0))
        }
    };
}
// PAGE: ABOUT

if (currentPage === 'about') {

    var tlAbout = new gsap.timeline({ paused: true});

    tlAbout
    .from("#audio-controller", {
        duration: 2.51,
        opacity: 0,
        onComplete: () => {
            // // Shake :)
            // setTimeout(function() {
            //     //your code to be executed after 5.353 seconds
            //     main.classList.add('shake');
            //     setTimeout(function() {
            //         //your code to be executed after 5.353 seconds
            //         main.classList.remove('shake');
            //     }, 8353);
            // }, 81111);
        }
    })
    .to(".transition__ten-bar .bar", {
        duration: 2.15,
        transformOrigin: "50% 100%",
        scaleY: 0,
        stagger: 0.25,
        opacity: 0,
        ease: "power2.out",
        onComplete: () => {
            main.classList.remove('hide'); // see app-config.js
        }
    })
    .to(".transition__ten-bar", {
        duration:0.1,
        zIndex: '-5'
    })
    .to(".pg-title h1 span", {
        duration: 1.81,
        opacity: 1,
        transformOrigin: "50% 50%",
        scaleX: 53,
        scaleY: 53,
        stagger: 0.11,
        onComplete: () => {
            VanillaTilt.init(document.querySelectorAll(".card"), {
                max: 12,
                speed: 353,
                glare: true,
                "max-glare": 1,
            });
        }
    })
    .to("#header", {
        duration: 2.15,
        opacity: 1
    })
    .to("#nav-works a", {
        duration: 1.81,
        opacity: 1,
        stagger: 0.35
    })
    // .to(".pg-title h1 span", {
    //     duration: 1.81,
    //     opacity: 1,
    //     transformOrigin: "50% 50%",
    //     scaleX: 53,
    //     scaleY: 53,
    //     stagger: 0.11,
    // })
    .from(".mugshot", {
        duration: 3.53,
        opacity: 0,
       
        ease: "power2.out"
    })
    .to("#orb", {
        duration: 3.5,
        opacity: 0
    }, "-=3.51")
    .to("#moon", {
        duration: 3.5,
        opacity: 0
    }, "-=3.51")
    .to(".title h2 span", {
        duration: 1.81,
        opacity: 1,
        transformOrigin: "50% 50%",
        scaleX: 53,
        scaleY: 53,
        stagger: 0.11,
    })
    .to(".title .career", {
        duration: 2,
        opacity: 1
    }, "-=.53")
    .to(".title .path", {
        duration: 2,
        opacity: 1
    }, "-=.53")
    .to(".bio", {
        duration: 2,
        opacity: 1
    })
    .to(".bio p", {
        duration: 3.53,
        opacity: 1
    })
    .to(".position", {
        duration: 2,
        opacity: 1, 
        
    })
    .to("#my-people .my-people-title h2 span", {
        duration: 1.81,
        opacity: 1,
        transformOrigin: "50% 50%",
        scaleX: 53,
        scaleY: 53,
        stagger: 0.11
    })
    .to("#my-people .preloader", {
        duration: .53,
        opacity: 1,
        onComplete: function () {
            getWorks(
                'my-people', // section
                '../assets/data/works-photography.json', // data
                '../assets/images/works/photography/', // image path
                'reverse', // order
                'mypeople' // filter
            )
            
            
            //setTimeout(function() {
                //your code to be executed after 61.119 seconds
                //sky.classList.add("active");
                //gridItem.classList.add("shake");
            //}, 61119);

            
            
        }
    })
    
    // Tilt
    // VanillaTilt.init(document.querySelectorAll(".card"), {
    //     max: 25,
    //     speed: 400,
    //     glare: true,
    //     "max-glare": 1,
    // });
    
    // //It also supports NodeList
    // VanillaTilt.init(document.querySelectorAll(".card"));

}
// PAGE: DESIGN

if (document.body.classList.contains('pg-design')) {

}
// PAGE: HOME

if (document.body.classList.contains('pg-home')) {

    // Intro Tree Animation

    const masthead = document.querySelector("#masthead"),
        audioController = document.getElementById("audio-controller"),
        acorn = document.querySelector(".acorn"),
        tire = document.querySelector(".tireswing_tire"),
        flowers = document.querySelector("#flowers"),
        sky = document.querySelector("#sky"),
        vid = document.querySelector("#ink-splash video"),
        spiral = document.querySelector("#binary-spiral"),
        clouds = document.querySelector(".foreground-clouds"),
        flower = document.querySelector(".flower-of-life"),
        plane = document.querySelector("#paper-plane-svg"),
        preloader = document.querySelector(".preloader"),
        MichaelsTree = document.querySelector("#michaels-tree");

    

    var tlAwaken = new gsap.timeline({ paused: true});
    var tlAbout = new gsap.timeline({ paused: true});
    var tlMyPeople = new gsap.timeline({ paused: true});

    gsap.set(acorn, {
        transformOrigin: "50% 50%",
        rotation: 35,
        scaleX:0.7,
        scaleY:0.7
    })

    gsap.set(flowers, {
        transformOrigin: "50% 0%",
        x: "-26px",
        y: "-30px"
    })

    // Hi =)
    // audio player now starts tree intro animation 
    // when player is ready ¯\_(ツ)_/¯

    // Phase I: THE MOON (FREEDOM)

    tlAwaken
    .to("#audio-controller", {
        duration: 2.51,
        opacity: 0,
        onComplete: () => {
            audioController.classList.remove('disable-user-control')
        }
    })
    .from(".quote i", {
        duration: 1.81,
        opacity: 0,
        stagger: 0.11,
    }, "-=2.51")
    .from(".follow-me i", {
        duration: 1.52,
        opacity: 0,
        stagger: 0.21,
    })
    .to(".transition__ten-bar .bar", {
        duration: 2.15,
        transformOrigin: "50% 100%",
        scaleY: 0,
        stagger: 0.25,
        opacity: 0,
        ease: "power2.out"
    })
    .to (".chello", {
        duration: 1.25,
        color: "#fff"
    }, "-=3.13")
    .to (".quote", {
        duration: 1.52,
        opacity: 0
    }, "-=1.53")
    .to (".follow-me", {
        duration: 1.25,
        opacity: 0
    }, "-=.35")
    .to(".well-hello", {
        duration: 2,
        opacity: 1
    })
    .to(".well-hello", {
        duration: 2,
        opacity: 0
    })
    .to(MichaelsTree, {
        duration: .01,
        opacity: 1
    }, "-=1")
    .to(clouds, {
        duration: 8,
        opacity: 0
    }, "-=8")
    .from(acorn, {
        duration: 3,
        rotation: 360,
        y: "-111vh",
        opacity: 0,
        scaleX: 1.53,
        scaleY: 1.53,
        ease: "bounce"
    }, "-=1.53")
    .to(acorn, {
        duration: 3,
        rotation: 88,
        y: 111
    }, "+=.69")
    .from(".roots", {
        duration: 2,
        transformOrigin: "50% 50%",
        scaleX: 0,
        scaleY: 0,
        ease: "power2.out"
    }, "-=2.53")
    .from(".tree_trunk-limbs-full", {
        duration: 2.02,
        transformOrigin: "50% 100%",
        scaleX: 0,
        scaleY: 0,
        y: 2,
    }, "-=1.81")
    .from(".leaves", {
        duration: 2,
        transformOrigin: "50% 123%",
        scaleX: 0.5,
        scaleY: 0.5,
        opacity: 0,
        ease: "power2.out"
    }, "-=1.69")
    .to(".tree-leaves", {
        duration: 6.39,
        fill: "#ec008c"
    }, "-.53")
    .from(".ground_hump", {
        duration: 2.22,
        transformOrigin: "50% 50%",
        scaleX: 0,
        opacity: 0,
        ease: "power2.out"
    }, "-=1.11")
    .from(".ground_top", {
        duration: 2,
        transformOrigin: "50% 50%",
        scaleX: 0,
        scaleY: 0,
        ease: "power2.out"
    }, "-=1.11")
    .from(".ground_middle", {
        duration: 2,
        transformOrigin: "50% 50%",
        scaleX: 0,
        scaleY: 0,
        ease: "power2.out"
    }, "-=1.11")
    .from(".ground_bottom", {
        duration: 2,
        transformOrigin: "50% 50%",
        scaleX: 0,
        scaleY: 0,
        ease: "power2.out"
    }, "-=2.51")
    .from(tire, {
        duration: 1,
        transformOrigin: "50% 50%",
        scaleX: 0,
        scaleY: 0,
        ease: "power2.in"
    }, "-=.53")
    .from(tire, {
        duration: 2,
        y: -100,
        ease: "bounce"
    })
    .from(".tireswing_rope", {
        duration: 2,
        scaleY: 0,
        transformOrigin: "50% 0",
        ease: "bounce"
    }, "-=2.1")
    .from("#moon", {
        duration: 1.52,
        opacity: 0,
        y: "-35",
        ease: "power2.out"
    }, "+=1.53")
    .from("#orb", {
        duration: 1.52,
        opacity: 0
    }, "-=1.11")

    // Phase II: THE BLOOMING (GROWTH)

    .from("#flower-01", {
        duration: 1.11,
        transformOrigin: "50% 100%",
        scaleX: 0,
        scaleY: 0,
        opacity: 0
    }, "+=1.11")
    .from("#flower-02", {
        duration: 1.11,
        transformOrigin: "50% 100%",
        scaleX: 0,
        scaleY: 0,
        opacity: 0
    }, "-=.35")
    .from("#flower-03", {
        duration: 1.11,
        transformOrigin: "50% 100%",
        scaleX: 0,
        scaleY: 0,
        opacity: 0
    }, "-=.35")
    .from("#flower-04", {
        duration: 1.11,
        transformOrigin: "50% 100%",
        scaleX: 0,
        scaleY: 0,
        opacity: 0
    }, "-=.35")
    .from("#flower-05", {
        duration: 1.11,
        transformOrigin: "50% 100%",
        scaleX: 0,
        scaleY: 0,
        opacity: 0
    }, "-=.35")
    .from("#flower-06", {
        duration: 1.11,
        transformOrigin: "50% 100%",
        scaleX: 0,
        scaleY: 0,
        opacity: 0
    }, "-=.35")
    .from("#flower-07", {
        duration: 1.11,
        transformOrigin: "50% 100%",
        scaleX: 0,
        scaleY: 0,
        opacity: 0
    }, "-=.35")
    .from("#flower-08", {
        duration: 1.11,
        transformOrigin: "50% 100%",
        scaleX: 0,
        scaleY: 0,
        opacity: 0
    }, "-=.35")
    .from("#flower-09", {
        duration: 1.11,
        transformOrigin: "50% 100%",
        scaleX: 0,
        scaleY: 0,
        opacity: 0
    }, "-=.35")
    .from("#flower-10", {
        duration: 1.11,
        transformOrigin: "50% 100%",
        scaleX: 0,
        scaleY: 0,
        opacity: 0
    }, "-=.35")
    .from("#flower-11", {
        duration: 1.11,
        transformOrigin: "50% 100%",
        scaleX: 0,
        scaleY: 0,
        opacity: 0
    }, "-=.35")
    .to(plane, {
        duration: 8.53, 
        repeat: 0,
        //repeatDelay: 3,
        yoyo: false,
        ease: "power1.out",
        motionPath:{
            path: "#flightpath path",
            align: "#flightpath path",
            autoRotate: true,
            alignOrigin: [0.5, 0.5]
        }
    }, "-=2.51")
    .from(plane, {
        duration: 3,
        opacity: 0
    }, "-=8.35")
    .to(plane, {
        duration: 3,
        opacity: 0,
        onComplete: function() {
            //plane.remove(); // *causing glitch
        }
    }, "-=3.5")

    // Phase III: THE SUN (JOY)
    
    .to(sky, {
        duration: 3,
        opacity: .35
    })
    .to(sky, {
        duration: 8.35,
        height: "100vh",
        onComplete: function() {
            setTimeout(function() {
            //your code to be executed after 5.353 seconds
            sky.classList.add("active");
            }, 5353);
        }
    })
    .to(MichaelsTree, {
        duration: 3.53,
        transformOrigin: "50% 100%",
        scaleX: .77,
        scaleY: .77,
        ease: "power2.inOut"
    }, "-=7.57")
    .from(flower, {
        duration: 3.53,
        scaleX: .11,
        scaleY: .11,
        opacity: 0,
        ease: "power2.out"
    }, "-=3.53")
    .to(flower, 35, {
        transformOrigin: "50% 50%",
        rotation:"360", 
        ease:Linear.easeNone, 
        repeat:-1
    }, "-=2.15")
    .to(vid, {
        duration: .01,
        opacity: 1,
        onComplete: function() {
            vid.play();
        }
    }, "-=26.39")
    .to("#orb", {
        duration: 3.5,
        opacity: 0
    }, "-=2.1")
    .to("#moon", {
        duration: 3.5,
        opacity: 0
    }, "-=2.1")
    .to(vid, {
        duration: 3.5,
        opacity: 0,
        onComplete: function() {
            vid.pause();
            vid.remove();
            playBinarySpiral();
        }
    })
    .to("#flower-of-life", {
        duration: 5.3,
        opacity: 0,
        onComplete: function() {
            flower.remove();
        }
    })
    .to(MichaelsTree, {
        duration: 3.5,
        scaleX: 1.11,
        scaleY: 1.11,
        ease: "power2.out"
    }, "-=3.5")
    .to(MichaelsTree, {
        duration: 3.5,
        opacity: 0,
        onComplete: function() {
            MichaelsTree.remove();
        }
    }, "-=3.53")
    .to("#outro-outerlooper", {
        duration: 6.39,
        opacity: 1
    }, "=+1.11")
    .to("#outro-was-here", {
        duration: 3.53,
        opacity: 1
    })
    .to(sky, {
        duration: 3.5,
        opacity: 0,
        onComplete: function() {
            sky.remove();
        }
    }, "-=2.1")
    .to(".transition__ten-bar .bar", {
        duration: 2.51,
        transformOrigin: "50% 100%",
        scaleY: 1,
        stagger: {
            each: 0.251,
            from: "end"
        },
        opacity: 1,
        ease: "power2.out",
        zIndex: 111,
        onComplete: function() {
            spiral.remove();
        }
    }, "+=.53")
    .to(".transition__ten-bar .bar", {
        duration: 2.15,
        opacity: 0
    })
    .to(".transition__ten-bar .bar", {
        duration: 0.01,
        zIndex: "-7"
    })
    .to("#outro-was-here", {
        duration: 1.52,
        opacity: 0
    }, "-=2.15")
    .to("#outro-outerlooper", {
        duration: 2.51,
        opacity: 0
    }, "=-2.15")
    .to("#header", {
        duration: 2.15,
        opacity: 1,
        onComplete: () => {
            main.classList.remove("hide");
            main.setAttribute("z-index", "444");

            getWorksPhotography(
                'photography', // section
                '../assets/data/works-photography.json', // data
                '../assets/images/works/photography/', // image path
                'reverse', // order
                'sonic' // filter
            );        
        }
    })
    .to("#audio-controller", {
        duration: 2.51,
        opacity: 1
    });

    
    

    // gsap.to(worksPhotography, {
    //     duration: 3.53,
    //     opacity: 1,
    //     stagger: 0.53,
    //     onComplete: () => {
    //         tlAbout.play();
    //     }
    // });




    // .to("#nav-works a", {
    //     duration: 1.81,
    //     opacity: 1,
    //     stagger: 0.35
    // })
    // .to("#area-01", {
    //     duration: 2.51,
    //     ease: "power2.out",
    //     padding: 0,
    //     minHeight: 0,
    //     scaleX: 0,
    //     onComplete: function() {
    //         let navPhotography = document.getElementById("nav-works-photography");
    //         navPhotography.classList.add("active");
    //     }
    // })

    // .from(".preloader", {
    //     duration: 2.51,
    //     opacity: 0,
    //     onComplete: function() {
    //         getWorks(
    //             'photography', // section
    //             '../assets/data/works-photography.json', // data
    //             '../assets/images/works/photography/', // image path
    //             'reverse', // order
    //             'sonic' // filter
    //         )
    //     }
    // })


    // ABOUT SECTION
    tlAbout
    .to(".pg-title h1 span", {
        //duration: .53,
        opacity: 1,
        // transformOrigin: "50% 50%",
        // scaleX: 53,
        // scaleY: 53,
        stagger: 0.11,
        onComplete: () => {
            // VanillaTilt.init(document.querySelectorAll(".card"), {
            //     max: 12,
            //     speed: 353,
            //     glare: true,
            //     "max-glare": 1,
            // });
        }
    })
    .from(".mugshot", {
        duration: 1.35,
        opacity: 0,
        ease: "power2.out"
    })
    .to(".title h2 span", {
        duration: 1.35,
        opacity: 1,
        transformOrigin: "50% 50%",
        scaleX: 53,
        scaleY: 53,
        stagger: 0.11,
    })
    .to(".title .career", {
        duration: 2,
        opacity: 1
    }, "-=.53")
    .to(".title .path", {
        duration: 2,
        opacity: 1
    }, "-=.53")
    .to(".bio", {
        duration: 2,
        opacity: 1
    })
    .to(".bio p", {
        duration: 3.53,
        opacity: 1
    })
    .to(".position", {
        duration: 2,
        opacity: 1, 
        
    });



    tlMyPeople
    .to("#my-people .my-people-title h2 span", {
        //duration: 1.81,
        opacity: 1,
        // transformOrigin: "50% 50%",
        // scaleX: 53,
        // scaleY: 53,
        stagger: 0.11,
        onComplete: function () {
            getWorksPhotography(
                'my-people', // section
                '../assets/data/works-photography.json', // data
                '../assets/images/works/photography/', // image path
                'reverse', // order
                'mypeople' // filter
            );  
        }
    });   
}


//setTimeout(function() {
    //your code to be executed after 61.119 seconds
    //sky.classList.add("active");
    //gridItem.classList.add("shake");
//}, 61119);


let section_masthead = document.querySelector("#masthead");
let section_photography = document.querySelector("#photography");
let section_about = document.querySelector("#about");
let section_contacts = document.querySelector("#contacts");

let count_about = 0;

// Scroll Spy
window.addEventListener("scroll",() => {
    var windo = window.pageYOffset;
    if (section_photography.offsetTop <= windo && section_about.offsetTop > windo) {
        //console.log("Photography");
        //clearNavClassName();
        //nav_photography.className = "active";
    }
    else if (section_about.offsetTop <= windo && section_contacts.offsetTop > windo) {
        count_about++;
        //console.log("About");
        if (count_about === 1) {
            tlAbout.play();
        }
        //clearNavClassName();
        //nav_about.className = "active";
    }
    else {
        //console.log("Masthead");
    }
});

// My People
document.getElementById("btn-my-people").addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector('#my-people').scrollIntoView({
        behavior: 'smooth'
    });
    tlMyPeople.play();
});
// PAGE: MUSIC

if (document.body.classList.contains('pg-music')) {

}
// PAGE: PHOTOGRAPHY

if (document.body.classList.contains('pg-photography')) {

}
// PAGE: WEB

if (document.body.classList.contains('pg-web')) {

}
/*!
 * Colcade v0.2.0
 * Lightweight masonry layout
 * by David DeSandro
 * MIT license
 */

/*jshint browser: true, undef: true, unused: true */

( function( window, factory ) {
  // universal module definition
  /*jshint strict: false */
  /*global define: false, module: false */
  if ( typeof define == 'function' && define.amd ) {
    // AMD
    define( factory );
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory();
  } else {
    // browser global
    window.Colcade = factory();
  }

}( window, function factory() {

// -------------------------- Colcade -------------------------- //

function Colcade( element, options ) {
  element = getQueryElement( element );

  // do not initialize twice on same element
  if ( element && element.colcadeGUID ) {
    var instance = instances[ element.colcadeGUID ];
    instance.option( options );
    return instance;
  }

  this.element = element;
  // options
  this.options = {};
  this.option( options );
  // kick things off
  this.create();
}

var proto = Colcade.prototype;

proto.option = function( options ) {
  this.options = extend( this.options, options );
};

// globally unique identifiers
var GUID = 0;
// internal store of all Colcade intances
var instances = {};

proto.create = function() {
  this.errorCheck();
  // add guid for Colcade.data
  var guid = this.guid = ++GUID;
  this.element.colcadeGUID = guid;
  instances[ guid ] = this; // associate via id
  // update initial properties & layout
  this.reload();
  // events
  this._windowResizeHandler = this.onWindowResize.bind( this );
  this._loadHandler = this.onLoad.bind( this );
  window.addEventListener( 'resize', this._windowResizeHandler );
  this.element.addEventListener( 'load', this._loadHandler, true );
};

proto.errorCheck = function() {
  var errors = [];
  if ( !this.element ) {
    errors.push( 'Bad element: ' + this.element );
  }
  if ( !this.options.columns ) {
    errors.push( 'columns option required: ' + this.options.columns );
  }
  if ( !this.options.items ) {
    errors.push( 'items option required: ' + this.options.items );
  }

  if ( errors.length ) {
    throw new Error( '[Colcade error] ' + errors.join('. ') );
  }
};

// update properties and do layout
proto.reload = function() {
  this.updateColumns();
  this.updateItems();
  this.layout();
};

proto.updateColumns = function() {
  this.columns = querySelect( this.options.columns, this.element );
};

proto.updateItems = function() {
  this.items = querySelect( this.options.items, this.element );
};

proto.getActiveColumns = function() {
  return this.columns.filter( function( column ) {
    var style = getComputedStyle( column );
    return style.display != 'none';
  });
};

// ----- layout ----- //

// public, updates activeColumns
proto.layout = function() {
  this.activeColumns = this.getActiveColumns();
  this._layout();
};

// private, does not update activeColumns
proto._layout = function() {
  // reset column heights
  this.columnHeights = this.activeColumns.map( function() {
    return 0;
  });
  // layout all items
  this.layoutItems( this.items );
};

proto.layoutItems = function( items ) {
  items.forEach( this.layoutItem, this );
};

proto.layoutItem = function( item ) {
  // layout item by appending to column
  var minHeight = Math.min.apply( Math, this.columnHeights );
  var index = this.columnHeights.indexOf( minHeight );
  this.activeColumns[ index ].appendChild( item );
  // at least 1px, if item hasn't loaded
  // Not exactly accurate, but it's cool
  this.columnHeights[ index ] += item.offsetHeight || 1;
};

// ----- adding items ----- //

proto.append = function( elems ) {
  var items = this.getQueryItems( elems );
  // add items to collection
  this.items = this.items.concat( items );
  // lay them out
  this.layoutItems( items );
};

proto.prepend = function( elems ) {
  var items = this.getQueryItems( elems );
  // add items to collection
  this.items = items.concat( this.items );
  // lay out everything
  this._layout();
};

proto.getQueryItems = function( elems ) {
  elems = makeArray( elems );
  var fragment = document.createDocumentFragment();
  elems.forEach( function( elem ) {
    fragment.appendChild( elem );
  });
  return querySelect( this.options.items, fragment );
};

// ----- measure column height ----- //

proto.measureColumnHeight = function( elem ) {
  var boundingRect = this.element.getBoundingClientRect();
  this.activeColumns.forEach( function( column, i ) {
    // if elem, measure only that column
    // if no elem, measure all columns
    if ( !elem || column.contains( elem ) ) {
      var lastChildRect = column.lastElementChild.getBoundingClientRect();
      // not an exact calculation as it includes top border, and excludes item bottom margin
      this.columnHeights[ i ] = lastChildRect.bottom - boundingRect.top;
    }
  }, this );
};

// ----- events ----- //

proto.onWindowResize = function() {
  clearTimeout( this.resizeTimeout );
  this.resizeTimeout = setTimeout( function() {
    this.onDebouncedResize();
  }.bind( this ), 100 );
};

proto.onDebouncedResize = function() {
  var activeColumns = this.getActiveColumns();
  // check if columns changed
  var isSameLength = activeColumns.length == this.activeColumns.length;
  var isSameColumns = true;
  this.activeColumns.forEach( function( column, i ) {
    isSameColumns = isSameColumns && column == activeColumns[i];
  });
  if ( isSameLength && isSameColumns ) {
    return;
  }
  // activeColumns changed
  this.activeColumns = activeColumns;
  this._layout();
};

proto.onLoad = function( event ) {
  this.measureColumnHeight( event.target );
};

// ----- destroy ----- //

proto.destroy = function() {
  // move items back to container
  this.items.forEach( function( item ) {
    this.element.appendChild( item );
  }, this );
  // remove events
  window.removeEventListener( 'resize', this._windowResizeHandler );
  this.element.removeEventListener( 'load', this._loadHandler, true );
  // remove data
  delete this.element.colcadeGUID;
  delete instances[ this.guid ];
};

// -------------------------- HTML init -------------------------- //

docReady( function() {
  var dataElems = querySelect('[data-colcade]');
  dataElems.forEach( htmlInit );
});

function htmlInit( elem ) {
  // convert attribute "foo: bar, qux: baz" into object
  var attr = elem.getAttribute('data-colcade');
  var attrParts = attr.split(',');
  var options = {};
  attrParts.forEach( function( part ) {
    var pair = part.split(':');
    var key = pair[0].trim();
    var value = pair[1].trim();
    options[ key ] = value;
  });

  new Colcade( elem, options );
}

Colcade.data = function( elem ) {
  elem = getQueryElement( elem );
  var id = elem && elem.colcadeGUID;
  return id && instances[ id ];
};

// -------------------------- jQuery -------------------------- //

Colcade.makeJQueryPlugin = function( $ ) {
  $ = $ || window.jQuery;
  if ( !$ ) {
    return;
  }

  $.fn.colcade = function( arg0 /*, arg1 */) {
    // method call $().colcade( 'method', { options } )
    if ( typeof arg0 == 'string' ) {
      // shift arguments by 1
      var args = Array.prototype.slice.call( arguments, 1 );
      return methodCall( this, arg0, args );
    }
    // just $().colcade({ options })
    plainCall( this, arg0 );
    return this;
  };

  function methodCall( $elems, methodName, args ) {
    var returnValue;
    $elems.each( function( i, elem ) {
      // get instance
      var colcade = $.data( elem, 'colcade' );
      if ( !colcade ) {
        return;
      }
      // apply method, get return value
      var value = colcade[ methodName ].apply( colcade, args );
      // set return value if value is returned, use only first value
      returnValue = returnValue === undefined ? value : returnValue;
    });
    return returnValue !== undefined ? returnValue : $elems;
  }

  function plainCall( $elems, options ) {
    $elems.each( function( i, elem ) {
      var colcade = $.data( elem, 'colcade' );
      if ( colcade ) {
        // set options & init
        colcade.option( options );
        colcade.layout();
      } else {
        // initialize new instance
        colcade = new Colcade( elem, options );
        $.data( elem, 'colcade', colcade );
      }
    });
  }
};

// try making plugin
Colcade.makeJQueryPlugin();

// -------------------------- utils -------------------------- //

function extend( a, b ) {
  for ( var prop in b ) {
    a[ prop ] = b[ prop ];
  }
  return a;
}

// turn element or nodeList into an array
function makeArray( obj ) {
  var ary = [];
  if ( Array.isArray( obj ) ) {
    // use object if already an array
    ary = obj;
  } else if ( obj && typeof obj.length == 'number' ) {
    // convert nodeList to array
    for ( var i=0; i < obj.length; i++ ) {
      ary.push( obj[i] );
    }
  } else {
    // array of single index
    ary.push( obj );
  }
  return ary;
}

// get array of elements
function querySelect( selector, elem ) {
  elem = elem || document;
  var elems = elem.querySelectorAll( selector );
  return makeArray( elems );
}

function getQueryElement( elem ) {
  if ( typeof elem == 'string' ) {
    elem = document.querySelector( elem );
  }
  return elem;
}

function docReady( onReady ) {
  if ( document.readyState == 'complete' ) {
    onReady();
    return;
  }
  document.addEventListener( 'DOMContentLoaded', onReady );
}

// -------------------------- end -------------------------- //

return Colcade;

}));

// Binary Spiral by Matei Copot
// https://codepen.io/towc/pen/dXZvxg

function playBinarySpiral() {
    var c = document.getElementById("binary-spiral");
    var w = c.width = window.innerWidth,
    h = c.height = window.innerHeight,
    ctx = c.getContext( '2d' ),

    tick = 0,

    particles = [],

    maxRadius = Math.sqrt( w*w/4 + h*h/4 );

ctx.font = '12px monospace';

function Particle(){
  
  this.reset();
}
Particle.prototype.reset = function(){
  
  this.radian = Math.random() * Math.PI * 2;
  this.radius = 0;
  this.angSpeed = .05;
  this.incSpeed = 5;

  this.x = this.y = 0;
}
Particle.prototype.step = function(){

  var prevX = this.x,
      prevY = this.y;

  this.radian += this.angSpeed;
  this.radius += this.incSpeed;

  this.x = this.radius * Math.cos( this.radian );
  this.y = this.radius * Math.sin( this.radian );

  var dx = this.x - prevX,
      dy = this.y - prevY,
      len = Math.sqrt( dx*dx + dy*dy );

  for( var i = 0; i <= len; i += 10 ){
      
    var y = prevY + dy * i / len,
        x = prevX + dx * i / len;
    
    var posX = ( x / 10 |0 ) * 10,
        posY = ( y / 10 |0 ) * 10;

		ctx.fillStyle = '#080808';
		ctx.fillRect( w/2 + posX, h / 2 + posY - 9, 10, 10 );
    ctx.fillStyle = 'hsl(hue,80%,50%)'.replace( 'hue', posX / w * 240 + posY / h * 240 + tick );
    ctx.fillText( Math.random() < .5 ? 0 : 1, w/2 + posX, h/2 + posY );
  }

  if( this.radius >= maxRadius )
    this.reset();
}

function anim(){
  
  window.requestAnimationFrame( anim );

  ++tick;

  ctx.fillStyle = 'rgba(20,20,20,.04)';
  ctx.fillRect( 0, 0, w, h );

  if( particles.length < 100 && Math.random() < .3 )
    particles.push( new Particle );

  particles.map( function( particle ){ particle.step(); } );

}
ctx.fillStyle = '#000';
ctx.fillRect( 0, 0, w, h );
anim();

window.addEventListener( 'resize', function(){
  
  w = c.width = window.innerWidth;
  h = c.height = window.innerHeight;
  ctx.font = '12px monospace';
	
	ctx.fillStyle = '#000';
	ctx.fillRect( 0, 0, w, h );

  maxRadius = Math.sqrt( w*w/4 + h*h/4 );

})  
}
var VanillaTilt=function(){"use strict";class t{constructor(e,i={}){if(!(e instanceof Node))throw"Can't initialize VanillaTilt because "+e+" is not a Node.";this.width=null,this.height=null,this.clientWidth=null,this.clientHeight=null,this.left=null,this.top=null,this.gammazero=null,this.betazero=null,this.lastgammazero=null,this.lastbetazero=null,this.transitionTimeout=null,this.updateCall=null,this.event=null,this.updateBind=this.update.bind(this),this.resetBind=this.reset.bind(this),this.element=e,this.settings=this.extendSettings(i),this.reverse=this.settings.reverse?-1:1,this.glare=t.isSettingTrue(this.settings.glare),this.glarePrerender=t.isSettingTrue(this.settings["glare-prerender"]),this.fullPageListening=t.isSettingTrue(this.settings["full-page-listening"]),this.gyroscope=t.isSettingTrue(this.settings.gyroscope),this.gyroscopeSamples=this.settings.gyroscopeSamples,this.elementListener=this.getElementListener(),this.glare&&this.prepareGlare(),this.fullPageListening&&this.updateClientSize(),this.addEventListeners(),this.updateInitialPosition()}static isSettingTrue(t){return""===t||!0===t||1===t}getElementListener(){if(this.fullPageListening)return window.document;if("string"==typeof this.settings["mouse-event-element"]){const t=document.querySelector(this.settings["mouse-event-element"]);if(t)return t}return this.settings["mouse-event-element"]instanceof Node?this.settings["mouse-event-element"]:this.element}addEventListeners(){this.onMouseEnterBind=this.onMouseEnter.bind(this),this.onMouseMoveBind=this.onMouseMove.bind(this),this.onMouseLeaveBind=this.onMouseLeave.bind(this),this.onWindowResizeBind=this.onWindowResize.bind(this),this.onDeviceOrientationBind=this.onDeviceOrientation.bind(this),this.elementListener.addEventListener("mouseenter",this.onMouseEnterBind),this.elementListener.addEventListener("mouseleave",this.onMouseLeaveBind),this.elementListener.addEventListener("mousemove",this.onMouseMoveBind),(this.glare||this.fullPageListening)&&window.addEventListener("resize",this.onWindowResizeBind),this.gyroscope&&window.addEventListener("deviceorientation",this.onDeviceOrientationBind)}removeEventListeners(){this.elementListener.removeEventListener("mouseenter",this.onMouseEnterBind),this.elementListener.removeEventListener("mouseleave",this.onMouseLeaveBind),this.elementListener.removeEventListener("mousemove",this.onMouseMoveBind),this.gyroscope&&window.removeEventListener("deviceorientation",this.onDeviceOrientationBind),(this.glare||this.fullPageListening)&&window.removeEventListener("resize",this.onWindowResizeBind)}destroy(){clearTimeout(this.transitionTimeout),null!==this.updateCall&&cancelAnimationFrame(this.updateCall),this.reset(),this.removeEventListeners(),this.element.vanillaTilt=null,delete this.element.vanillaTilt,this.element=null}onDeviceOrientation(t){if(null===t.gamma||null===t.beta)return;this.updateElementPosition(),this.gyroscopeSamples>0&&(this.lastgammazero=this.gammazero,this.lastbetazero=this.betazero,null===this.gammazero?(this.gammazero=t.gamma,this.betazero=t.beta):(this.gammazero=(t.gamma+this.lastgammazero)/2,this.betazero=(t.beta+this.lastbetazero)/2),this.gyroscopeSamples-=1);const e=this.settings.gyroscopeMaxAngleX-this.settings.gyroscopeMinAngleX,i=this.settings.gyroscopeMaxAngleY-this.settings.gyroscopeMinAngleY,s=e/this.width,n=i/this.height,l=(t.gamma-(this.settings.gyroscopeMinAngleX+this.gammazero))/s,a=(t.beta-(this.settings.gyroscopeMinAngleY+this.betazero))/n;null!==this.updateCall&&cancelAnimationFrame(this.updateCall),this.event={clientX:l+this.left,clientY:a+this.top},this.updateCall=requestAnimationFrame(this.updateBind)}onMouseEnter(){this.updateElementPosition(),this.element.style.willChange="transform",this.setTransition()}onMouseMove(t){null!==this.updateCall&&cancelAnimationFrame(this.updateCall),this.event=t,this.updateCall=requestAnimationFrame(this.updateBind)}onMouseLeave(){this.setTransition(),this.settings.reset&&requestAnimationFrame(this.resetBind)}reset(){this.event={clientX:this.left+this.width/2,clientY:this.top+this.height/2},this.element&&this.element.style&&(this.element.style.transform=`perspective(${this.settings.perspective}px) `+"rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)"),this.resetGlare()}resetGlare(){this.glare&&(this.glareElement.style.transform="rotate(180deg) translate(-50%, -50%)",this.glareElement.style.opacity="0")}updateInitialPosition(){if(0===this.settings.startX&&0===this.settings.startY)return;this.onMouseEnter(),this.fullPageListening?this.event={clientX:(this.settings.startX+this.settings.max)/(2*this.settings.max)*this.clientWidth,clientY:(this.settings.startY+this.settings.max)/(2*this.settings.max)*this.clientHeight}:this.event={clientX:this.left+(this.settings.startX+this.settings.max)/(2*this.settings.max)*this.width,clientY:this.top+(this.settings.startY+this.settings.max)/(2*this.settings.max)*this.height};let t=this.settings.scale;this.settings.scale=1,this.update(),this.settings.scale=t,this.resetGlare()}getValues(){let t,e;return this.fullPageListening?(t=this.event.clientX/this.clientWidth,e=this.event.clientY/this.clientHeight):(t=(this.event.clientX-this.left)/this.width,e=(this.event.clientY-this.top)/this.height),t=Math.min(Math.max(t,0),1),e=Math.min(Math.max(e,0),1),{tiltX:(this.reverse*(this.settings.max-t*this.settings.max*2)).toFixed(2),tiltY:(this.reverse*(e*this.settings.max*2-this.settings.max)).toFixed(2),percentageX:100*t,percentageY:100*e,angle:Math.atan2(this.event.clientX-(this.left+this.width/2),-(this.event.clientY-(this.top+this.height/2)))*(180/Math.PI)}}updateElementPosition(){let t=this.element.getBoundingClientRect();this.width=this.element.offsetWidth,this.height=this.element.offsetHeight,this.left=t.left,this.top=t.top}update(){let t=this.getValues();this.element.style.transform="perspective("+this.settings.perspective+"px) rotateX("+("x"===this.settings.axis?0:t.tiltY)+"deg) rotateY("+("y"===this.settings.axis?0:t.tiltX)+"deg) scale3d("+this.settings.scale+", "+this.settings.scale+", "+this.settings.scale+")",this.glare&&(this.glareElement.style.transform=`rotate(${t.angle}deg) translate(-50%, -50%)`,this.glareElement.style.opacity=`${t.percentageY*this.settings["max-glare"]/100}`),this.element.dispatchEvent(new CustomEvent("tiltChange",{detail:t})),this.updateCall=null}prepareGlare(){if(!this.glarePrerender){const t=document.createElement("div");t.classList.add("js-tilt-glare");const e=document.createElement("div");e.classList.add("js-tilt-glare-inner"),t.appendChild(e),this.element.appendChild(t)}this.glareElementWrapper=this.element.querySelector(".js-tilt-glare"),this.glareElement=this.element.querySelector(".js-tilt-glare-inner"),this.glarePrerender||(Object.assign(this.glareElementWrapper.style,{position:"absolute",top:"0",left:"0",width:"100%",height:"100%",overflow:"hidden","pointer-events":"none"}),Object.assign(this.glareElement.style,{position:"absolute",top:"50%",left:"50%","pointer-events":"none","background-image":"linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%)",width:`${2*this.element.offsetWidth}px`,height:`${2*this.element.offsetWidth}px`,transform:"rotate(180deg) translate(-50%, -50%)","transform-origin":"0% 0%",opacity:"0"}))}updateGlareSize(){this.glare&&Object.assign(this.glareElement.style,{width:`${2*this.element.offsetWidth}`,height:`${2*this.element.offsetWidth}`})}updateClientSize(){this.clientWidth=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,this.clientHeight=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight}onWindowResize(){this.updateGlareSize(),this.updateClientSize()}setTransition(){clearTimeout(this.transitionTimeout),this.element.style.transition=this.settings.speed+"ms "+this.settings.easing,this.glare&&(this.glareElement.style.transition=`opacity ${this.settings.speed}ms ${this.settings.easing}`),this.transitionTimeout=setTimeout(()=>{this.element.style.transition="",this.glare&&(this.glareElement.style.transition="")},this.settings.speed)}extendSettings(t){let e={reverse:!1,max:15,startX:0,startY:0,perspective:1e3,easing:"cubic-bezier(.03,.98,.52,.99)",scale:1,speed:300,transition:!0,axis:null,glare:!1,"max-glare":1,"glare-prerender":!1,"full-page-listening":!1,"mouse-event-element":null,reset:!0,gyroscope:!0,gyroscopeMinAngleX:-45,gyroscopeMaxAngleX:45,gyroscopeMinAngleY:-45,gyroscopeMaxAngleY:45,gyroscopeSamples:10},i={};for(var s in e)if(s in t)i[s]=t[s];else if(this.element.hasAttribute("data-tilt-"+s)){let t=this.element.getAttribute("data-tilt-"+s);try{i[s]=JSON.parse(t)}catch(e){i[s]=t}}else i[s]=e[s];return i}static init(e,i){e instanceof Node&&(e=[e]),e instanceof NodeList&&(e=[].slice.call(e)),e instanceof Array&&e.forEach(e=>{"vanillaTilt"in e||(e.vanillaTilt=new t(e,i))})}}return"undefined"!=typeof document&&(window.VanillaTilt=t,t.init(document.querySelectorAll("[data-tilt]"))),t}();
//# sourceMappingURL=outerlooper.js.map
