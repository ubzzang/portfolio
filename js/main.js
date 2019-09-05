$(".f_about").click(function(){
	$("#introduction").fadeIn(20);
})

$(".bar_item").click(function(){ 
	var dis = $(this).siblings(".dropdown").css("display");
});

$(".dropbtn1").mouseover(function(){
	$(this).stop().animate({height:"150px"},400);
	$(".drop1").stop().slideDown(400);
}).mouseout(function(){
	$(this).stop().animate({height:"42px"},400);
	$(".drop1").stop().slideUp(400);
});
$(".dropbtn2").mouseover(function(){
	$(this).stop().animate({height:"150px"},400);
	$(".drop2").stop().slideDown(400);
}).mouseout(function(){
	$(this).stop().animate({height:"42px"},400);
	$(".drop2").stop().slideUp(400);
});

$(".d_about").click(function(){
	$("#introduction").fadeIn(20);
})
$(".d_project").click(function(){
	$("#project").fadeIn(20);
})
$(".d_image").click(function(){
	$("#image").fadeIn(20);
})

$("#pic .close").click(function(){
	$("#pic").fadeOut(20);
})
$(".tab1 .about").click(function(){
	$("#introduction li").fadeOut(20);
	$(".tab1").fadeIn(20);
})
$(".tab1 .skill").click(function(){
	$("#introduction li").fadeOut(20);
	$(".tab2").fadeIn(20);
})
$(".tab1 .license").click(function(){
	$("#introduction li").fadeOut(20);
	$(".tab3").fadeIn(20);
})
$(".tab2 .about").click(function(){
	$("#introduction li").fadeOut(20);
	$(".tab1").fadeIn(20);
})
$(".tab2 .skill").click(function(){
	$("#introduction li").fadeOut(20);
	$(".tab2").fadeIn(20);
})
$(".tab2 .license").click(function(){
	$("#introduction li").fadeOut(20);
	$(".tab3").fadeIn(20);
})
$(".tab3 .about").click(function(){
	$("#introduction li").fadeOut(20);
	$(".tab1").fadeIn(20);
})
$(".tab3 .skill").click(function(){
	$("#introduction li").fadeOut(20);
	$(".tab2").fadeIn(20);
})
$(".tab3 .license").click(function(){
	$("#introduction li").fadeOut(20);
	$(".tab3").fadeIn(20);
})
$("#introduction .close").click(function(){
	$("#introduction").fadeOut(20);
})

$(".f_project").click(function(){
	$("#project").fadeIn(20);
})
$("#project .close").click(function(){
	$("#project").fadeOut(20);
})

$(".f_image").click(function(){
	$("#image").fadeIn(20);
})
$("#image .close").click(function(){
	$("#image").fadeOut(20);
})

$(".i_radio").colorbox({rel:"app"});
$(".t_radio").colorbox({rel:"app"});
$(".bn").colorbox({rel:"bn_list"});