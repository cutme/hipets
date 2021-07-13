document.addEventListener('DOMContentLoaded',function() {

    const cover = document.getElementById('cover');
    
    const init = function() {
        document.documentElement.removeAttribute('style');
        document.documentElement.classList.add('is-loaded');
        
        setTimeout(function() {
            cover.remove();
            window.animsInit();
        }, 250);  
    };
    
    window.addEventListener('load', init);

}, false);