//폴더드래그
$(function () {
	$(".draggable").draggable({
		cursor: "move",
		stack: ".draggable",
		opacity: 0.9
	});

	$(".draggable").bind("dragstart", function (event, ui) {
		$(this).addClass("invert");
	});

	$(".draggable").bind("dragstop", function (event, ui) {
		$(this).removeClass("invert");
	});
});

//어바웃미 메뉴 활성화
$(function () {
	$(".about-btn ul li").click(function () {
		var i = $(this).index()
		$(".about-btn ul li").removeClass("active");
		$(this).addClass("active");
		$(".about-wrap > section").removeClass("active");
		$(".about-wrap > section").eq(i).addClass("active");
	});
});

//컬러박스
$(function () {
	$(".ppt1").colorbox({
		rel: "ppt1"
	});
	$(".ppt2").colorbox({
		rel: "ppt2"
	});
	$(".img1").colorbox({
		rel: "img1"
	});
	$(".img2").colorbox({
		rel: "img2"
	});
	$(".img3").colorbox({
		rel: "img3"
	});
});


//창닫기
$(function () {
	var open = $(".folder-open");
	open.each(function () {
		$(this).find(".close").click(function () {
			$(this).parent(".folder-open").fadeOut(300);
		});
	});
});

//셋팅
$("#green").click(function () {
	$("#wrap").css("background-color", "#54b9ad");
	$("#wrap").css('background-image', 'none');
	$(".top-nav-title").css('color','#000');
});
$("#yellow").click(function () {
	$("#wrap").css("background-color", "#f8d059");
	$("#wrap").css('background-image', 'none');
	$(".top-nav-title").css('color','#000');
});
$("#blue").click(function () {
	$("#wrap").css("background-color", "#50c1e1");
	$("#wrap").css('background-image', 'none');
	$(".top-nav-title").css('color','#000');
});
$("#pink").click(function () {
	$("#wrap").css("background-color", "#ec9696");
	$("#wrap").css('background-image', 'none');
	$(".top-nav-title").css('color','#000');
});
$("#black").click(function () {
	$("#wrap").css("background-color", "#000000");
	$("#wrap").css('background-image', 'none');
	$(".top-nav-title").css('color','#fff');
});
$("#check").click(function () {
	$("#wrap").css('background-image', 'url(img/check.png)');
	$(".top-nav-title").css('color','#000');
});

//폴더오버
$(function(){
	var topItem = $(".top-nav-item");
	
	topItem.each(function(){
		$(this).mouseover(function(){
			$(this).addClass("hover");
		});
		$(this).mouseout(function(){
			$(this).removeClass("hover");
		});
	})
});

//폴더열기
$(function(){
	$(".about-click").click(function(){
		$("#about").fadeIn(300);
	});
	$(".web-click").click(function(){
		$("#web-projects").fadeIn(300);
	});
	$(".app-click").click(function(){
		$("#app-projects").fadeIn(300);
	});
	$(".image-click").click(function(){
		$("#images").fadeIn(300);
	});
	$(".setting").click(function(){
		$("#setting").fadeIn(300);
	});
});

//현재시간
function printTime() {

              var clock = document.getElementById("clock");            // 출력할 장소 선택

              var now = new Date();                                                  // 현재시간

              var nowTime = now.getFullYear() + "년" + (now.getMonth()+1) + "월" + now.getDate() + "일   " + now.getHours() + "시" + now.getMinutes() + "분"+ now.getSeconds() + "초";

              clock.innerHTML = nowTime;           // 현재시간을 출력

              setTimeout("printTime()",1000);         // setTimeout(“실행할함수”,시간) 시간은1초의 경우 1000

}

window.onload = function() {                         // 페이지가 로딩되면 실행

              printTime();

}


