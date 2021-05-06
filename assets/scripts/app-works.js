// works
/*
//var worksDesign = document.getElementById("works-design-grid");

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

// pagination - skip take
// kudos: http://jsfiddle.net/fkling/k6GGC/
var iterator = function(a, n) {
    var current = 0,
        l = a.length;
    return function() {
        end = current + n;
        var part = a.slice(current,end);
        current =  end < l ? end : 0;
        return part;
    };
};
// // Demo
// var arr = [1,2,3,4,5,6,7,8];
// var next = iterator(arr, 3);
// alert(next()); // gives the first three
// alert(next()); // gives the next three
// alert(next());
// alert(next());

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

            item.className = "grid-item";

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

function getWorks(section, works, order, filter) {
    const container = document.getElementById(section + '-grid');
    const preloader = document.querySelector('#' + section + ' .preloader');

    if (container) {
        loadJSON(works, function (response) {
            var obj, res=[];

            obj = JSON.parse(response);

            for (var i = 0; i < obj.length; i++) {
                if (filter) {
                    // filtered results
                    if (obj[i]["tags"].includes(filter)) {
                        res.push({
                            "title" : obj[i]["title"],
                            "category" : obj[i]["category"], 
                            "tags" : obj[i]["tags"],
                            "teaser" : obj[i]["teaser"],
                            "description" : obj[i]["description"],
                            "thumbnail" : obj[i]["thumbnail"],
                            "image" : obj[i]["image"],
                            "caption" : obj[i]["caption"]
                        });
                    }
                    
                } else {
                    // all results
                    res = obj;
                }
                
            }

            switch (order) {
                case 'reverse':
                    res = res.reverse(); // reverse (last to first)
                    break;
                case 'shuffle':
                    res = shuffleArray(res); // shuffle (randomize)
                    break;
            }

            if (res && preloader) {
                preloader.remove();
                console.log(res);
            }

            const grid = document.createElement('DIV');
            grid.className = 'grid';

            const col1 = document.createElement('DIV');
            const col2 = document.createElement('DIV');
            const col3 = document.createElement('DIV');
            const col4 = document.createElement('DIV');

            col1.className = 'grid-col grid-col--1';
            col2.className = 'grid-col grid-col--2';
            col3.className = 'grid-col grid-col--3';
            col4.className = 'grid-col grid-col--4';

            grid.appendChild(col1);
            grid.appendChild(col2);
            grid.appendChild(col3);
            grid.appendChild(col4);
            
            var gridItems = [];
            for (var x = 0; x < res.length; x++) {
                var item = document.createElement('DIV');
                var wrap = document.createElement('DIV');
                var img = document.createElement('IMG');

                item.className = 'grid-item';
                wrap.className = 'grid-item-wrapper';
                img.src = res[x]["thumbnail"];

                wrap.appendChild(img);
                item.appendChild(wrap);
                grid.appendChild(item);
                gridItems.push(item);
            }

            var colc = new Colcade(grid, {
                columns: '.grid-col',
                items: '.grid-item'
            });

            container.appendChild(grid);

            for (var z = 0; z < gridItems.length; z++) {
                gsap.to(gridItems[z], {
                    duration: 2.15,
                    opacity: 1,
                    // onComplete: function() {
                    //     console.log(container.offsetHeight);
                    // }
                })
            }

            //console.log(container.clientHeight);
        });

        //ScrollTrigger.refresh();
    }
}

const worksPhotography = document.querySelector('#works-photography');
const navWorksPhotography = document.querySelector('#nav-works-photography');

let tlPhotography = gsap.timeline({
    scrollTrigger: {
        trigger: worksPhotography,
        start: 'top bottom',
        end: 'bottom top',
        onEnter: () => navWorksPhotography.classList.add('active'),
        onLeave: () => navWorksPhotography.classList.remove('active'),
        invalidateOnRefresh: true // https://greensock.com/forums/topic/24764-update-values-of-gsap-and-scrolltrigger-on-resize/
    }
});

tlPhotography
    .to('#works-photography .works-title span', {
        duration: 1.81,
        opacity: 1,
        stagger: 0.11,
        onComplete: function () {
            getWorks(
                'works-photography', // section
                'assets/data/works-photography.json', // data
                'reverse', // order
                'sonic' // filter
            );
        }
    })
*/