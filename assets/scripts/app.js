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

