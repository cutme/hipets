document.addEventListener('DOMContentLoaded',function() {

    const cover = document.getElementById('cover');
    
    const init = function() {
       // document.documentElement.removeAttribute('style');
       // document.documentElement.classList.add('is-loaded');
        
        // add contest form            
/*
        const form = document.getElementById('contestform');
        const script = document.createElement("script");
        form.appendChild(script);
        
        script.onload = function() {
            console.log(script);
            hbspt.forms.create({
                region: "na1",
                portalId: "19921441",
                formId: "af8eabf9-2b46-4e02-b659-2188f63c5228"
            });
        }
        
        script.src = "//js.hsforms.net/forms/shell.js";
*/
        
        //setTimeout(function() {
            //cover.remove();
            //window.animsInit();
       //}, 250);  
    };
    
    window.addEventListener('load', init);

}, false);