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