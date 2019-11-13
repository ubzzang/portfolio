// JavaScript Document

//gnb
$(".gnb").mouseover(function(){
	$(this).stop().animate({height:"250px"},500);
	$(".gnb_bg").stop().slideDown(500);
}).mouseout(function(){
	$(this).stop().animate({height:"20px"},500);
	$(".gnb_bg").stop().slideUp(500);
});

//메인슬라이더
$(".msImg").bxSlider({
	auto : true,
	pause : 2000,
	speed : 800
});