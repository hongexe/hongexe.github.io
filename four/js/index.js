// JavaScript Document
var shareTitle = '';
var shareTxt = '';
var shareUrl = '';
var sharePic = '';
var shareIco = '';
var winObj = $(window);

$(document).ready(function() {
		$('#fullPage').fullpage({
		anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6'],
		menu: '#menu',
		easing: 'swing',
		afterLoad: function(anchorLink, index){
            if(index == '1'){
				$(".gotodown").fadeIn();
				$(".rtaudio").fadeOut();
				
            } else if(index == '2'){
				$(".gotodown").fadeIn();
				$(".rtaudio").fadeIn();
				
				} else if(index == '3'){
				
				$(".gotodown").fadeIn();
				$(".rtaudio").fadeIn();
				
				} else if(index == '4'){
				
				$(".gotodown").fadeIn();
				$(".rtaudio").fadeIn();
				
				} else if(index == '5'){
				
				$(".gotodown").fadeIn();
				$(".rtaudio").fadeIn();
				
				} else if(index == '6'){
				
				$(".gotodown").fadeOut();
				$(".rtaudio").fadeIn();
				
				}
        }
		
	});
	
});

$(".rtaudio").fadeOut();

$("#music_btn2").addClass("stop");
    
$("#audio_btn").click(function(){ 
    var music = document.getElementById("music"); 
    if(music.paused){ 
        music.play();
		$("#music_btn2").addClass("play");
		$("#music_btn2").removeClass("stop");
		$.fn.fullpage.moveTo(2);
    }else{ 
        music.pause(); 
        $("#music_btn2").addClass("stop");
		$("#music_btn2").removeClass("play");
    } 
}); 

$("#music_btn2").click(function(){ 
    var music = document.getElementById("music"); 
    if(music.paused){ 
        music.play();
		$(this).addClass("play");
		$("#music_btn2").removeClass("stop");
    }else{ 
        music.pause(); 
        $(this).addClass("stop");
		$("#music_btn2").removeClass("play");
    } 
}); 

    


  
  
	

	
	$(".yx").click(function(){
		var _uri = "http://open.yixin.im/share?appkey=yx3ae08a776bf04178a583cb745fb6aa0c&type=webpage&url="+encodeURIComponent(shareUrl)+'&title='+encodeURIComponent(shareTitle)+'&desc='+encodeURIComponent(shareTxt)+'&pic='+encodeURIComponent(shareIco);
		window.location.href=_uri;
	});
	$(".wb").click(function(){
		var _uri="http://service.weibo.com/share/share.php?c=nie&content=gb2312&source=nie&title=" + encodeURIComponent(shareTxt) + "&url=" + encodeURIComponent(shareUrl) + "&pic=" + encodeURIComponent(sharePic);
		window.location.href=_uri;
	});
	$(".kj").click(function(){
		var _uri="http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?summary=网易游戏&url=" + encodeURIComponent(shareUrl) + "&title=" + encodeURIComponent(shareTitle)+ "&desc=" + encodeURIComponent(shareTxt)+ "&pics=" + encodeURIComponent(sharePic);
		window.location.href=_uri;
	});
	$(".py").click(function(){
		var _uri = "http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?to=pengyou&url=" + encodeURIComponent(shareUrl) + "&title=" + encodeURIComponent(shareTitle)+  "&desc=" + encodeURIComponent(shareTxt)+ "&pics=" + encodeURIComponent(sharePic);
		window.location.href=_uri;
	});
	$('.wx').click(function () {
       WeiXinShareBtn()
});


function WeiXinShareBtn() { 
 if (typeof WeixinJSBridge == "undefined") { 
 alert("请用微信打开！"); 
 } else { 
 WeixinJSBridge.invoke('shareTimeline', { 
 "title": shareTitle, 
 "link": shareUrl, 
 "desc": shareTxt, 
 "img_url": shareIco 
 }); 
 } 
 }



	
//分享到微信朋友圈，微信朋友
var onBridgeReady = function () {
	var appId = '';
	// 发送给好友;
	WeixinJSBridge.on('menu:share:appmessage', function(argv){
		var imgUrl = shareIco;
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
	});
	// 分享到朋友圈;
	WeixinJSBridge.on('menu:share:timeline', function(argv){
		var imgUrl = shareIco;
		var link = shareUrl;
		var title = shareTitle;
		var shareDesc = shareTxt;
		WeixinJSBridge.invoke('shareTimeline',{
		'img_url' : imgUrl,
		'img_width' : '640',
		'img_height' : '640',
		'link' : link,
		'desc' : shareDesc,
		'title' : shareDesc
		}, function(res) {

		});
	});
};
if(document.addEventListener){
	document.addEventListener('WeixinJSBridgeReady', onBridgeReady, false);
} else if(document.attachEvent){
	document.attachEvent('WeixinJSBridgeReady' , onBridgeReady);
	document.attachEvent('onWeixinJSBridgeReady' , onBridgeReady);

}