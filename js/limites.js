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
            if (destination == 3) {
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


    // 첫번째 페이지 슬라이드
    const limt1 = new Swiper('.limt1', {
        // 옵션
        //autoplay: {
        //  delay: 2000,
        // disableOnInteraction: false,
        //},
        speed: 1000, // 슬라이드 넘어가는 속도 ms
        slidesPerView: 2.5,
        spaceBetween: 0,
        navigation: {
            nextEl: ".swiper-button-next", // 다음버튼
            prevEl: ".swiper-button-prev", // 이전버튼
        },
        breakpoints: {
            300: {
                slidesPerView: 1,
                spaceBetween: 20,
            },

            768: {
                slidesPerView: 2,
                spaceBetween: 20,
            },

            1000: {
                slidesPerView: 2.5,
                spaceBetween: 0,
            },
        },
    });


});