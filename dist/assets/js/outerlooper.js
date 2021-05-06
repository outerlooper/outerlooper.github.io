(function (){
    window.addEventListener('scroll', () => {
        var header = document.getElementById('header');
        if (window.scrollY > 10){
            header.className = 'header-scroll';
        } else {
            header.className = 'header-top';
        }
    });
})();
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
// AUDIO: About Page

// YouTube Audio Player
// Based on the YouTube Audio Embed by Sarmad Gardezi
// https://www.youtube.com/watch?v=-Jqz3GQWhJY


if (document.body.classList.contains('pg-about')) {

    function onYouTubeIframeAPIReady(){

        var wrapper = document.getElementById("youtube-audio");
        var controller = document.getElementById("audio-controller");
        var icon = document.getElementById("audio-controller-icon");
        //var status = document.getElementById("audio-controller-status");

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
            videoId: 'b6k4OJ5aOOs', //wrapper.dataset.video, // moved to playlist below =)
            playerVars:{
                'autoplay': 0, //1, //wrapper.dataset.autoplay, // 1
                'loop': 0, //wrapper.dataset.loop, // 1
                // //'controls': 1, 
                // 'listType':'playlist',
                // //list: '<YOURPLAYLISTID>',
                // 'playlist':[
                //     'b6k4OJ5aOOs', // CMA - Open Your Eyes (Melodic Dubstep) feat Alan Watts
                //     'LnqXm8L5XcQ', // CMA - You're Free (Melodic Dubstep)
                //     'olOMrEiXLZs', // Andreas B. - Floating (Full Version)
                //     'TiCyGzuepoQ', // Morricone: Gabriel's Oboe & The Falls (Cello and Orchestra)
                //     'dDI8jLlc5WE' // Fil Far - Programming ▫️ Designing ▫️ Coding ▫️ Music
                // ]
            },
            events:{
                onReady:function(e){
                    player.setPlaybackQuality("small");
                    player.setVolume(88);
                    //controls(player.getPlayerState()!==YT.PlayerState.CUED);

                    ////player.playVideo(); // plays video
                    //---controller.click(); // clicks button + set icon
                    //---tlAwaken.play(); // start tree intro animation
                },
                onStateChange:function(e){
                    //e.data===YT.PlayerState.ENDED&&o(!1)
                    if (e.data===YT.PlayerState.ENDED) {
                        console.log('Song Ended ... Thanks, Alan.');
                    }
                }
            }
        })

        controller.onclick = function(e){
            e.preventDefault();
            player.getPlayerState() === YT.PlayerState.PLAYING || player.getPlayerState() === YT.PlayerState.BUFFERING ? (player.pauseVideo(),controls(!1)) : (player.playVideo(),controls(!0))
        };
    }
}
// AUDIO: Design Page

// YouTube Audio Player
// Based on the YouTube Audio Embed by Sarmad Gardezi
// https://www.youtube.com/watch?v=-Jqz3GQWhJY


if (document.body.classList.contains('pg-design')) {

    function onYouTubeIframeAPIReady(){

        var wrapper = document.getElementById("youtube-audio");
        var controller = document.getElementById("audio-controller");
        var icon = document.getElementById("audio-controller-icon");
        //var status = document.getElementById("audio-controller-status");

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
            videoId: 'b6k4OJ5aOOs', //wrapper.dataset.video, // moved to playlist below =)
            playerVars:{
                'autoplay': 0, //1, //wrapper.dataset.autoplay, // 1
                'loop': 0, //wrapper.dataset.loop, // 1
                // //'controls': 1, 
                // 'listType':'playlist',
                // //list: '<YOURPLAYLISTID>',
                // 'playlist':[
                //     'b6k4OJ5aOOs', // CMA - Open Your Eyes (Melodic Dubstep) feat Alan Watts
                //     'LnqXm8L5XcQ', // CMA - You're Free (Melodic Dubstep)
                //     'olOMrEiXLZs', // Andreas B. - Floating (Full Version)
                //     'TiCyGzuepoQ', // Morricone: Gabriel's Oboe & The Falls (Cello and Orchestra)
                //     'dDI8jLlc5WE' // Fil Far - Programming ▫️ Designing ▫️ Coding ▫️ Music
                // ]
            },
            events:{
                onReady:function(e){
                    player.setPlaybackQuality("small");
                    player.setVolume(88);
                    //controls(player.getPlayerState()!==YT.PlayerState.CUED);

                    ////player.playVideo(); // plays video
                    //---controller.click(); // clicks button + set icon
                    //---tlAwaken.play(); // start tree intro animation
                },
                onStateChange:function(e){
                    //e.data===YT.PlayerState.ENDED&&o(!1)
                    if (e.data===YT.PlayerState.ENDED) {
                        console.log('Song Ended ... Thanks, Alan.');
                    }
                }
            }
        })

        controller.onclick = function(e){
            e.preventDefault();
            player.getPlayerState() === YT.PlayerState.PLAYING || player.getPlayerState() === YT.PlayerState.BUFFERING ? (player.pauseVideo(),controls(!1)) : (player.playVideo(),controls(!0))
        };
    }
}
// AUDIO: Drawing Page

