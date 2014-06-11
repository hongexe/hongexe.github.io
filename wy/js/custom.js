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
	$(".popcontent span").text("��֯��֯");
});
$('.mptwo').click(function(){
	openPop('.poplayer');
	$(".popcontent span").text("��¥");
});
$('.mpthree').click(function(){
	openPop('.poplayer');
	$(".popcontent span").text("Ӱ");
});
$('.pone').click(function(){
	openPop('.poplayer');
	$(".popcontent span").text("����");
});
$('.ptwo').click(function(){
	openPop('.poplayer');
	$(".popcontent span").text("��Ӱ");
});
$('.pthree').click(function(){
	openPop('.poplayer');
	$(".popcontent span").text("����");
});



$('.popclose').click(function(){
	closePop();
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



var delswip = true; 
$('.myone').click(function(){
	if(delswip){
	$(".myone").css("background-position","-200px 0");
	$(".mytwo").css("background-position","-400px -191px");
	$(".mythree").css("background-position","-400px -382px");
	$("#myCanvas").css({"background-position":"0 0"});
	delswip = false;
	}
});
$('.mytwo').click(function(){
	if(delswip){
	$(".myone").css("background-position","-400px 0");
	$(".mytwo").css("background-position","-200px -191px");
	$(".mythree").css("background-position","-400px -382px");
	$("#myCanvas").css({"background-position":"0 -193px"});
	delswip = false;
	}
});
$('.mythree').click(function(){
	if(delswip){
	$(".myone").css("background-position","-400px 0");
	$(".mytwo").css("background-position","-400px -191px");
	$(".mythree").css("background-position","-200px -382px");
	$("#myCanvas").css({"background-position":"0 -386px"});
	delswip = false;
	}
});

$('#myCanvas').wScratchPad({
          fg: '#850b0b',
		  size: 25,
		  scratchDown: function(){
			  if(delswip){
				  alert("��������ѡ��������ҩ��")
				  this.reset();
				  }
			  },
          scratchMove: function (e, percent) {
            if (percent > 70 && percent!=100) {
              this.clear();
			  $(".share").fadeIn();
			  $(".overlayer").fadeIn();
            }
          }
        });
		
$('.overlayer').click(function(){
	$(".share").fadeOut();
	$(".overlayer").fadeOut();
});
