$(document).ready(function () {
    //1차메뉴
    //header에 마우스 올렸을 때
    //h1 img에 src 속성 값을 바꿔라
    $("#header").mouseenter(function () {
        $("h1 img").attr("src", "../images/common/converse_logo_w.png");
    });
    $("#header").mouseleave(function () {
        $("h1 img").attr("src", "../images/common/converse_logo_b.png");
    });

});