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

