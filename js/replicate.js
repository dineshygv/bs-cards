$(function(){
    var count = 30;
    var cardColumn = $(".card-columns");
    var card = $(".card");
    for(var i=0; i<count-1; i++){
        cardColumn.append(card.clone());
    }
});