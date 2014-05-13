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
$(function(){  
var imglist =document.getElementsByTagName("img");  
//安卓4.0+等高版本不支持window.screen.width，安卓2.3.3系统支持  
var _width;  
doDraw();  
  
window.onresize = function(){  
    //捕捉屏幕窗口变化，始终保证图片根据屏幕宽度合理显示  
    doDraw();  
}  
  
function doDraw(){  
    _width = window.innerWidth;  
    for( var i = 0, len = imglist.length; i < len; i++){  
        DrawImage(imglist[i],_width);  
    }  
}  
  
function DrawImage(ImgD,_width){   
    var image=new Image();   
    image.src=ImgD.src;   
    image.onload = function(){  
        //限制，只对宽高都大于30的图片做显示处理  
        if(image.width>30 && image.height>30){   
            if(image.width>_width){  
                ImgD.width=_width;   
                ImgD.height=(image.height*_width)/image.width;   
            }else{   
                ImgD.width=image.width;   
                ImgD.height=image.height;   
            }   
  
        }     
    }  
  
}  
     
}) 