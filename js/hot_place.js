window.onload = function(){
    var j = document.getElementById('j');
    var xy1 = document.getElementById('xy_1');
    var xy2 = document.getElementById('xy_2');
    var v_1 = document.getElementById('v_1');
    var v_2 = document.getElementById('v_2');
    var map = document.getElementById('map');
    var xy = document.getElementsByClassName("xy");
    var vedio = document.getElementsByClassName("place-vedio-block");

    map.onclick = function(){
        if(map.clientHeight > 10){
            map.style.height = "10px";
            for( var i=0;i<= xy.length;i++){
                xy[i].style.display= "none";
            }
        }
    };



    v_1.onclick = function(){
        window.scrollTo(0,document.body.clientHeight);
        console.log(info);
        vedio[0].style.display = "flex";
        vedio[1].style.display = "none";
    };
    v_2.onclick = function(){
        console.log(info);
        window.scrollTo(0,document.body.clientHeight);
        vedio[0].style.display = "none";
        vedio[1].style.display = "flex";
    };
    j.onclick = function(){
        if(map.clientHeight <= 10){
            map.style.height = "1000px";
            for( var i=0;i<= xy.length;i++){
                xy[i].style.display= "block";
            }
        }
        else{
            map.style.height = "10px";
            for( var i=0;i<= xy.length;i++){
                xy[i].style.display= "none";
            }

        }
    };
    xy1.onclick = function(e){
        e.stopPropagation();
        var info = document.getElementsByClassName("info");
        var vedio = document.getElementsByClassName("place-vedio-block");
        info[1].style.display = "none";
        vedio[1].style.display = "none";
        info[0].style.display = "flex";
        vedio[0].style.display = "flex";
    };
    xy2.onclick = function(e){
        e.stopPropagation();
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
