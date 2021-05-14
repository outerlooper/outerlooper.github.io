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