// JavaScript Document

/*
	var love = document.getElementById("love");
		love.addEventListener('touchstart',function(e){
			this.className = "love";
		});
		love.addEventListener('touchend',function(e){
			this.className = "loveclick";
		});
*/
/*
$$('div').tap(function() {
    // affects "span" children/grandchildren
    $$(this).style('color', 'red');
});*/ 
window.onresize = window.onload = function(){
					var w,h
					if(!!(window.attachEvent && !window.opera))
					{
						h = document.documentElement.clientHeight;
						w = document.documentElement.clientWidth-40;
					}else{
						h =	window.innerHeight;
						w = window.innerWidth-40;
					}
				var bgImg = document.getElementById('bookpic').getElementsByTagName('img')[0];
				if(w < 575)
				{
					bgImg.width = w ;
				bgImg.height= (388/575)*w ;
				}else{
				bgImg.width = 575 ;
				bgImg.height= 388;
					}
										
			}			


