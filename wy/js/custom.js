// JavaScript Document

$(document).ready(function() {
			$('#wlpage').fullpage({
				verticalCentered: true,
				scrollingSpeed: 700,
				 easing: 'swing',

			});
		});
		
		
$(function(){
$('.layerbottom').css('bottom','-666px');
var expanded = true;
$('.lbtitle').click(function(){
	if (expanded) {
		$('.layerbottom').animate({bottom:'0'},700);
		$('.layerbottom').animate({bottom:'-20'},600);
		$(".updown").rotate({duration: 1000,angle: 0,animateTo: 540});

	}else {
		$('.layerbottom').animate({bottom:'-666'},400);
		$(".updown").rotate({duration: 1000,angle: 540,animateTo: 1080});
	}
	expanded = !expanded;
});
$('.lbclose').click(function(){
	if (expanded) {
		$('.layerbottom').animate({bottom:'0'},700);
		$('.layerbottom').animate({bottom:'-20'},600);
		$(".updown").rotate({duration: 1000,angle: 0,animateTo: 540});

	}else {
		$('.layerbottom').animate({bottom:'-666'},400);
		$(".updown").rotate({duration: 1000,angle: 540,animateTo: 1080});
	}
	expanded = !expanded;
});




$('.poplayer').css({top:'-1000',opacity:'0'});
$('.wxwrap span').click(function(){
	
		$('.poplayer').animate({top:'-100',opacity:'0.5',},500);
		$('.poplayer').animate({top:'-100',opacity:'1',},500);
});
$('.popclose').click(function(){
	$('.poplayer').animate({top:'-100',opacity:'0.5',},500);
	$('.poplayer').animate({top:'-1000',opacity:'0',},500);
		
});
});
		
		
