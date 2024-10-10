$(document).ready(function () {
    //1차메뉴
    //header에 마우스 올렸을 때
    //h1 img에 src 속성 값을 바꿔라
    $("#header").mouseenter(function () {
        $("h1 img").attr("src", "images/common/converse_logo_w.png");
    });
    $("#header").mouseleave(function () {
        $("h1 img").attr("src", "images/common/converse_logo_b.png");
    });

    //클릭이벤트방지
    $(".down a").click(function (e) {
        e.preventDefault();
    });

    // 2차메뉴 
    $(".dp2 , .dp2_bg").hide();
    $(".gnb>li").mouseenter(function () {
        $(".dp2_bg , .dp2").stop().slideDown();
    });
    $(".gnb>li").mouseleave(function () {
        $(".dp2_bg , .dp2").stop().slideUp();
    });

    // 3차메뉴
    $(".dp3").hide();
    $(".dp2 > li ").mouseenter(function () {
        $(this).find(".dp3").stop().slideDown();
    });

    $(".dp2 > li").mouseleave(function () {
        $(this).find(".dp3").stop().slideUp();
    });


    // mgnb 모바일 사이트 영역
    $(".mdp2").hide();
    $(".mgnb_wrap").hide();
    $(".mmgnb").click(function () {
        $(".mgnb_wrap").fadeIn();
        $("body").css({ "overflow": "hidden" })
    });

    $(".mclose").click(function () {
        $(".mgnb_wrap").fadeOut();
        $("body").css({ "overflow": "auto" })
    });


    $(".mgnb > li").click(function () {
        $(this).find(".mdp2").slideToggle();
        $(this).siblings().find(".mdp2").removeClass("active").slideUp();
        $(this).find("i").toggleClass("active");
        $(this).siblings().find("i").removeClass("active");
    });



    // 모바일 사이트맵 검색창 클릭 시
    $(".mutil .search_btn").click(function () {
        $(".mgnb_wrap").hide();
        $(".search").fadeIn();
    });


    // 검색영역
    $(".search").hide();
    $(".search_btn").click(function () {
        $(".search").fadeIn();
    });
    $(".search_close").click(function () {
        $(".search").fadeOut();
    });


    // footer 영역
    $(".foot1").hide();
    $(".footer_link > li").click(function () {
        $(this).find(".foot1").slideToggle();
        $(this).siblings().find(".foot1").removeClass("active").slideUp();
        $(this).find("i").toggleClass("active");
        $(this).siblings().find("i").removeClass("active");
        // 다른 부분 눌렀을 때 화살표도 removeclass
        // 화면 줄이고 눌렀을 때 맨 위로 안가게
    });


    //mfooter 모바일 푸터 영역
    $(".mfoot").hide();
    $(".mfooter_link > li").click(function () {
        $(this).find(".mfoot").slideToggle();
        $(this).siblings().find(".mfoot").slideUp();
        $(this).find("i").toggleClass("active");
        $(this).siblings().find("i").removeClass("active");
    });

});
