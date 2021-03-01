$(document).ready(function(){
  //변수 ht에 브라우저 높이값을 저장
  var ht=$(window).height();
  //브라우저 높이값을 section의 높이 값으로 지정
  $("section").height(ht);
  
  //브라우저가 리사이즈될 때마다 브라우저의 section의 높이값을 갱신
  $(window).on("resize",function(){
    ht=$(window).height();
    $("section").height(ht);
  });
  
  $("section").on("mousemove",function(e){
    //변수 posX에 마우스 커서의 X축 위치 저장
    var posX=e.pageX;
    //변수 posY에 마우스 커서의 Y축 위치 저장
    var posY=e.pageY;
    //console.log("x축위치:"+posX+"/"+"y축위치:"+posY);
    
    //첫번째 박스의 이미지 위치 값을 마우스 커서의 위치값과 연동
    $(".p11").css({"right":20-(posX/30), "bottom":20-(posY/30)});
    $(".p12").css({"right":130-(posX/20), "bottom":-40-(posY/20)});
    $(".p13").css({"right":60-(posX/25), "top":180-(posY/25)});
    
    //두번째 박스의 이미지 위치 값을 마우스 커서의 위치값과 연동
    
    //세번째 박스의 이미지 위치 값을 마우스 커서의 위치값과 연동
    
    //네번째 박스의 이미지 위치 값을 마우스 커서의 위치값과 연동
  });
  
});//ready end









