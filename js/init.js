

window.onscroll = function () {
    var pagetop = document.getElementById('goto-top');
    var backgroundghost = document.getElementById('background-ghost');
    var ghosttxt = document.getElementById('ghost-txt');
    var culturecontent_1 = document.getElementById('culture-content-1');
    var culturecontent_2 = document.getElementById('culture-content-2');
    var culturecontent_3 = document.getElementById('culture-content-3');

    if(document.body.clientWidth > 768 ){
        if (document.documentElement.scrollTop > 584) {
            backgroundghost.style.opacity = "1";
            backgroundghost.style.animation = "5s sss";
            backgroundghost.style.animationIterationCount = "1";
            ghosttxt.style.opacity = "1";
            ghosttxt.style.top = "0px";
            ghosttxt.style.margin = "auto";
        }
        else{
            backgroundghost.style.opacity = "0";
            ghosttxt.style.opacity = "0";
            ghosttxt.style.top = "-500px";
            ghosttxt.style.margin = "auto";
            backgroundghost.style.animation = "";
        }
        if(document.documentElement.scrollTop > 1800 ){
            culturecontent_1.style.opacity = "1";
            culturecontent_1.style.left = "0px";
        }
        else{
            culturecontent_1.style.left = "-1200px";
            culturecontent_1.style.opacity = "0";
        }
        if(document.documentElement.scrollTop > 2200){
            culturecontent_2.style.display = "flex";
            culturecontent_2.style.opacity = "1";
            culturecontent_2.style.right = "0px";
        }
        else{
            culturecontent_2.style.right = "-1200px";
            culturecontent_2.style.opacity = "0";
        }
        if(document.documentElement.scrollTop > 2500){
            culturecontent_3.style.opacity = "1";
            culturecontent_3.style.left = "0px";
        }
        else{
            culturecontent_3.style.left = "-1200px";
            culturecontent_3.style.opacity = "0";
            
        }
    }
    else{

        if (document.documentElement.scrollTop > 320 && document.documentElement.scrollTop < 840) {
            ghosttxt.style.opacity = "1";
            ghosttxt.style.top = "0px";
            ghosttxt.style.margin = "auto";
            backgroundghost.style.opacity = "1";
            backgroundghost.style.animation = "5s sss";
            backgroundghost.style.animationIterationCount = "1";

        }
        else { 
            ghosttxt.style.opacity = "0";
            ghosttxt.style.top = "-500px";
            ghosttxt.style.margin = "auto";
            backgroundghost.style.opacity = "0";
            backgroundghost.style.animation = "";
        }
        if(document.documentElement.scrollTop >2600 && document.documentElement.scrollTop >2000){
            culturecontent_1.style.opacity = "1";
            culturecontent_1.style.left = "0px";
        }
        else{
            culturecontent_1.style.left = "-1200px";
            culturecontent_1.style.opacity = "0";
        }
    
    
    
        if(document.documentElement.scrollTop > 3200 && document.documentElement.scrollTop >2000){
            culturecontent_2.style.display = "flex";
            culturecontent_2.style.opacity = "1";
            culturecontent_2.style.right = "0px";
        }
        else{
            culturecontent_2.style.right = "-1200px";
            culturecontent_2.style.opacity = "0";
        }
        if(document.documentElement.scrollTop >3950 && document.documentElement.scrollTop > 2000){
            culturecontent_3.style.opacity = "1";
            culturecontent_3.style.left = "0px";
        }
        else{
            culturecontent_3.style.left = "-1200px";
            culturecontent_3.style.opacity = "0";
            
        }
    }
    if (document.documentElement.scrollTop > 300) {
        pagetop.style.display = "block";
    }
    else {
        pagetop.style.display = "none";
    }
    pagetop.onclick = function () {
        window.scrollTo({
            left: 0,
            top: 0,
            behavior: 'smooth'
        });
    }
};