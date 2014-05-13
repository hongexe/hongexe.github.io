// JavaScript Document


	var love = document.getElementById("love");
		love.addEventListener('touchstart',function(e){
			this.className = "love";
		});
		love.addEventListener('touchend',function(e){
			this.className = "loveclick";
		});
