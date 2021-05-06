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