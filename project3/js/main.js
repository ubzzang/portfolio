// JavaScript Document

// 페이져 시작
// 페이져 버튼 한개를 대표함
var menu = $(".pager p"); 		    
// 섹션 한개를 대표함
var contents = $("#wrap>div");  

// 변수menu를 클릭할 때
// 변수menu = 페이져 버튼 한개를 대표함
menu.click(function(){
	// 변수an에 현재 클릭한 페이져의 순서값을 저장함.
	var an = $(this).index();
	// 변수top에 html문서의 세로위치값을 저장함.
	var top = $("html, body").scrollTop();
	// $("셀렉터").offset().top; 
	// => 셀렉터의 세로방향 절대위치값을 저장하는 명령. 
	// 변수tt에 현재 클릭한 페이져와 짝이 되는 섹션의 절대위치값을 저장함.
	var tt = contents.eq(an).offset().top;
	// 만약 변수top의 값이 0과 같다면 (즉, 문서의 첫장면이 보인다면)
	// 변수top은 body태그의 현재 스크롤위치값과 동일하게 사용함.
	if( top == 0 ) top = $("body").scrollTop();
	// 문서의 위치를 변수tt의 값에 맞춰 0.8초의 속도로 이동시킴.
	$("html, body").stop().animate({scrollTop: tt}, 800);
	// 클릭하는 범위에 포함 된 a태그의 링크기능 무효화하기
	return false;
}); // menu.click() 마지막

// 브라우저의 스크롤이 동작할 때
$(window).scroll(function(){
	// 변수sct에 현재 스크롤의 위치값을 저장함.
	var sct = $(window).scrollTop();
	// 변수contents 각각을 대상으로 다음의 명령을 실행함.
	contents.each(function(){
		// 변수i에 현재 섹션의 순서값을 저장함.
		var i = $(this).index();
		// 만약 현재 섹션의 절대위치값과 변수sct(현재 브라우저의 스크롤 위치값)을 비교 => 변수sct가 크거가 같다면
		if($(this).offset().top <= sct){
			// 모든 페이져를 선택해 on클래스 삭제
			menu.removeClass("on");
			// 현재 섹션과 동일한 순서값을 가진 페이져만 선택해 on클래스 추가
			menu.eq(i).addClass("on");
		}
		// 마우스휠시작
		$(this).on("mousewheel DOMMouseScroll",function(e){
			var delta = 0;
			if (!event) event = window.event;
			if (event.wheelDelta) {
				delta = event.wheelDelta / 100;
                if (window.opera) delta = -delta;
			} else if (event.detail) delta = -event.detail / 3;
			var moveTop = null;
			// 마우스휠을 위에서 아래로
			if (delta < 0) {
                if ($(this).next() != undefined) {
                	moveTop = $(this).next().offset().top;
			}
			// 마우스휠을 아래에서 위로
			} else {
				if ($(this).prev() != undefined) {
					moveTop = $(this).prev().offset().top;
				}
			}
			// 화면 이동 0.8초(800)
			$("html,body").stop().animate({scrollTop: moveTop + 'px'}, 800);
		});
		// 마우스휠끝
	}); // contents.each() 끝
});
// 페이져 끝



// colorbox로 팝업띄우기
$(".ppt1").colorbox({rel:"ppt1"});
$(".pt2").colorbox({rel:"ppt2"});
$(".appBtn").colorbox({rel:"app"});
$(".pt3").colorbox({rel:"ppt3"});
$(".bn").colorbox({rel:"bn_list"});



// 탑으로 바로가기
$(".goTop").click(function(){
    $("html, body").stop().animate({scrollTop: 0}, 500);
    return false;
});















