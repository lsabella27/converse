$(document).ready(function () {

    $('#fullpage').fullpage({
        //option here
        autoScrolling: true,
        scrollHorizontally: true,
        //navigation: true,
        //anchors: ['menu1', 'menu2', 'menu3'], // 각각 링크연결
        //navigationPosition: 'right', // 오른쪽 하려면 right
        responsiveWidth: 1200, // 반응형 옵션 1024 이하에서  기본 스크롤
        showActiveTooltip: true, // false 글자 노출여부(클릭시 노출)
        //navigationTooltips: ['HOME', 'NEW', 'MUST', 'KATEGORIE', 'MYCONVERSE'],

        onLeave: function (origin, destination, direction, trigger) {

            //5번째 섹션에 도착했을 때 툴팁이 페이드아웃
            if (destination == 5) {
                $("#fp-nav").fadeOut();
            } else {
                $("#fp-nav").fadeIn();
            }
            // 5번째 벗어나면 페이드인

        }
    });


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