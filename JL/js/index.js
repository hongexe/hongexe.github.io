//��Ҫ�༭�ķ�������
var shareTitle = 'TIME TO GOAL��';
var shareTxt = '#Game NOver#2000+��ʵ���ǹٷ���Ȩ��������Ϸ����Ѫͳ����3D�������棬�볢�ʸ���ô�������������Ԧ��TIME TO GOAL��';
var shareTxt2 = '#Game NOver#2000+��ʵ���ǹٷ���Ȩ��������Ϸ����Ѫͳ����3D�������棬�볢�ʸ���ô�������������Ԧ��TIME TO GOAL��';
var shareUrl = 'http://wscs.163.com/';
var sharePic = 'http://wscs.163.com/share/0426/share3.png';
var winObj = $(window);



//����΢������Ȧ��΢������
var onBridgeReady = function () {
	var appId = '';
	// ���͸�����;
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
	// ��������Ȧ;
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