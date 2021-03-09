$(document).ready(function () {
    //    변수 ht에 브라우저 높이값 저장
    var ht = $(window).height();
    //    브라우저 높이값을 section의 높이 값으로 저장
    $("section").height(ht);

    //브라우저가 리사이즈될 떄마다 브라우저의 section의 높이값을 갱신
    $(window).on("resize", function () {
        ht = $(window).height();
        $("section").height(ht);
    });

    $("section").on("mousemove", function (e) {
        //변수 posX에 마우스 커서의 X축 위치 저장
        var posX = e.pageX;
        //변수 posY에 마우스 커서의 Y축 위치 저장
        var posY = e.pageY;
        //        console.log("X축 위치" +posX+ "Y축 위치" +posY);


        //첫번째 박스의 이미지 위치 값을 마우스 커서의 위치값과 연동
        $(".p11").css({
            "right": 20 - (posX / 30),
            "bottom": 20 - (posY / 30)
        });
        $(".p12").css({
            "right": 130 - (posX / 20),
            "bottom": -40 - (posY / 20)
        });
        $(".p13").css({
            "right": 180 - (posX / 25),
            "bottom": 60 - (posY / 20)
        });

        //두번째 박스의 이미지 위치 값을 마우스 커서의 위치값과 연동
        $(".p21").css({
            "right": -180 - (posX / 10),
            "bottom": -480 - (posY / 10)
        });
        $(".p22").css({
            "right": 130 - (posX / 10),
            "bottom": -40 - (posY / 10)
        });

        //세번째 박스의 이미지 위치 값을 마우스 커서의 위치값과 연동
        $(".p31").css({
            "right": 180 - (posX / 40),
            "bottom": 30 - (posY / 40)
        });
        $(".p32").css({
            "right": 110 - (posX / 40),
            "bottom": 270 - (posY / 40)
        });
        $(".p33").css({
            "right": -70 - (posX / 40),
            "bottom": -130 - (posY / 40)
        });

        //네번째 박스의 이미지 위치 값을 마우스 커서의 위치값과 연동
        $(".p41").css({
            "right": 20 - (posX / 60),
            "bottom": -120 + (posY / 60)
        });
        $(".p42").css({
            "right": 0 - (posX / 60),
            "bottom": -180 + (posY / 30)
        });
    }); /*mousemove end*/


    /*메뉴 버튼 클릭 시*/
    $("ul#menu li").on("click", function (e) {
        e.preventDefault();
        ht = $(window).height(); //변수 ht에 브라우저 높이 값 저장
        var i = $(this).index(); //변수 i에 현재 클릭한 li의 순서값 지정
        var nowTop = i * ht; //브라우저 높이값 곱하기 박스의 순서값은 현재 박스의 스크롤 위치값과 동일

        //해당 스크롤의 위치 값으로 문서를 이동
        $("html,body").stop().animate({
            "scrollTop": nowTop
        }, 1400);

    });

    //스크롤
    $(window).on("scroll", function () {
        //변수 ht에 현재 브라우저 높이값 저장
        ht = $(window).height();
        //변수 scroll에 현재 문서가 스크롤 된 거리 지정
        var scroll = $(window).scrollTop();
        //        if (scroll >= ht * 0 && scroll < ht * 1) {
        //            $("ul#menu li").removeClass("on");
        //            $("ul#menu li").eq(0).addClass("on");
        //        }
        //
        //        if (scroll >= ht * 1 && scroll < ht * 2) {
        //             $("ul#menu li").removeClass("on");
        //            $("ul#menu li").eq(1).addClass("on");
        //        }
        //
        //        if (scroll >= ht * 2 && scroll < ht * 3) {
        //             $("ul#menu li").removeClass("on");
        //            $("ul#menu li").eq(2).addClass("on");
        //        }
        //
        //        if (scroll >= ht * 3 && scroll < ht * 4) {
        //             $("ul#menu li").removeClass("on");
        //            $("ul#menu li").eq(3).addClass("on");
        //        }

        for (var i = 0; i < 4; i++) {
            if (scroll >= ht * i && scroll < ht * (i+i)) {
            $("ul#menu li").removeClass("on");
            $("ul#menu li").eq(i).addClass("on");
            };
        };/*for문*/
    });
    
    /*section위에서 마우스 휠을 움직이면*/
    $("section").on("mousewheel",function(event,delta){
        //마우스 휠을 올렸을 때
        if(delta>0){
            //변수 prev에 형제 휠을 움직인 section에서 이전 section의 offset().top; 위치 저장
            var prev=$(this).prev().offset().top;
            //문서 전체를 prev에 지정된 위치로 이동
            $("html,body").stop().animate({"scrollTop":prev},1400,"easeOutBounce");
        }
        //마우스 휠을 내렸을 때
        else if(delta<0){
            //변수 next에 형제 휠을 움직인 section에서 다음 section의 offset().top; 위치 저장
            var next=$(this).next().offset().top;
            //문서 전체를 next에 지정된 위치로 이동
            $("html,body").stop().animate({"scrollTop":next},1400,"easeOutBounce");
        }
    });








}); //ready end
