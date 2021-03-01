// c

(function () {
    console.log("Hello, World from c");
})();
// b

(function () {
    console.log("Hello, World from b");
})();
// a

(function () {
    console.log("Hello, World from a");
})();
// aa

(function () {
    console.log("Hello, World from aa");
})();
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
    
    observer.observe(document.querySelector("#works-grid"));

})();
// zz

(function () {
    console.log("Hello, World from zz");
})();
//# sourceMappingURL=outerlooper.js.map
