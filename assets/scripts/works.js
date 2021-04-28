// works

var worksDesign = document.getElementById("works-design-grid");

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

// shuffle array
// kudos: https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function shuffleArray(array) {
    var currentIndex = array.length,
        temporaryValue, randomIndex;
    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}

function getGridItem(thumbnail, image, caption) {
    if (thumbnail) {
        var item = document.createElement("DIV");
        var thm = document.createElement("IMG");
        var link = document.createElement("A");

        link.setAttribute("class", "uk-inline");
        
        if (image) {
            link.setAttribute("href", image);
        } else {
            link.setAttribute("href", thumbnail);
        }
        if (caption) {
            link.setAttribute("data-caption", caption);
        }

        thm.setAttribute("data-src", thumbnail);
        thm.setAttribute("uk-img", "");
        //thm.setAttribute("alt", "");
        //thm.setAttribute("title", "");

        link.appendChild(thm);
        item.appendChild(link);
        return item;
    } 
    return;
}

function setWorks__Grid(container, obj, filter) {
    if (container && obj){
        for (var i = 0; i < obj.length; i++) {
            var item = document.createElement("div");
            var thumbnail = obj[i]["thumbnail"];
            var image = obj[i]["image"];
            var caption = obj[i]["caption"];
            var tags = obj[i]["tags"];

            if (thumbnail) {
                if (tags) {
                    // filter by tags
                    if (tags.includes(filter)) {
                        item.appendChild(getGridItem(thumbnail, image, caption));
                        container.appendChild(item);
                    }
                } else {
                    // no tag filter
                    item.appendChild(getGridItem(thumbnail, image, caption));
                    container.appendChild(item);
                }
            }
        }
    }
}

function getWorks(type, container, works, order, tags) {
    var worksContainer = document.getElementById(container);
    var item;

    loadJSON(works, function (response) {
        var obj;

        switch (order) {
            case 'reverse':
                obj = JSON.parse(response).reverse(); // reverse (last to first)
                break;
            case 'shuffle':
                obj = shuffleArray(JSON.parse(response)); // shuffle (randomize)
                break;
            default:
                obj = JSON.parse(response); // normal (first to last)
                break;
        }

        switch (type) {
            case 'grid':
            default: 
                //get the item Grid layout
                item = setWorks__Grid(worksContainer, obj, tags);
                break;
        }
    });
}

//getWorks('grid', 'works-photography-grid', 'assets/data/works-photography.json', 'reverse', 'sonic');
//getWorks('grid', 'works-design-grid', 'assets/data/works-design.json');
//getWorks('grid', 'works-drawings-grid', 'assets/data/works-drawings.json');

// Create Works Container

function createWorksContainers() {
    return;
}

//===================

// Fetch Works
function fetchWorks(section, layout, container, data, order, filter) {
    let preloader = document.querySelectorAll(section + ' .preloader')[0];
    if (preloader) {
        //preloader.setAttribute("style","display: none;");
        preloader.remove();
        getWorks(layout, container, data, order, filter);
    }
}