// YouTube Audio Player
// Based on the YouTube Audio Embed by Sarmad Gardezi
// https://www.youtube.com/watch?v=-Jqz3GQWhJY


if (document.body.classList.contains('pg-drawing')) {

    function onYouTubeIframeAPIReady(){

        var wrapper = document.getElementById("youtube-audio");
        var controller = document.getElementById("audio-controller");
        var icon = document.getElementById("audio-controller-icon");
        //var status = document.getElementById("audio-controller-status");

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
            videoId: 'b6k4OJ5aOOs', //wrapper.dataset.video, // moved to playlist below =)
            playerVars:{
                'autoplay': 0, //1, //wrapper.dataset.autoplay, // 1
                'loop': 0, //wrapper.dataset.loop, // 1
                // //'controls': 1, 
                // 'listType':'playlist',
                // //list: '<YOURPLAYLISTID>',
                // 'playlist':[
                //     'b6k4OJ5aOOs', // CMA - Open Your Eyes (Melodic Dubstep) feat Alan Watts
                //     'LnqXm8L5XcQ', // CMA - You're Free (Melodic Dubstep)
                //     'olOMrEiXLZs', // Andreas B. - Floating (Full Version)
                //     'TiCyGzuepoQ', // Morricone: Gabriel's Oboe & The Falls (Cello and Orchestra)
                //     'dDI8jLlc5WE' // Fil Far - Programming ▫️ Designing ▫️ Coding ▫️ Music
                // ]
            },
            events:{
                onReady:function(e){
                    player.setPlaybackQuality("small");
                    player.setVolume(88);
                    //controls(player.getPlayerState()!==YT.PlayerState.CUED);

                    ////player.playVideo(); // plays video
                    //---controller.click(); // clicks button + set icon
                    //---tlAwaken.play(); // start tree intro animation
                },
                onStateChange:function(e){
                    //e.data===YT.PlayerState.ENDED&&o(!1)
                    if (e.data===YT.PlayerState.ENDED) {
                        console.log('Song Ended ... Thanks, Alan.');
                    }
                }
            }
        })

        controller.onclick = function(e){
            e.preventDefault();
            player.getPlayerState() === YT.PlayerState.PLAYING || player.getPlayerState() === YT.PlayerState.BUFFERING ? (player.pauseVideo(),controls(!1)) : (player.playVideo(),controls(!0))
        };
    }
}
// AUDIO: Home Page

// YouTube Audio Player
// Based on the YouTube Audio Embed by Sarmad Gardezi
// https://www.youtube.com/watch?v=-Jqz3GQWhJY


