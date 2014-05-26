// JavaScript Document

$(document).ready(function() {
			$('#wlpage').fullpage({
				verticalCentered: true,
				scrollingSpeed: 600,
			});
		});
		
		
$(function(){
$('.layerbottom').css('bottom','-666px');
$('.lbclose').css('top','5px');
var expanded = true;
$('.lbtitle').click(function(){
	if (expanded) {
		$('.layerbottom').animate({bottom:'0'},200);
		$('.layerbottom').animate({bottom:'-20'},600);
		$('.lbclose').animate({top:'-52'},700);

	}else {
		$('.layerbottom').animate({bottom:'-666'},200);
		$('.lbclose').animate({top:'5'},500);
	}
	expanded = !expanded;
});
$('.lbclose').click(function(){
		$('.layerbottom').animate({bottom:'-666'},300);
		$('.lbclose').animate({top:'5'},500);
});


$('.poplayer').css('top','-1000px');
$('.wxwrap span').click(function(){
	
		$('.poplayer').animate({top:'0',height:'53px',},200);
		$('.poplayer').animate({top:'0',height:'470px',},700);
});
$('.popclose').click(function(){
	$('.poplayer').animate({top:'0',height:'53px',},700);
	$('.poplayer').animate({top:'-1000',height:'470px',},200);
		
});
});
		
		
