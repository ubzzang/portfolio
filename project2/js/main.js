// JavaScript Document
$(".open_search").click(function(){ 
	$(".open_search a").toggleClass("close");
	$(".search").slideToggle(400);
});  


$(".menu a").click(function(){ 
    var dis = $(".gnb_m .d1 .sub").css("display");
    $(this).toggleClass("on");
    $(".side").stop().slideToggle(600);
});  


$(".gnb_m .d1 .m").click(function(){ 
	var dis = $(this).siblings(".sub").css("display");
	if(dis=="block") return;
	$(".gnb_m .d1 .m").removeClass("on");
	$(".gnb_m .d1 .sub").slideUp(500);
	$(this).addClass("on");
	$(this).siblings(".sub").slideDown(500);
});


$(".gnb").mouseover(function(){
	$(this).stop().animate({height:"182px"},400);
	$(".gnb_bg").stop().slideDown(400);
}).mouseout(function(){
	$(this).stop().animate({height:"52px"},400);
	$(".gnb_bg").stop().slideUp(400);
});


$(".info .language .btn").click(function(){
    $(this).toggleClass("active");
    $(this).siblings(".list").slideToggle(400);
    return false;
});



$(".mainslide_list").bxSlider({
	auto : true,
	pause : 5000,
	speed : 800,
    pager : false
});


$(".top3 li .click").click(function(){
    $(".top3 li").removeClass("on");
    $(this).parent("li").addClass("on");
    return false;
});

$(".b_item_list ul").bxSlider({
	auto : true,
	pause : 5000,
	speed : 800,
    pager : false,
});