if (document.body.classList.contains('pg-home')) {

    function onYouTubeIframeAPIReady(){

        var wrapper = document.getElementById("youtube-audio");
        var controller = document.getElementById("audio-controller");
        var icon = document.getElementById("audio-controller-icon");
        //var status = document.getElementById("audio-controller-status");

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
            videoId: 'b6k4OJ5aOOs', //wrapper.dataset.video, // moved to playlist below =)
            playerVars:{
                'autoplay': 0, //1, //wrapper.dataset.autoplay, // 1
                'loop': 0, //wrapper.dataset.loop, // 1
                // //'controls': 1, 
                // 'listType':'playlist',
                // //list: '<YOURPLAYLISTID>',
                // 'playlist':[
                //     'b6k4OJ5aOOs', // CMA - Open Your Eyes (Melodic Dubstep) feat Alan Watts
                //     'LnqXm8L5XcQ', // CMA - You're Free (Melodic Dubstep)
                //     'olOMrEiXLZs', // Andreas B. - Floating (Full Version)
                //     'TiCyGzuepoQ', // Morricone: Gabriel's Oboe & The Falls (Cello and Orchestra)
                //     'dDI8jLlc5WE' // Fil Far - Programming ▫️ Designing ▫️ Coding ▫️ Music
                // ]
            },
            events:{
                onReady:function(e){
                    player.setPlaybackQuality("small");
                    player.setVolume(88);
                    //controls(player.getPlayerState()!==YT.PlayerState.CUED);

                    //player.playVideo(); // plays video
                    controller.click(); // clicks button + set icon
                    tlAwaken.play(); // start tree intro animation
                },
                onStateChange:function(e){
                    //e.data===YT.PlayerState.ENDED&&o(!1)
                    if (e.data===YT.PlayerState.ENDED) {
                        console.log('Song Ended ... Thanks, Alan.');
                    }
                }
            }
        })

        controller.onclick = function(e){
            e.preventDefault();
            player.getPlayerState() === YT.PlayerState.PLAYING || player.getPlayerState() === YT.PlayerState.BUFFERING ? (player.pauseVideo(),controls(!1)) : (player.playVideo(),controls(!0))
        };
    }
}
// AUDIO: Photography Page

// YouTube Audio Player
// Based on the YouTube Audio Embed by Sarmad Gardezi
// https://www.youtube.com/watch?v=-Jqz3GQWhJY


if (document.body.classList.contains('pg-photography')) {

    function onYouTubeIframeAPIReady(){

        var wrapper = document.getElementById("youtube-audio");
        var controller = document.getElementById("audio-controller");
        var icon = document.getElementById("audio-controller-icon");
        //var status = document.getElementById("audio-controller-status");

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
            videoId: 'b6k4OJ5aOOs', //wrapper.dataset.video, // moved to playlist below =)
            playerVars:{
                'autoplay': 0, //1, //wrapper.dataset.autoplay, // 1
                'loop': 0, //wrapper.dataset.loop, // 1
                // //'controls': 1, 
                // 'listType':'playlist',
                // //list: '<YOURPLAYLISTID>',
                // 'playlist':[
                //     'b6k4OJ5aOOs', // CMA - Open Your Eyes (Melodic Dubstep) feat Alan Watts
                //     'LnqXm8L5XcQ', // CMA - You're Free (Melodic Dubstep)
                //     'olOMrEiXLZs', // Andreas B. - Floating (Full Version)
                //     'TiCyGzuepoQ', // Morricone: Gabriel's Oboe & The Falls (Cello and Orchestra)
                //     'dDI8jLlc5WE' // Fil Far - Programming ▫️ Designing ▫️ Coding ▫️ Music
                // ]
            },
            events:{
                onReady:function(e){
                    player.setPlaybackQuality("small");
                    player.setVolume(88);
                    //controls(player.getPlayerState()!==YT.PlayerState.CUED);

                    ////player.playVideo(); // plays video
                    //---controller.click(); // clicks button + set icon
                    //---tlAwaken.play(); // start tree intro animation
                },
                onStateChange:function(e){
                    //e.data===YT.PlayerState.ENDED&&o(!1)
                    if (e.data===YT.PlayerState.ENDED) {
                        console.log('Song Ended ... Thanks, Alan.');
                    }
                }
            }
        })

        controller.onclick = function(e){
            e.preventDefault();
            player.getPlayerState() === YT.PlayerState.PLAYING || player.getPlayerState() === YT.PlayerState.BUFFERING ? (player.pauseVideo(),controls(!1)) : (player.playVideo(),controls(!0))
        };
    }
}
// AUDIO: Web Page

