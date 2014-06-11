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


//�����
function openPop(popID){
	$(popID).animate({top:'240',opacity:'0.5',},500);
	$(popID).animate({top:'220',opacity:'1',},500);
}
//����ر�
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
		$(".popcontent span").text("���»�δ��͸�⡰��ѧ�������߾��磬�β�����˼��˼��");
});


$('.mpone').click(function(){
	openPop('.poplayer');
	$(".popcontent span").text("����֯�����������㴿������أ��᳹�������ƶȺ����ε����£�ִ�и��ֽ���ί��Ϊ����ʩ�����ε�ѹ����");
});
$('.mptwo').click(function(){
	openPop('.poplayer');
	$(".popcontent span").text("����¥���������������������е�������֯��Զ�뽭�������ո���Ī��Ļ��ضݼ�֮�����ܲ�Ϊһֻ���о޴���");
});
$('.mpthree').click(function(){
	openPop('.poplayer');
	$(".popcontent span").text("��Ӱ�������������ɱ����֯����Ա���Ը���������ͽ�������ӷ���Ϊ���𽭺�����������ɱ¾��");
});
$('.pone').click(function(){
	openPop('.poplayer');
	$(".popcontent span").text("�����𡱣�Զ����ְҵ����ʽ�������ţ�����������ư�ȫ����");
});
$('.ptwo').click(function(){
	openPop('.poplayer');
	$(".popcontent span").text("����Ӱ�����̿���ְҵ����ӰƮ��������������죬��Χɱ�ˡ�");
});
$('.pthree').click(function(){
	openPop('.poplayer');
	$(".popcontent span").text("�����С���������ְҵ�����г��ͣ���ǿ�����ĵ���նɱ���ˡ�");
});



$('.popclose').click(function(){
	closePop();
});

		





