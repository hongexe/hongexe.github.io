var config = config || {};

//是否有欢迎页面
config.HasWelcome = false;
//总倒计时（秒）
config.CountDown = 10;
//总共需要打中多少个玑哥后才能开始触发概率
config.TargetCount = 10;
//获取激活码的概率
config.KeyProbability = 0.2;
//砸到鬼后减少的时间（秒）
config.GhostReduceTime = 1;
//从洞中出来玑哥的概率
config.JiGeOutProbability = 0.7;

//点击“武斗”按钮函数回调
var wudouCallback = function () {
	cc.Director.getInstance().replaceScene(cc.TransitionFade.create(1, new MoleScene(), cc.c3b(255, 255, 255)));
};

//点击“文斗”按钮函数回调
var wendouCallback = function () {
	cc.log("文斗");
};

//点击“我要激活码”按钮函数回调
var wantKeyCallback = function (iphoneNumber) {
	cc.log("我要激活码" + iphoneNumber);
};

//点击“下载游戏”或者“天下HD下载”按钮函数回调
var downloadGameCallback = function () {
	cc.log("下载游戏");
};

//点击“我不服 从头再来”按钮函数回调
var resetGameCallback = function () {
	cc.Director.getInstance().replaceScene(cc.TransitionFade.create(1, new MoleScene(), cc.c3b(255, 255, 255)));
};

//点击“分享好友 场外求助”按钮函数回调
var shareWithFriendCallback = function () {
	cc.log("分享好友 场外求助");
}