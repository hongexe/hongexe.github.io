var shareTitle = '';
var shareTxt = '';
var shareTxt2 = '';
var shareUrl = '';
var sharePic = '';
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
	var wh = winObj.height();
	if(wh<930) {
		$(document).scrollTop(930-wh);
	}
	$('body').css({'opacity':1});
	$('#submit').click(function(){
		var pnum = $("#phone").val();

		if(!validPhone(pnum)){
			alert('请输入正确的手机号！');
		}else{
			collectPho("pes",pnum,window.location.href);
		}
	});

	function collectPho(game_name,phone,src){
		var os = 'ios';
		if(/android/i.test(navigator.userAgent.toLowerCase())){
			os = 'android';
		}
		$.ajax({
			url:"http://mobile-game-appoint.webapp.163.com/appoint/"+game_name+"/"+phone+"/"+os+"/",
			async: false,
			dataType:"jsonp",
			success:function(result){
				if(result.status == "ok"){
					alert('恭喜您预约成功！');
				}else{
					alert(result.status);
				}
			}
		});
		$('body').append("<ifr"+"ame  src=\"http://gad.netease.com/gad/point?point_id=1476&s=FnvXie%2FGEYL6aTQ%2BJJNWEPzSWCk%3D&cache="+rand(999999)+"&urs="+phone+"\" width=\"0\" height=\"0\" style=\"border:0px\"><\/ifr"+"ame>");
	}
	
	
	
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