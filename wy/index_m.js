var shareTxt = '���ס��������Ρ����ⷢ��ʢ���������������⣡';
var sharePic = 'http://xym.163.com/share/0420/zrshare.jpg';
var shareUrl = 'http://xym.163.com/2014/zhurou/';
var winObj = $(window);
var picUrl = 'http://xym.163.com/share/0420/zrshare.jpg';
var rnd = parseInt(Math.random()*11)+1;
var popCtr = {
	now:'1',
	showPop2:function(){
		$('#maskbg').show();
		$('#pop1').hide();
		$('#pop2').show();
		$('#p2img').html('<img src="http://xym.163.com/2014/zhurou/images/zrp'+rnd+'.jpg" width="100%" />');
		setTimeout(function(){
			$('#pop2').click(function(){
				popCtr.showPop3();
			});
		}, 300);
	},
	showPop3:function(){
		$('#maskbg').hide();
		$('#pop2').hide();
		$('#pop3').show();
		this.now = '2';
	},
	init:function(){
	}
}
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
		showCtx.fillStyle = '#888888';
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
		this.mouseDown = true;
	},
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
			popCtr.showPop2();
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
var txtArr = [
	'�Ž���������',
	'�˽����������',
	'���������������',
	'�Ľ�������������',
	'һ�������������',
	'�����������',
	'һֻ���',
	'�������Ź�',
	'һ�����',
	'����',
	'һ������'
];
var txt2Arr = [
	'��ϲ��ο�<span class="spec">�Ž���������</span><br/>���99%�����ѣ������Ѿ�����',
	'��ϲ��ο�<span class="spec">�˽����������</span><br/> ���84%�����ѣ������Ѿ������ܵ���',
	'��ϲ��ο�<span class="spec">��������������� </span><br/>���34%�����ѣ�',
	'��ϲ��ο�<span class="spec">�Ľ�������������</span><br/> ���28%�����ѣ�',
	'��ϲ��ο�<span class="spec">һ�������������</span><br/> ���12%�����ѣ�',
	'��ϲ��ο�<span class="spec">�����������</span><br/> ���5%�����ѣ�',
	'��ϲ��ο�<span class="spec">һֻ......���</span>!!<br/> һ������ο��ķ�ʽ���ԣ�',
	'��ϲ��ο�<span class="spec">��������</span><br/> ���躰��ؼҳ��Ǵ��Ź�!',
	'��ϲ��ο�<span class="spec">һ�����</span>...<br/> OH NO��ֻʣһ�����㻹Ҫ��?',
	'��ϲ��ο�<span class="spec">һ�������</span><br/> ���ֺû�һ�����Ҳ�����Ӵ��',
	'��ϲ��ο�<span class="spec">һ������</span>....<br/>��������Ǽ��ʰɣ�'
];
var txt3Arr = [
	'��ϲ��ο��Ž�����������99%�����ѣ������Ѿ�����',
	'��ϲ��ο��˽������������84%�����ѣ������Ѿ������ܵ���',
	'��ϲ��ο���������������� ���34%�����ѣ�',
	'��ϲ��ο��Ľ������������� ���28%�����ѣ�',
	'��ϲ��ο�һ������������� ���12%�����ѣ�',
	'��ϲ��ο������������ ���5%�����ѣ�',
	'��ϲ��ο�һֻ......��� һ������ο��ķ�ʽ���ԣ�',
	'��ϲ��ο������������躰��ؼҳ��Ǵ��Ź�!',
	'��ϲ��ο�һ����� OH NO��ֻʣһ�����㻹Ҫ��?',
	'��ϲ��ο�һ������� ���ֺû�һ�����Ҳ�����Ӵ��',
	'��ϲ��ο�һ������....��������Ǽ��ʰɣ�'
];
$(function(){
	$('#pop2Txt').html(txt2Arr[rnd-1]);
	ggl.init(document.getElementById('zrpcon'), 236, 123,'http://xym.163.com/2014/zhurou/images/zrp'+rnd+'.jpg');
	popCtr.init();
	$('#simg').html('<img src="http://xym.163.com/2014/zhurou/images/zrp'+rnd+'.jpg" />');
	$('body').css({opacity:1});
});
var shareTitle = '���ס��������Ρ����ⷢ��ʢ����������������';
var shareWx = '�������γ��������������ͷ������ֳ��α�ƴ���������⣡';
var onBridgeReady = function () {
	var appId = '';
	// ���͸�����;
	WeixinJSBridge.on('menu:share:appmessage', function(argv){
		var imgUrl = picUrl,
		link = shareUrl;
		var title = shareTitle;
		var shareDesc = txt3Arr[rnd-1];
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
		var imgUrl = picUrl,
		link = shareUrl;
		var title = shareTitle;
		var shareDesc = txt3Arr[rnd-1];
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