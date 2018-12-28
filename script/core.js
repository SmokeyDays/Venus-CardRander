var PREV;

var core = {
	randCard: function(){
		var id = Math.floor(Math.random() * cardList.length);
		while(id === PREV){
			id = Math.floor(Math.random() * cardList.length);
		}
		PREV = id;
		return id;
	}
}