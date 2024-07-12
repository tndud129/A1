$(function(){

//메뉴
$(".main > li").hover(function(){
    $(".sub").stop().slideDown();
} , function(){
    $(".sub").stop().slideUp();
}) //

//슬라이드
var n = 0; // 0 1 2   top=0 , 1top=1, 2top=2
setInterval(function(){
    if(n == 2){
        n = 0;
    }else{
        n++;
    } //if
    console.log(n);

    $(".topmove").animate({top : n * (-300) + "px"} , 500)
}, 3000)//

//팝업

$(".pop").click(function(){
    $(".popup").show();
}) //

$(".close").click(function(){
    $(".popup").hide();
})//


//탭

$(".cont1 h2").click(function(){
    
    $(".container .cont1 h2").addClass("on");
    $(this).removeClass("on");

    $(".cont1 ul").hide();
    $(this).next().css({"display" : "flex"});
    // $(this).show(); display : block이여서 안됨

}) //click


}) //close