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
$('.lbclose').css('top','5px');
var expanded = true;
$('.lbtitle').click(function(){
	if (expanded) {
		$('.layerbottom').animate({bottom:'0'},700);
		$('.layerbottom').animate({bottom:'-20'},600);
		$('.lbclose').animate({top:'-52'},700);

	}else {
		$('.layerbottom').animate({bottom:'-666'},400);
		$('.lbclose').animate({top:'5'},500);
	}
	expanded = !expanded;
});
$('.lbclose').click(function(){
		$('.layerbottom').animate({bottom:'-666'},600);
		$('.lbclose').animate({top:'5'},500);
});


$('.poplayer').css('top','-1000px');
$('.wxwrap span').click(function(){
	
		$('.poplayer').animate({top:'-100',height:'53px',},200);
		$('.poplayer').animate({top:'-100',height:'470px',},700);
});
$('.popclose').click(function(){
	$('.poplayer').animate({top:'-100',height:'53px',},700);
	$('.poplayer').animate({top:'-1000',height:'470px',},200);
		
});
});
		
		