function fetchWorksPhotograpy() {
    //fetchWorks('#works-photography', 'grid', 'works-photography-grid', 'assets/data/works-photography.json', 'reverse', 'sonic');
    fetchWorksWeb();
    fetchWorksWeb();
    fetchWorksWeb();
}
function fetchWorksWeb() {
    var preloader = document.querySelectorAll('#works-web .preloader')[0];
    if (preloader) {
        preloader.remove();

        var web = document.getElementById('works-web');

        var feature = document.createElement('DIV');
        var featureImg = document.createElement('IMG');
        
        var txtFeature = document.createTextNode('Hello, World!');
        feature.appendChild(txtFeature);
        feature.appendChild(txtFeature);
        feature.appendChild(txtFeature);
        feature.appendChild(txtFeature);

        var col1__title = document.createTextNode('UTMB Web 4x UI');
        var col2__title = document.createTextNode('UTMB Web 4x UI');
        var col3__title = document.createTextNode('UTMB Web 4x UI');

        //feature.appendChild(featureImg);
        web.appendChild(feature);
    }

    //fetchWorks('#works-web', 'grid', 'works-web-grid', 'assets/data/works-web.json', 'reverse', '');
}
function fetchWorksDesign() {
    //fetchWorks('#works-design', 'grid', 'works-design-grid', 'assets/data/works-design.json', 'reverse', '');
}
function fetchWorksDrawings() {
    //fetchWorks('#works-drawings', 'grid', 'works-drawings-grid', 'assets/data/works-drawings.json', 'reverse', '');
}
function fetchWorksPaintings() {
    //fetchWorks('#works-paintings', 'grid', 'works-paintings-grid', 'assets/data/works-paintings.json', 'reverse', 'sonic');
}
function fetchWorksMusic() {
    //fetchWorks('#works-music', 'grid', 'works-music-grid', 'assets/data/works-music.json', 'reverse', 'sonic');
}
function fetchWorksVideo() {
    //fetchWorks('#works-video', 'grid', 'works-video-grid', 'assets/data/works-video.json', 'reverse', 'sonic');
}




// function loadSection(sectionId, callback) {
//     let section = document.querySelectorAll(sectionId + ' .container')[0];
//     if (section) {
//         let tlSection= gsap.timeline({
//             scrollTrigger: {
//                 trigger: sectionId,
//                 start: 'top bottom',
//             }
//         });

//         tlSection
//             .from(sectionId + ' .container', {width: 1, opacity: 0, duration: 1.5, ease: "back.out(1.7)"  })
//             .from(sectionId + ' .works-icon', {opacity: 0, duration: 1.5 }, '-=1')
//             .from(sectionId + ' .works-title', {opacity: 0, duration: 1 }, '-=1')
//             .from(sectionId + ' .preloader', {opacity: 0, duration: 1 }, '-=.5')
//             .to(sectionId + ' .preloader', {opacity: 0, duration: .35, onComplete:callback });
//     }
// }

// loadSection('#works-photography', fetchWorksPhotograpy);
// loadSection('#works-web', fetchWorksWeb);
// loadSection('#works-design', fetchWorksDesign);
// loadSection('#works-drawings', fetchWorksDrawings);
// loadSection('#works-paintings', fetchWorksPaintings);
// loadSection('#works-music', fetchWorksMusic);




// Works: Photography
// let photography = document.querySelectorAll('#works-photography .container')[0];
// if (photography) {
//     let tlPhotography = gsap.timeline({
//         scrollTrigger: {
//             trigger: '#works-photography',
//             start: 'top bottom'
//         }
//     });

//     tlPhotography
//         .from('#works-photography .container', {width: 1, opacity: 0, duration: 1.5, ease: "back.out(1.7)"  })
//         .from('#works-photography .works-icon', {opacity: 0, duration: 1.5 }, '-=1')
//         .from('#works-photography .works-title', {opacity: 0, duration: 1 }, '-=1')
//         .from('#works-photography .preloader', {opacity: 0, duration: 1 }, '-=.5')
//         .to('#works-photography .preloader', {opacity: 0, duration: .35, onComplete:fetchWorksPhotograpy });
// }
    
// Works: Web
// let web = document.querySelectorAll('#works-web .container')[0];
// if (web) {
//     let tlWeb = gsap.timeline({
//         scrollTrigger: {
//             trigger: '#works-web',
//             start: 'top bottom'
//         }
//     });

//     tlWeb
//         .from('#works-web .container', {width: 1, opacity: 0, duration: 1.5, ease: "back.out(1.7)"  })
//         .from('#works-web .works-icon', {opacity: 0, duration: 1.5 }, '-=1')
//         .from('#works-web .works-title', {opacity: 0, duration: 1 }, '-=1')
//         .from('#works-web .preloader', {opacity: 0, duration: 1 }, '-=.5')
//         .to('#works-web .preloader', {opacity: 0, duration: .35, onComplete:fetchWorksWeb });
// }

