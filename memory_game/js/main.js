var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];

var checkForMatch = function() {
    if (cardsInPlay[0] === cardsInPlay[1]) {
        alert("we found a match");
    }
    else {
        alert("try again");
    }
}

var flipCard = function(cardId) {
    if (cardsInPlay.length === 2) {
        checkForMatch()
    }
    console.log("user flipped " + cards[cardId]);
    cardsInPlay.push(cards[cardId]);
}

flipCard(0);
flipCard(2);