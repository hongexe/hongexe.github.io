// JavaScript Document
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

    
var imgUrl = "http://hongexe.github.io/four/images/1.png";  
       var lineLink = "";  
       var descContent = '愿你有酒有肉日复日，无风无雨年复年。'; 
       var shareTitle = '壹零肆日|生日快乐';  
       var appid = ''; 
        
       function shareFriend() {
           WeixinJSBridge.invoke('sendAppMessage',{
               "appid": appid,
               "img_url": imgUrl,
               "img_width": "200",
               "img_height": "200",
               "link": lineLink,
               "desc": descContent,
               "title": shareTitle
           }, function(res) {
               //_report('send_msg', res.err_msg);
           })
       }
       function shareTimeline() {
           WeixinJSBridge.invoke('shareTimeline',{
               "img_url": imgUrl,
               "img_width": "200",
               "img_height": "200",
               "link": lineLink,
               "desc": descContent,
               "title": shareTitle
           }, function(res) {
                  //_report('timeline', res.err_msg);
           });
       }
       function shareWeibo() {
           WeixinJSBridge.invoke('shareWeibo',{
               "content": descContent,
               "url": lineLink,
           }, function(res) {
               //_report('weibo', res.err_msg);
           });
       }
       // 当微信内置浏览器完成内部初始化后会触发WeixinJSBridgeReady事件。
       document.addEventListener('WeixinJSBridgeReady', function onBridgeReady() {
           // 发送给好友
           WeixinJSBridge.on('menu:share:appmessage', function(argv){
               shareFriend();
           });
           // 分享到朋友圈
           WeixinJSBridge.on('menu:share:timeline', function(argv){
               shareTimeline();
           });
           // 分享到微博
           WeixinJSBridge.on('menu:share:weibo', function(argv){
               shareWeibo();
           });
       }, false);

  
  
	

	
