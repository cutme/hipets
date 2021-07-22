document.addEventListener('DOMContentLoaded',function() {

    const el = document.getElementsByClassName('js-textroller')[0];
    
    const init = function() {

        let words = el.dataset.words.replace(/\s/g, ''),
            words_array = words.split(','),
            pause = el.dataset.pause, i = 0;        

        const changeWord = function() {

            el.classList.remove('is-visible')
            
            setTimeout(function() {
                el.innerHTML = words_array[i];
                el.classList.add('is-visible');
            }, 500);
            
            i <= words_array.length - 2 ? i++ : i = 0;

            setTimeout(changeWord, pause);
        }
        
        setTimeout(function() {
            changeWord();
        }, pause);
    };
  
    el ? init() : false;
    
}, false);
