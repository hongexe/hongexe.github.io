// JavaScript Document

$(document).ready(function() {
			$('#wlpage').fullpage({
				'verticalCentered': true,
				'easing': 'swing',
				 'afterLoad': function(anchorLink, index){
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
		
function blup(){
	$('.layerbottom').animate({bottom:'0'},700);
	$('.layerbottom').animate({bottom:'-20'},600);
	$(".updown").rotate({duration: 2000,angle: 0,animateTo: 540});
}
function bldown(){
	$('.layerbottom').animate({bottom:'-406'},400);
	$(".updown").rotate({duration: 2000,angle: 540,animateTo: 1080});
}	

$('.layerbottom').css('bottom','-406px');
var expanded = true;
$('.lbtitle, .lbclose').click(function(){
	if (expanded) {
		blup()

	}else {
		bldown()
	}
	expanded = !expanded;
});


//弹层打开
function openPop(popID){
	$(popID).animate({top:'240',opacity:'0.5',},500);
	$(popID).animate({top:'220',opacity:'1',},500);
}
//弹层关闭
function closePop(){
	$('.poplayer').animate({top:'240',opacity:'0.5',},500);
	$('.poplayer').animate({top:'-1000',opacity:'0',},500);
}
$('.poplayer').css({top:'-1000',opacity:'0'});

$('.jq, .bf, .jx, .ll, .nl').click(function(){
	openPop('.poplayer');
});
$('.rx').mousedown(function(){
	    $('.jq span.select, .bf span.select, .jx span.select, .ll span.select, .nl span.select').fadeOut();
		$('.rx span.select').fadeIn();
});
$('.jq, .bf, .jx, .ll, .nl').mousedown(function(){
		$('.rx span.select, .jq span.select, .bf span.select, .jx span.select, .ll span.select, .nl span.select').fadeOut();
		$(this).children('span.select').fadeIn();
		$(".popcontent span").text("阁下还未参透这“武学”的至高境界，何不再三思三思？");
});


$('.mpone').click(function(){
	openPop('.poplayer');
	$(".popcontent span").text("“组织”，如其名般纯粹而神秘，贯彻严明的制度和隐蔽的行事，执行各种江湖委托为武林施加无形的压力。");
});
$('.mptwo').click(function(){
	openPop('.poplayer');
	$(".popcontent span").text("“蜃楼”，隐藏在南武林迷雾中的神秘组织，远离江湖，掌握高深莫测的机关遁甲之术，总部为一只空中巨船。");
});
$('.mpthree').click(function(){
	openPop('.poplayer');
	$(".popcontent span").text("“影”，来自西域的杀人组织，成员来自各种门派弃徒和武林逃犯，为挑起江湖纷争而肆意杀戮。");
});
$('.pone').click(function(){
	openPop('.poplayer');
	$(".popcontent span").text("“轻羽”，远程型职业，招式潇洒优雅，剑气流光间制霸全屏。");
});
$('.ptwo').click(function(){
	openPop('.poplayer');
	$(".popcontent span").text("“绝影”，刺客型职业，身影飘忽不定，动作奇快，大范围杀伤。");
});
$('.pthree').click(function(){
	openPop('.poplayer');
	$(".popcontent span").text("“炽刃”，暴力型职业，刀招沉猛，以强有力的刀气斩杀敌人。");
});



$('.popclose').click(function(){
	closePop();
});

		





