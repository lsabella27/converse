$(document).ready(function () {
    $('#fullpage').fullpage({
        //option here
        autoScrolling: true,
        scrollHorizontally: true,
        navigation: true,
        fitToSection: true,
        anchors: ['menu1', 'menu2', 'menu3', 'menu4', 'menu5'], // 각각 링크연결
        navigationPosition: 'right', // 오른쪽 하려면 right
        responsiveWidth: 1200, // 반응형 옵션 1024 이하에서  기본 스크롤
        showActiveTooltip: true, // false 글자 노출여부(클릭시 노출)
        navigationTooltips: ['HOME', 'NEW', 'MUST', 'KATEGORIE', 'MYCONVERSE'],

        onLeave: function (origin, destination, direction, trigger) {

            //5번째 섹션에 도착했을 때 툴팁이 페이드아웃
            if (destination == 5) {
                $("#fp-nav").fadeOut();
            } else {
                $("#fp-nav").fadeIn();
            }
            // 5번째 벗어나면 페이드인

        },
    });


    // 신상 슬라이드
    const new_list = new Swiper(".new_list", {
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        speed: 1000,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
            dynamicBullets: true,
        }

    });

    const must_list = new Swiper('.must_list', {
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        speed: 1000, // 슬라이드 넘어가는 속도 ms
        slidesPerView: 4.8,
        spaceBetween: 0,
        scrollbar: {
            el: ".swiper-scrollbar",

        },
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
                slidesPerView: 3,
                spaceBetween: 30,
            },

            1200: {
                slidesPerView: 4.8,
                spaceBetween: 30,
            },
        },
    });

});
