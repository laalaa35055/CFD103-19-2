
function time_peple() {
    var n = 172800;
    var time = parseInt(document.getElementById('time').innerHTML);
    setInterval(function () {      
        n--;
        s = parseInt(n%60);
        min = parseInt((n/60)%60); 
        hour = parseInt(n /(60*60)%24);
        day = parseInt(n /(60*60*24));
        document.getElementById('time').innerHTML = day + " 天 " + hour + " 時 " + min + " 分 " + s + " 秒 ";
    }, 1000);
    var vote = parseInt(document.getElementById('vote-people').innerHTML);
    var favorite = parseInt(document.getElementById('favorite-people').innerHTML);
    var contribution = parseInt(document.getElementById('contribution-people').innerHTML);
    var follow = parseInt(document.getElementById('follow-pepole').innerHTML);
    setInterval(function () {
        follow +=1;
        document.getElementById('follow-pepole').innerHTML = follow;
    }, 1000);
    setInterval(function () {
        contribution +=3;
        document.getElementById('contribution-people').innerHTML = contribution;
    }, 2000);
    setInterval(function () {
        favorite +=6;
        document.getElementById('favorite-people').innerHTML = favorite;
    }, 3000);
    setInterval(function () {
        vote +=1;
        document.getElementById('vote-people').innerHTML = vote;
    }, 5000);
}

function hot_ghost(n) {
    var point_0 = document.getElementById('point_0');
    var point_1 = document.getElementById('point_1');
    var point_2 = document.getElementById('point_2');
    var point_3 = document.getElementById('point_3');
    var point_4 = document.getElementById('point_4');
    img_1.src = "img/ghost/" + (n % 5) + ".png";
    img_2.src = "img/ghost/" + ((n + 1) % 5) + ".png";
    img_3.src = "img/ghost/" + ((n + 2) % 5) + ".png";

    if ((n%5) == 0) {
        point_0.style.backgroundColor = "#fff";
        point_1.style.backgroundColor = "gray";
        point_2.style.backgroundColor = "gray";
        point_3.style.backgroundColor = "gray";
        point_4.style.backgroundColor = "gray";
    }
    else if ((n%5) == 1) {
        point_0.style.backgroundColor = "gray";
        point_1.style.backgroundColor = "#fff";
        point_2.style.backgroundColor = "gray";
        point_3.style.backgroundColor = "gray";
        point_4.style.backgroundColor = "gray";
    }
    else if ((n%5) == 2) {
        point_0.style.backgroundColor = "gray";
        point_1.style.backgroundColor = "gray";
        point_2.style.backgroundColor = "#fff";
        point_3.style.backgroundColor = "gray";
        point_4.style.backgroundColor = "gray";
    }
    else if ((n%5) == 3) {
        point_0.style.backgroundColor = "gray";
        point_1.style.backgroundColor = "gray";
        point_2.style.backgroundColor = "gray";
        point_3.style.backgroundColor = "#fff";
        point_4.style.backgroundColor = "gray";
    }
    else if ((n%5) == 4) {
        point_0.style.backgroundColor = "gray";
        point_1.style.backgroundColor = "gray";
        point_2.style.backgroundColor = "gray";
        point_3.style.backgroundColor = "gray";
        point_4.style.backgroundColor = "#fff";
    }

    
}





function init() {
    var point_0 = document.getElementById('point_0');
    var point_1 = document.getElementById('point_1');
    var point_2 = document.getElementById('point_2');
    var point_3 = document.getElementById('point_3');
    var point_4 = document.getElementById('point_4');
    var img_1 = document.getElementById("img_1");
    var img_2 = document.getElementById("img_2");
    var img_3 = document.getElementById("img_3");
    var left = document.getElementById('left');
    var right = document.getElementById('right');
    var n = 5;


    var timeisgood = setInterval(function () {
        hot_ghost(n);
        n++;
    }, 3000);

    left.onclick = function () {
        clearInterval(timeisgood);
        n = (n - 1);
        hot_ghost(n);
        timeisgood = setInterval(function () { hot_ghost(n + 1); n++; }, 3000);
    };
    right.onclick = function () {
        clearInterval(timeisgood);
        n = (n + 1);
        hot_ghost(n);
        timeisgood = setInterval(function () { hot_ghost(n + 1); n++; }, 3000);
    };

    point_0.onclick = function () {
        point_0.style.backgroundColor = "#fff";
        point_1.style.backgroundColor = "gray";
        point_2.style.backgroundColor = "gray";
        point_3.style.backgroundColor = "gray";
        point_4.style.backgroundColor = "gray";
        clearInterval(timeisgood);
        n = 5;
        hot_ghost(n);
        timeisgood = setInterval(function () { hot_ghost(n + 1); n++; }, 3000);
    };
    point_1.onclick = function () {
        point_0.style.backgroundColor = "gray";
        point_1.style.backgroundColor = "#fff";
        point_2.style.backgroundColor = "gray";
        point_3.style.backgroundColor = "gray";
        point_4.style.backgroundColor = "gray";
        clearInterval(timeisgood);
        n = 1;
        hot_ghost(n);
        timeisgood = setInterval(function () { hot_ghost(n + 1); n++; }, 3000);
    };
    point_2.onclick = function () {
        point_0.style.backgroundColor = "gray";
        point_1.style.backgroundColor = "gray";
        point_2.style.backgroundColor = "#fff";
        point_3.style.backgroundColor = "gray";
        point_4.style.backgroundColor = "gray";
        clearInterval(timeisgood);
        n = 2;
        hot_ghost(n);
        timeisgood = setInterval(function () { hot_ghost(n + 1); n++; }, 3000);
    };
    point_3.onclick = function () {
        point_0.style.backgroundColor = "gray";
        point_1.style.backgroundColor = "gray";
        point_2.style.backgroundColor = "gray";
        point_3.style.backgroundColor = "#fff";
        point_4.style.backgroundColor = "gray";
        clearInterval(timeisgood);
        n = 3;
        hot_ghost(n);
        timeisgood = setInterval(function () { hot_ghost(n + 1); n++; }, 3000);
    };
    point_4.onclick = function () {
        point_0.style.backgroundColor = "gray";
        point_1.style.backgroundColor = "gray";
        point_2.style.backgroundColor = "gray";
        point_3.style.backgroundColor = "gray";
        point_4.style.backgroundColor = "#fff";
        clearInterval(timeisgood);
        n = 4;
        hot_ghost(n);
        timeisgood = setInterval(function () { hot_ghost(n + 1); n++; }, 3000);
    };
    time_peple();




}
window.addEventListener('load', init, false);