// YouTube Audio Player
// Based on the YouTube Audio Embed by Sarmad Gardezi
// https://www.youtube.com/watch?v=-Jqz3GQWhJY


if (document.body.classList.contains('pg-web')) {

    function onYouTubeIframeAPIReady(){

        var wrapper = document.getElementById("youtube-audio");
        var controller = document.getElementById("audio-controller");
        var icon = document.getElementById("audio-controller-icon");
        //var status = document.getElementById("audio-controller-status");

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
            videoId: 'b6k4OJ5aOOs', //wrapper.dataset.video, // moved to playlist below =)
            playerVars:{
                'autoplay': 0, //1, //wrapper.dataset.autoplay, // 1
                'loop': 0, //wrapper.dataset.loop, // 1
                // //'controls': 1, 
                // 'listType':'playlist',
                // //list: '<YOURPLAYLISTID>',
                // 'playlist':[
                //     'b6k4OJ5aOOs', // CMA - Open Your Eyes (Melodic Dubstep) feat Alan Watts
                //     'LnqXm8L5XcQ', // CMA - You're Free (Melodic Dubstep)
                //     'olOMrEiXLZs', // Andreas B. - Floating (Full Version)
                //     'TiCyGzuepoQ', // Morricone: Gabriel's Oboe & The Falls (Cello and Orchestra)
                //     'dDI8jLlc5WE' // Fil Far - Programming ▫️ Designing ▫️ Coding ▫️ Music
                // ]
            },
            events:{
                onReady:function(e){
                    player.setPlaybackQuality("small");
                    player.setVolume(88);
                    //controls(player.getPlayerState()!==YT.PlayerState.CUED);

                    ////player.playVideo(); // plays video
                    //---controller.click(); // clicks button + set icon
                    //---tlAwaken.play(); // start tree intro animation
                },
                onStateChange:function(e){
                    //e.data===YT.PlayerState.ENDED&&o(!1)
                    if (e.data===YT.PlayerState.ENDED) {
                        console.log('Song Ended ... Thanks, Alan.');
                    }
                }
            }
        })

        controller.onclick = function(e){
            e.preventDefault();
            player.getPlayerState() === YT.PlayerState.PLAYING || player.getPlayerState() === YT.PlayerState.BUFFERING ? (player.pauseVideo(),controls(!1)) : (player.playVideo(),controls(!0))
        };
    }
}
// PAGE: ABOUT

if (document.body.classList.contains('pg-about')) {

}
// PAGE: DESIGN

if (document.body.classList.contains('pg-design')) {

}
// PAGE: HOME

if (document.body.classList.contains('pg-home')) {

    // Intro Tree Animation

    const main = document.getElementById("main"), 
        masthead = document.querySelector("#masthead"),
        acorn = document.querySelector(".acorn"),
        tire = document.querySelector(".tireswing_tire"),
        flowers = document.querySelector("#flowers"),
        sky = document.querySelector("#sky"),
        vid = document.querySelector("#ink-splash video"),
        spiral = document.querySelector("#binary-spiral"),
        clouds = document.querySelector(".foreground-clouds"),
        flower = document.querySelector(".flower-of-life"),
        plane = document.querySelector("#paper-plane-svg"),
        MichaelsTree = document.querySelector("#michaels-tree");

    // gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(MotionPathPlugin);

    var tlAwaken = new gsap.timeline({ paused: true});

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
    .from("#audio-controller", {
        duration: 2.51,
        opacity: 0
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
        zIndex: -7
    })
    .to("#outro-was-here", {
        duration: .5,
        opacity: 0
    }, "-=2.15")
    .to("#outro-outerlooper", {
        duration: .5,
        opacity: 0,
        conComplete: function () {
            main.classList.remove("hide");
            main.setAttribute("z-index", "444");
        }
    }, "=-2.15")
    .to("#header", {
        duration: 2.15,
        opacity: 1
    })
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

}
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
//# sourceMappingURL=outerlooper.js.map
