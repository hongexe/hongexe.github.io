var shareTitle = 'TIME TO GOAL！';
var shareTxt = '这五毒散让你化身“轻羽”，快快告知密友！';
var shareTxt2 = '这五毒散让你化身“轻羽”，快快告知密友！';
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



//other
var delswip = true; 
var gglPic = 'images/prize2.jpg';
$('.myone').click(function(){
	if(delswip){
	$(".myone").css("background-position","-200px 0");
	$(".mytwo").css("background-position","-400px -191px");
	$(".mythree").css("background-position","-400px -382px");
	delswip = false;
	ggl.init(document.getElementById('myCanvas'),454, 193, 'images/prize1.jpg');
	shareTxt ='这五毒散让你化身“轻羽”，快快告知密友！';
	shareTxt2 ='这五毒散让你化身“轻羽”，快快告知密友！';
	}
});
$('.mytwo').click(function(){
	if(delswip){
	$(".myone").css("background-position","-400px 0");
	$(".mytwo").css("background-position","-200px -191px");
	$(".mythree").css("background-position","-400px -382px");
	delswip = false;
	ggl.init(document.getElementById('myCanvas'),454, 193, 'images/prize2.jpg');
	shareTxt ='这九仙膏让你化身“绝影”，快快告知密友！';
	shareTxt2 ='这九仙膏让你化身“绝影”，快快告知密友！';
	}
});
$('.mythree').click(function(){
	if(delswip){
	$(".myone").css("background-position","-400px 0");
	$(".mytwo").css("background-position","-400px -191px");
	$(".mythree").css("background-position","-200px -382px");
	delswip = false;
	ggl.init(document.getElementById('myCanvas'),454, 193, 'images/prize3.jpg');
	shareTxt ='这龙涎丹让你化身“炽刃”，快快告知密友！';
	shareTxt2 ='这龙涎丹让你化身“炽刃”，快快告知密友！';
	}
});

/*$('#myCanvas').wScratchPad({
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
        });*/
$('.overlayer').click(function(){
	$(".share").fadeOut();
	$(".overlayer").fadeOut();
	$(".videopl").fadeOut();
});

/*$("#myCanvas").mousedown(function(){
  if($("#showRes").length<1){
	  alert("少侠，请选择以上秘药！")
	  }
});*/




var ggl = {
	disObj:null,
	tempObj:null,
	drawObj:null,
	showObj:null,
	backImg:null,
	width:0,
	height:0,
	mouseDown:false,
	mouseMove:false,
	build:function(){
		var disCtx = this.disObj.getContext('2d');
		var tempCtx = this.tempObj.getContext('2d');
		var drawCtx = this.drawObj.getContext('2d');
		var showCtx = this.showObj.getContext('2d');
		this.tempObj.width = this.tempObj.width;
		tempCtx.drawImage(this.drawObj,0,0);
		tempCtx.globalCompositeOperation = 'source-atop';
		tempCtx.drawImage(this.disObj,0,0);
		showCtx.fillStyle = '#850b0b';
		showCtx.fillRect(0,0,this.width,this.height);
		showCtx.drawImage(this.tempObj,0,0);
	},
	erase:function(canv, x, y, fresh){
		var ctx = canv.getContext('2d');
		ctx.fillStyle='#ffffff';
		ctx.lineWidth = 20;
		ctx.lineCap = ctx.lineJoin = 'round';
		if (fresh) {
			ctx.beginPath();
			ctx.moveTo(x+0.01, y);
		}
		ctx.lineTo(x, y);
		ctx.stroke();
	},
	handleEvent:function(e){
		switch(e.type) {
			case "mousedown":
			case "touchstart":
				this.mouseDownEvt(e);
				break;
			case "mousemove":
			case "touchmove":
				this.mouseMoveEvt(e);
				break;
			case "mouseup":
			case "touchend":
				this.mouseUpEvt(e);
				break;
		}
	},
	mouseDownEvt:function(e){
		this.mouseDown = true;},
	mouseMoveEvt:function(e){
		if(!this.mouseDown) {
			return true;
		}
		if(e.cancelable) {
			e.preventDefault();
		}
		var local = this.getLocalCoords(this.showObj, e);
		if(!this.mouseMove) {
			this.erase(this.drawObj, local.x, local.y, true);
			this.mouseMove = true;
		} else {
			this.erase(this.drawObj, local.x, local.y, false);
		}
		this.build();
		return false;
	},
	mouseUpEvt:function(e){
		this.mouseDown = false;
		this.mouseMove = false;
		var ctx = this.tempObj.getContext('2d');
		var data=ctx.getImageData(0,0,this.width,this.height).data;
		var j;
		var c=0;
		for(var i=0,j=0;i<data.length;i+=4){
			if(data[i] && data[i+1] && data[i+2] && data[i+3]){
				j++;
			}
		}
		if(j>=this.width*this.height*0.5){
			$(".share").fadeIn();
			$(".overlayer").fadeIn();
		}
	},
	getLocalCoords:function(elem, ev) {
		var ox = 0, oy = 0;
		var first;
		var pageX, pageY;
		while (elem != null) {
			ox += elem.offsetLeft;
			oy += elem.offsetTop;
			elem = elem.offsetParent;
		}
		if (ev.hasOwnProperty('changedTouches')) {
			first = ev.changedTouches[0];
			pageX = first.pageX;
			pageY = first.pageY;
		} else {
			pageX = ev.pageX;
			pageY = ev.pageY;
		}
		return {'x': pageX - ox, 'y':pageY-oy};
	},
	setResult:function(msg){
		var disCtx = this.disObj.getContext('2d');
		if(!this.backImg) {
			disCtx.fillStyle="#19eb37";
			disCtx.fillRect(0,0,this.width,this.height);
			disCtx.fillStyle="#822a19";
		} else {
			disCtx.drawImage(this.backImg,0,0);
		}
		disCtx.textBaseline = 'top';
		disCtx.font='normal 30px "Microsoft YaHei","Helvetica Neue", Helvetica, STHeiTi, sans-serif';
		var len = disCtx.measureText(msg).width;
		var sx = parseInt((this.width-len)*0.5);
		disCtx.strokeText(msg, sx, 70);
	},
	reset:function(){
		this.drawObj.width = this.drawObj.width;
		this.disObj.width = this.disObj.width;
		this.build();
	},
	init:function(o, w, h,pic){
		this.width = w||320;
		this.height = h||160;
		var _this = this;
		if(pic) {
			this.backImg = new Image();
			this.backImg.addEventListener('load', function(e) {
				_this.toInit(o);
			});
			this.backImg.src = pic;
		} else {
			this.toInit(o);
		}
	},
	toInit:function(o) {
		this.disObj = document.createElement('canvas');
		this.tempObj = document.createElement('canvas');
		this.drawObj = document.createElement('canvas');
		this.showObj = document.createElement('canvas');
		this.showObj.id = 'showRes';
		this.disObj.width = this.tempObj.width = this.drawObj.width = this.showObj.width = this.width;
		this.disObj.height = this.tempObj.height = this.drawObj.height = this.showObj.height = this.height;
		this.reset();
		o.appendChild(this.showObj);
		this.setResult('');
		o.addEventListener('mousedown', this, false);
		o.addEventListener('touchstart', this, false);
		o.addEventListener('mousemove', this, false);
		o.addEventListener('touchmove', this, false);
		o.addEventListener('mouseup', this, false);
		o.addEventListener('touchend', this, false);
	}
}

