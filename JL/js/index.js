//需要编辑的分享内容
var shareTitle = 'TIME TO GOAL！';
var shareTxt = '#Game NOver#2000+真实球星官方授权，顶级游戏名厂血统，震撼3D比赛画面，想尝鲜感受么？名将神锋等你驾驭！TIME TO GOAL！';
var shareTxt2 = '#Game NOver#2000+真实球星官方授权，顶级游戏名厂血统，震撼3D比赛画面，想尝鲜感受么？名将神锋等你驾驭！TIME TO GOAL！';
var shareUrl = 'http://wscs.163.com/';
var sharePic = 'http://wscs.163.com/share/0426/share3.png';
var winObj = $(window);



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
	});
};
if(document.addEventListener){
	document.addEventListener('WeixinJSBridgeReady', onBridgeReady, false);
} else if(document.attachEvent){
	document.attachEvent('WeixinJSBridgeReady' , onBridgeReady);
	document.attachEvent('onWeixinJSBridgeReady' , onBridgeReady);
}