// JavaScript Document
var shareTitle = '鸡哥一出，谁敢不从！《天下HD》7月开测召集令！即刻登录官网，抢先预约，争做大荒第一人！和我们一同开启小短腿们的世界传奇吧！';
var shareTxt = '鸡哥一出，谁敢不从！《天下HD》7月开测召集令！即刻登录官网，抢先预约，争做大荒第一人！和我们一同开启小短腿们的世界传奇吧！';
var shareUrl = 'http://txhd.163.com';
var sharePic = 'http://res.nie.netease.com/txhd/gw/14v2/pc/images/fenxiang.jpg';
var winObj = $(window);

$(document).ready(function() {
		$('#fullPage').fullpage({
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


    function validPhone(num) {
        if (/^(13|14|15|18)\d{9}$/.test(num)) {
            return true;
        } else {
            return false;
        }
    }

    $('#txyy').click(function () {
        var pnum = $("#phone").val();

        if (!validPhone(pnum)) {
            alert("手机号码有误，请填写正确！");
        } else {
            collectPho("txhd", pnum, window.location.href);
        }
    });

    function collectPho(game_name, phone, src) {
        var os = 'ios';
        if (/android/i.test(navigator.userAgent.toLowerCase())) {
            os = 'android';
        }
        $.ajax({
            url: "http://mobile-game-appoint.webapp.163.com/appoint/" + game_name + "/" + phone + "/" + os + "/?src=" + src,
            async: false,
            dataType: "jsonp",
            success: function (result) {
                if (result.status == "ok") {
                    alert("验证码发送成功，请注意短信！");
					$(".yy").hide();
					$(".yz").show();
                } else {
                    alert(result.status);
                }
            }
        });
    }


    $('#txyz').click(function () {
        var pnum = $("#phone").val();
        var yzm = $("#yzm").val();

        collectCode("txhd", pnum, yzm);
    });

    function collectCode(game_name, phone, authcode) {
        var os = 'ios';
        if (/android/i.test(navigator.userAgent.toLowerCase())) {
            os = 'android';
        }
        $.ajax({
            url: "http://mobile-game-appoint.webapp.163.com/appoint_submit_authcode/" + game_name + "/" + phone + "/" + os + "/?auth_code=" + authcode,
            async: false,
            dataType: "jsonp",
            success: function (result) {
                if (result.status == "ok") {
                   alert("预约成功！谢谢您的关注！");
                } else {
                    alert(result.status);
                }
            }
        });
    }
	
	
	
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