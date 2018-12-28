var IS_RONGWEI = 0;

var makeCard = {
	newCard: function(id){
		var cardInfo = cardList[id];
		var $card = $('<div>').attr("class","card").prependTo(".cardScroll").data("words",cardInfo.txt);
		var $imgClass = $('<div>').attr("class","img").appendTo($card);
		var $img = $('<img>').appendTo($imgClass).attr("src","./source/"+cardInfo.imgLink);
		var $nameClass = $('<div>').attr("class","name").appendTo($card);
		var $name = $('<a>').text(cardInfo.name).appendTo($nameClass);
		var $singerClass = $('<div>').attr("class","singer").appendTo($card);
		if(typeof cardInfo.owner !== "undefined"){
			var $owner = $('<a>').text(cardInfo.owner+"的 ").attr("style",'font-family: "楷体"; font-size: 30px;').prependTo($nameClass);
		}
		var $singer = $('<a>').text("歌手: " + cardInfo.singer).appendTo($singerClass);
		return $card;
	},
	changeCardSmaller: function($card){
		$card.attr("style","transform: scale(0.75,0.75);");
	},
	changeCardBigger: function($card){
		$card.attr("style","transform: scale(1,1);");
	},
	changeCards: function(){
		var $first = $('div.cardScroll div.card:first-child');
		var $mid = $('div.cardScroll div.card:nth-child(2)');
		var $last = $('div.cardScroll div.card:last-child');
		$last.attr("style","animation: removeAnim .1s 0s");
		setTimeout(function(){
			$last.remove();
			makeCard.changeCardSmaller($mid);
			makeCard.changeCardBigger($first);
			$mid.addClass("rightCard");
			$mid.removeClass("midCard");
			$first.removeClass("leftCard");
			$first.addClass("midCard");
		},100);
		setTimeout(function(){
			var $newCard = (IS_RONGWEI == 1)?(makeCard.newCard(8)):(makeCard.newCard(core.randCard()));
			$newCard.addClass("leftCard");
			$newCard.attr("style",'transform: scale(0.75,0.75); animation: setAnim .1s 0s;');
			setTimeout(function(){
				if(PLAYING === 1){
					makeCard.changeCards();
				}else if(RONGWEI === 1){
					IS_RONGWEI = 1;
					RONGWEI = 0;
					makeCard.changeCards();
				}else if(IS_RONGWEI === 1){
					IS_RONGWEI = 0;
					makeCard.changeCards();
				}
			},100)
		},200);
	},
	showWords: function(){
		var $words = $('<div>').addClass("words").appendTo("body")
		var $wordsText = $('<div>').addClass("words-text").html($(".midCard").data("words")).appendTo($words);
		var $close = $('<div>').addClass("words-button").appendTo($words).text("关闭").click(function(){
			$words.remove();
		});
	}
}