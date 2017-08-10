var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];
var cardOne = cards[0];
cardsInPlay.push(cardOne);
console.log("User flipped " + cardOne);
var cardTwo = cards[2];
cardsInPlay.push(cardTwo);
console.log("user flipped " + cardTwo)

if (cardsInPlay.length === 2) {
    if (cardsInPlay[0] === cardsInPlay[1]) {
        alert("we found a match");
    }
    else {
        alert("try again");
    }
}