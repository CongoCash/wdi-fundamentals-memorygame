var cards = [
    {
        rank:"queen",
        suit:"hearts",
        cardImage:"images/queen-of-hearts.png"
    },
    {
        rank:"queen",
        suit:"diamonds",
        cardImage:"images/queen-of-diamonds.png"
    },
    {
        rank:"king",
        suit:"hearts",
        cardImage:"images/king-of-hearts.png"
    },
    {
        rank:"king",
        suit:"diamonds",
        cardImage:"images/king-of-diamonds.png"
    }
];
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
    console.log("user flipped " + cards[cardId].rank);
    cardsInPlay.push(cards[cardId].rank);
    console.log(cards[cardId].cardImage + " " + cards[cardId].suit);
}

flipCard(0);
flipCard(2);