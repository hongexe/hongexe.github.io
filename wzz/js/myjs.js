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
					var image =document.getElementsByTagName("img"); 
					 if(image.width>30 && image.height>30){   
            if(image.width>window.innerWidth){  
                image.width=window.innerWidth;   
                image.height=(388*window.innerWidth)/575;   
            }else{   
                image.width=575;   
                image.height=388;   
            }   
  
					 }
			}	


