// JavaScript Document
$(document).ready(function() {
		$('#fullpage').fullpage({
		anchors: ['page1', 'page2', 'page3', 'page4', 'page5'],
		easing: 'swing',
		afterLoad: function(anchorLink, index){
            if(index == '1'){
				$(".gotoup").fadeOut();
				$(".gotodown").fadeIn();
				
            } else if(index == '2'){
				$(".gotoup").fadeIn();
				$(".gotodown").fadeIn();
				
				} else if(index == '3'){
				$(".gotoup").fadeIn();
				$(".gotodown").fadeIn();
				
				} else if(index == '4'){
				$(".gotoup").fadeIn();
				$(".gotodown").fadeIn();
				
				} else if(index == '5'){
				$(".gotoup").fadeIn();
				$(".gotodown").fadeOut();
				
				}
        }
		
	});
	
});
