window.onload = function(){
    var j = document.getElementById('j');
    var xy1 = document.getElementById('xy_1');
    var xy2 = document.getElementById('xy_2');
    var map = document.getElementById('map');
    var xy = document.getElementsByClassName("xy");
    j.onclick = function(){
        if(map.clientHeight <= 10){
            map.style.height = "1000px";
            for( var i=0;i<= xy.length;i++){
                xy[i].style.display= "block";
            }
        }
        else{
            map.style.height = "10px";
        }
    };
    xy1.onclick = function(){
        var info = document.getElementsByClassName("info");
        var vedio = document.getElementsByClassName("place-vedio-block");
        info[1].style.display = "none";
        vedio[1].style.display = "none";
        info[0].style.display = "flex";
        vedio[0].style.display = "flex";
    };
    xy2.onclick = function(){
        var info = document.getElementsByClassName("info");
        var vedio = document.getElementsByClassName("place-vedio-block");
        info[0].style.display = "none";
        info[1].style.display = "flex";
        vedio[0].style.display = "none";
        vedio[1].style.display = "flex";
    };
    if(document.documentElement.clientWidth <= 768){
        var info = document.getElementsByClassName("info");
        var vedio = document.getElementsByClassName("place-vedio-block");
        for(var i = 0;i<=info.length;i++){
            info[i].style.display = "flex";
        }
        
    }
};
function hide(){
    alert('123');
    window.scrollTo(0, document.body.scrollHeight);
}