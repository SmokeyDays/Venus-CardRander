
var PLAYING = 0;

var register = {
	init: function(){
		var $btn = $('<div>').addClass("button enter").appendTo(".operator").text("开始").click(function(){
			if(PLAYING == 0){
				makeCard.changeCards();
				$btn.text("停止");
				PLAYING = 1;
			}else{
				$btn.css("pointer-events","none");
				var cnt = 3;
				$btn.text(cnt);
				--cnt;
				var X = setInterval(function(){
					if(cnt > 0){
						$btn.text(cnt);
						--cnt;
					}else{
						$btn.text("开始");
						PLAYING = 0;
						$btn.css("pointer-events","");
						clearInterval(X);
					}
				},1000);
			}
		})
		var $btn2 = $('<div>').addClass("button").appendTo(".operator").text("显示歌词").click(function(){
			makeCard.showWords();
		})
		var $right = makeCard.newCard(0);
		var $mid = makeCard.newCard(1);
		var $left = makeCard.newCard(2);
		$left.addClass("leftCard");
		$mid.addClass("midCard");
		$right.addClass("rightCard");
		makeCard.changeCardSmaller($left);makeCard.changeCardSmaller($right);
	}
}