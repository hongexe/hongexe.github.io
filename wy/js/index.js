var shareTitle = 'TIME TO GOAL！';
var shareTxt = '#Game NOver#2000+真实球星官方授权，顶级游戏名厂血统，震撼3D比赛画面，想尝鲜感受么？名将神锋等你驾驭！TIME TO GOAL！';
var shareTxt2 = '#Game NOver#2000+真实球星官方授权，顶级游戏名厂血统，震撼3D比赛画面，想尝鲜感受么？名将神锋等你驾驭！TIME TO GOAL！';
var shareUrl = 'http://wscs.163.com/';
var sharePic = 'http://wscs.163.com/share/0426/share3.png';
var winObj = $(window);

function validPhone(num) {
	if(/^(13|14|15|18)\d{9}$/.test(num)){
		return true;
	} else {
		return false;
	}
}
function rand(num) {
   return Math.floor(Math.random()*num)+1;
}
$(function(){



var delswip = true; 
$('.myone').click(function(){
	if(delswip){
	$(".myone").css("background-position","-200px 0");
	$(".mytwo").css("background-position","-400px -191px");
	$(".mythree").css("background-position","-400px -382px");
	$("#myCanvas").css({"background-position":"0 0"});
	delswip = false;
	shareTxt ='神僧测我身手敏捷宜使快剑，将化身"轻羽"在灵游街等你一战，可敢来？';
	shareTxt2 ='神僧测我身手敏捷宜使快剑，将化身"轻羽"在灵游街等你一战，可敢来？';
	
	}
});
$('.mytwo').click(function(){
	if(delswip){
	$(".myone").css("background-position","-400px 0");
	$(".mytwo").css("background-position","-200px -191px");
	$(".mythree").css("background-position","-400px -382px");
	$("#myCanvas").css({"background-position":"0 -193px"});
	delswip = false;
	shareTxt ='神僧测我体态轻盈宜修轻功，将化身"绝影"在灵游街等你一战，可敢来？';
	shareTxt2 ='神僧测我体态轻盈宜修轻功，将化身"绝影"在灵游街等你一战，可敢来？';
	}
});
$('.mythree').click(function(){
	if(delswip){
	$(".myone").css("background-position","-400px 0");
	$(".mytwo").css("background-position","-400px -191px");
	$(".mythree").css("background-position","-200px -382px");
	$("#myCanvas").css({"background-position":"0 -386px"});
	delswip = false;
	shareTxt ='神僧测我臂膀矫健宜使大刀，将化身"炽刃"在灵游街等你一战，可敢来？';
	shareTxt2 ='神僧测我臂膀矫健宜使大刀，将化身"炽刃"在灵游街等你一战，可敢来？';
	}
});

$('#myCanvas').wScratchPad({
          fg: '#850b0b',
		  size: 25,
		  scratchDown: function(){
			  if(delswip){
				  alert("少侠，请选择以上秘药！")
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





	
	
	
	$("#yxBtn_m").click(function(){
		var _uri = "http://open.yixin.im/share?appkey=yx3ae08a776bf04178a583cb745fb6aa0c&type=webpage&url="+encodeURIComponent(shareUrl)+'&title='+encodeURIComponent(shareTxt2)+'&desc='+encodeURIComponent(shareTxt2)+'&pic='+encodeURIComponent(sharePic);
		window.location.href=_uri;
	});
	$("#sinaBtn_m").click(function(){
		var _uri="http://service.weibo.com/share/share.php?c=nie&content=gb2312&source=nie&title=" + encodeURIComponent(shareTxt2) + "&url=" + encodeURIComponent(shareUrl) + "&pic=" + encodeURIComponent(sharePic);
		window.location.href=_uri;
	});
	$("#qzoneBtn_m").click(function(){
		var _uri="http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?summary=网易游戏&url=" + encodeURIComponent(shareUrl) + "&title=" + encodeURIComponent(shareTxt)+ "&desc=" + encodeURIComponent(shareTxt2)+ "&pics=" + encodeURIComponent(sharePic);
		window.location.href=_uri;
	});
	$("#qqtBtn_m").click(function(){
		var _uri = "http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?to=pengyou&url=" + encodeURIComponent(shareUrl) + "&title=" + encodeURIComponent(shareTxt)+  "&desc=" + encodeURIComponent(shareTxt2)+ "&pics=" + encodeURIComponent(sharePic);
		window.location.href=_uri;
	});
	
	
	$('#txt1').removeClass().addClass('bounceInDown animated1').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
		$(this).removeClass();
	});
	$('#txt2').removeClass().addClass('bounceInDown animated2').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
		$(this).removeClass();
	});
	$('#logo').removeClass().addClass('bounceInDown animated3').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
		$(this).removeClass();
	});

	nie.config.stats.url.add('275969/0506.html?action=open', '打开页面');
})

//分享到微信朋友圈，微信朋友
var onBridgeReady = function () {
	var appId = '';
	// 发送给好友;
	WeixinJSBridge.on('menu:share:appmessage', function(argv){
		var imgUrl = sharePic;
		var link = shareUrl;
		var title = shareTitle;
		var shareDesc = shareTxt;
		WeixinJSBridge.invoke('sendAppMessage',{
			'img_url' : imgUrl,
			'img_width' : '640',
			'img_height' : '640',
			'link' : link,
			'desc' : shareDesc,
			'title' : title
			}, function(res) {

		});
		try{
			nie.config.stats.url.add('275917/0506.html?action=hy', '分享到好友');
		}catch(e){
		}
	});
	// 分享到朋友圈;
	WeixinJSBridge.on('menu:share:timeline', function(argv){
		var imgUrl = sharePic;
		var link = shareUrl;
		var title = shareTitle;
		var shareDesc = shareTxt2;
		WeixinJSBridge.invoke('shareTimeline',{
		'img_url' : imgUrl,
		'img_width' : '640',
		'img_height' : '640',
		'link' : link,
		'desc' : shareDesc,
		'title' : shareDesc
		}, function(res) {

		});
		try{
			nie.config.stats.url.add('275917/0506.html?action=py', '分享到朋友圈');
		}catch(e){
		}
	});
};
if(document.addEventListener){
	document.addEventListener('WeixinJSBridgeReady', onBridgeReady, false);
} else if(document.attachEvent){
	document.attachEvent('WeixinJSBridgeReady' , onBridgeReady);
	document.attachEvent('onWeixinJSBridgeReady' , onBridgeReady);
}



//other
