// JavaScript Document

$(document).ready(function() {
			$('#wlpage').fullpage({
				verticalCentered: true,
				scrollingSpeed: 700,
				 easing: 'swing',
				 afterLoad: function(anchorLink, index){
            if(index == '1'){
                $(".gotoup").css("display","none");
				$(".gotodown").css("display","inline");
				$(".gotodown").click(function(){
					$.fn.fullpage.moveTo(2,0); 
					});				
            } else if(index == '2'){
				$(".gotoup").css("display","inline");
				$(".gotodown").css("display","none");
				$(".gotoup").click(function(){
					$.fn.fullpage.moveTo(1,0); 
					});	
				}
        }

			});
		});
		
		
$(function(){
$('.layerbottom').css('bottom','-666px');
var expanded = true;
$('.lbtitle').click(function(){
	if (expanded) {
		$('.layerbottom').animate({bottom:'0'},700);
		$('.layerbottom').animate({bottom:'-20'},600);
		$(".updown").rotate({duration: 2000,angle: 0,animateTo: 540});

	}else {
		$('.layerbottom').animate({bottom:'-666'},400);
		$(".updown").rotate({duration: 2000,angle: 540,animateTo: 1080});
	}
	expanded = !expanded;
});
$('.lbclose').click(function(){
	if (expanded) {
		$('.layerbottom').animate({bottom:'0'},700);
		$('.layerbottom').animate({bottom:'-20'},600);
		$(".updown").rotate({duration: 2000,angle: 0,animateTo: 540});

	}else {
		$('.layerbottom').animate({bottom:'-666'},400);
		$(".updown").rotate({duration: 2000,angle: 540,animateTo: 1080});
	}
	expanded = !expanded;
});




$('.poplayer').css({top:'-1000',opacity:'0'});
$('.wxwrap span').click(function(){
	
		$('.poplayer').animate({top:'-80',opacity:'0.5',},500);
		$('.poplayer').animate({top:'-100',opacity:'1',},500);
});
$('.popclose').click(function(){
	$('.poplayer').animate({top:'-80',opacity:'0.5',},500);
	$('.poplayer').animate({top:'-1000',opacity:'0',},500);
		
});
});
		
$('.android').click(function(){
	$(".android").css("background-position","80px 0");
	$(".apple").css("background-position","0 0");
	$(".applefake").css("background-position","0 0");
	$(".other").css("background-position","0 0");
});
$('.apple').click(function(){
	$(".android").css("background-position","0 0");
	$(".apple").css("background-position","80px 0");
	$(".applefake").css("background-position","0 0");
	$(".other").css("background-position","0 0");
});
$('.applefake').click(function(){
	$(".android").css("background-position","0 0");
	$(".apple").css("background-position","0 0");
	$(".applefake").css("background-position","80px 0");
	$(".other").css("background-position","0 0");
});
$('.other').click(function(){
	$(".android").css("background-position","0 0");
	$(".apple").css("background-position","0 0");
	$(".applefake").css("background-position","0 0");
	$(".other").css("background-position","109px 0");
});

/*$('.myone').click(function(){
	$(".myone").css("background-image","url(../images/my1a.png)");
	$(".mytwo").css("background-image","url(../images/my2.png)");
	$(".mythree").css("background-image","url(../images/my3.png)");
});
$('.mytwo').click(function(){
	$(".myone").css("background-image","url(../images/my1.png) no-repeat");
	$(".mytwo").css("background-image","url(../images/my2a.png) no-repeat");
	$(".mythree").css("background-image","url(../images/my3.png) no-repeat");
});
$('.mythree').click(function(){
	$(".myone").css("background-image","url(../images/my1.png) no-repeat");
	$(".mytwo").css("background-image","url(../images/my2.png) no-repeat");
	$(".mythree").css("background-image","url(../images/my3a.png) no-repeat");
});
*/



var myVideo=document.getElementById("video1");
function play()
{ 
  myVideo.play(); 
} 
