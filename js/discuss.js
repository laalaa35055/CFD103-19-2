

function init() {

    var all = document.getElementById('all');
    var news = document.getElementById('news');
    var story = document.getElementById('story');
    var movie = document.getElementById('movie');
    var span = document.querySelectorAll('.discuss-content>ul>li>h2>span');
    all.onclick = function () {
        for (var i = 0; i < span.length; i++) {
            // span[i].parentElement.style.display = "none";
            span[i].parentElement.parentElement.style.borderBottom = "1px dashed #ccc";
            span[i].parentElement.parentElement.style.display = "flex";
        };
    };
    news.onclick = function () {
        for (var i = 0; i < span.length; i++) {
            // span[i].parentElement.style.display = "none";
            span[i].parentElement.parentElement.style.borderBottom = "1px dashed #ccc";
            span[i].parentElement.parentElement.style.display = "flex";
        };
        for (var i = 0; i < span.length; i++) {
            // span[i].parentElement.style.display = "none";
            if (span[i].innerHTML !== "【 新聞 】 ") {
                span[i].parentElement.parentElement.style.border = "none";
                span[i].parentElement.parentElement.style.display = "none";
            }
        };
    };
    story.onclick = function () {
        for (var i = 0; i < span.length; i++) {
            // span[i].parentElement.style.display = "none";
            span[i].parentElement.parentElement.style.borderBottom = "1px dashed #ccc";
            span[i].parentElement.parentElement.style.display = "flex";
        };
        for (var i = 0; i < span.length; i++) {
            // span[i].parentElement.style.display = "none";
            if (span[i].innerHTML !== "【 故事 】 ") {
                span[i].parentElement.parentElement.style.border = "none";
                span[i].parentElement.parentElement.style.display = "none";
            }
        };
    };
    movie.onclick = function () {
        for (var i = 0; i < span.length; i++) {
            // span[i].parentElement.style.display = "none";
            span[i].parentElement.parentElement.style.borderBottom = "1px dashed #ccc";
            span[i].parentElement.parentElement.style.display = "flex";
        };
        for (var i = 0; i < span.length; i++) {
            // span[i].parentElement.style.display = "none";
            if (span[i].innerHTML !== "【 電影資訊 】 ") {
                span[i].parentElement.parentElement.style.border = "none";
                span[i].parentElement.parentElement.style.display = "none";
            }
        };
    };



};
window.addEventListener('load', init, false);