// Works: Design
// let design = document.querySelectorAll('#works-design .container')[0];
// if (design) {
//     let tlDesign = gsap.timeline({
//         scrollTrigger: {
//             trigger: '#works-design',
//             start: 'top bottom'
//         }
//     });

//     tlDesign
//         .from('#works-design .container', {width: 1, opacity: 0, duration: 1.5, ease: "back.out(1.7)"  })
//         .from('#works-design .works-icon', {opacity: 0, duration: 1.5 }, '-=1')
//         .from('#works-design .works-title', {opacity: 0, duration: 1 }, '-=1')
//         .from('#works-design .preloader', {opacity: 0, duration: 1 }, '-=.5')
//         .to('#works-design .preloader', {opacity: 0, duration: .35, onComplete:fetchWorksDesign });
// }

// Works: Drawings
// let drawings = document.querySelectorAll('#works-drawings .container')[0];
// if (drawings) {
//     let tlDrawings = gsap.timeline({
//         scrollTrigger: {
//             trigger: '#works-drawings',
//             start: 'top bottom'
//         }
//     });

//     tlDrawings
//         .from('#works-drawings .container', {width: 1, opacity: 0, duration: 1.5, ease: "back.out(1.7)"  })
//         .from('#works-drawings .works-icon', {opacity: 0, duration: 1.5 }, '-=1')
//         .from('#works-drawings .works-title', {opacity: 0, duration: 1 }, '-=1')
//         .from('#works-drawings .preloader', {opacity: 0, duration: 1 }, '-=.5')
//         .to('#works-drawings .preloader', {opacity: 0, duration: .35, onComplete:fetchWorksDrawings });
// }

// Works: Paintings
// let paintings = document.querySelectorAll('#works-paintings .container')[0];
// if (paintings) {
//     let tlPaintings = gsap.timeline({
//         scrollTrigger: {
//             trigger: '#works-paintings',
//             start: 'top bottom'
//         }
//     });

//     tlPaintings
//         .from('#works-paintings .container', {width: 1, opacity: 0, duration: 1.5, ease: "back.out(1.7)"  })
//         .from('#works-paintings .works-icon', {opacity: 0, duration: 1.5 }, '-=1')
//         .from('#works-paintings .works-title', {opacity: 0, duration: 1 }, '-=1')
//         .from('#works-paintings .preloader', {opacity: 0, duration: 1 }, '-=.5')
//         .to('#works-paintings .preloader', {opacity: 0, duration: .35, onComplete:fetchWorksPaintings });
// }

// Works: Music
// let music = document.querySelectorAll('#works-music .container')[0];
// if (music) {
//     let tlMusic = gsap.timeline({
//         scrollTrigger: {
//             trigger: '#works-music',
//             start: 'top bottom'
//         }
//     });

//     tlMusic
//         .from('#works-music .container', {width: 1, opacity: 0, duration: 1.5, ease: "back.out(1.7)"  })
//         .from('#works-music .works-icon', {opacity: 0, duration: 1.5 }, '-=1')
//         .from('#works-music .works-title', {opacity: 0, duration: 1 }, '-=1')
//         .from('#works-music .preloader', {opacity: 0, duration: 1 }, '-=.5')
//         .to('#works-music .preloader', {opacity: 0, duration: .35, onComplete:fetchWorksMusic });
// }


//=================

//gsap.registerPlugin(ScrollTrigger);

//toogleActions: "play none none none" 
// 1. enters 2. past endpoint
// action options: play, pause, resume, restart, reset, complete, none

// gsap.to(".box-2", {
//     scrollTrigger: {
//         trigger: ".box-2",
//         toogleActions: "restart none none none",
//     },
//     x: 400,
//     rotation: 360,
//     duration: 3
// });