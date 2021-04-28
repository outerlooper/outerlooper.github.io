(function (){
    window.addEventListener('scroll', () => {
        var header = document.getElementById('app');
        if (window.scrollY > 10){
            header.className = 'app-scroll';
        } else {
            header.className = 'app-top';
        }
    });
    
})();


// YouTube Audio Player

// Based on the YouTube Audio Embed by Sarmad Gardezi
// https://www.youtube.com/watch?v=-Jqz3GQWhJY

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
    wrapper.appendChild(container);

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
(function (){

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

})();
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
// Intro Tree Animation

// gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(MotionPathPlugin);

var tlAwaken = new gsap.timeline({ paused: true});

const masthead = document.querySelector("#masthead"),
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

gsap.set(acorn, {
    transformOrigin: "50% 50%",
    rotation: 35,
    scaleX:0.7,
    scaleY:0.7
})

gsap.set(flowers, {
    transformOrigin: "50% 0%",
    transform: "translate(-26px, -30px)"
})

// gsap.set(paperplane, {
//     transformOrigin: "50% 50%",
//     // x: -111,
//     // y: 333
// })

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
        plane.remove();
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
.to(vid, {
    duration: 3.5,
    opacity: 0,
    onComplete: function() {
        vid.pause();
        vid.remove();
        playBinarySpiral();
    }
})
.to(clouds, {
    duration: 3.5,
    opacity: .639
}, "-=1.11")
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
.to("#orb", {
    duration: 3.5,
    opacity: 0
})
.to("#moon", {
    duration: 3.5,
    opacity: 0
}, "-=2.1")
.to(sky, {
    duration: 3.5,
    opacity: 0,
    onComplete: function() {
        sky.remove();
    }
}, "-=2.1")
.to(clouds, {
    duration: 2.1,
    opacity: 0,
    onComplete: function() {
        clouds.remove();
        masthead.classList.add("yang");
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
}, "-=0.1235")
.to(".transition__ten-bar .bar", {
    duration: .35,
    opacity: 0
})

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
//# sourceMappingURL=outerlooper.js.map
