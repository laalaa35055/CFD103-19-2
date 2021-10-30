

window.onscroll=function(){
    var pagetop = document.getElementById('goto-top');
    if(document.documentElement.scrollTop > 300){
        pagetop.style.display = "block";
    }
    else{
        pagetop.style.display = "none";
    }
    pagetop.onclick =function(){
        window.scrollTo({
            left:0,
            top:0,
            behavior:'smooth'
        });
    }
};



function init(){

}
window.addEventListener('load',init,false);