// Creatinga A Deck Factory
// NOTE: This is NOT the best way of creating multiple deck of cards

// A stand-alone arrow function that returns a deck of cards (object litereal w/ methods)
const makeDeck = () => {
  return {
    deck: [],
    drawnCards: [],
    suits: ["hearts", "diamonds", "spades", "clubs"],
    values: "2,3,4,5,6,7,8,9,10,J,Q,K,A",
    initialDeck() {
      // Create a deck of cards
      const { suits, values, deck } = this;
      for (let value of values.split(",")) {
        for (let suit of suits) {
          deck.push({ value, suit });
        }
      }
    },
    drawCard() {
      // Draw a single card & then save it on the property 'drawnCards'
      const card = this.deck.pop();
      this.drawnCards.push(card);
      return card;
    },
    drawMultiple(numCards) {
      // Draws multiple cards
      const cards = [];
      for (let index = 0; index < numCards; index++) {
        cards.push(this.drawCard());
      }
      return cards;
    },
    shuffle() {
      // Shuffle the deck of cards in place
      const { deck } = this;
      // Loop over the deck backwards
      for (let index = deck.length - 1; index > 0; index--) {
        // Pick a random index before the current element (card)
        let randomIndex = Math.floor(Math.random() * (index + 1));
        // Swap position of current element with random element
        [deck[index], deck[randomIndex]] = [deck[randomIndex], deck[index]];
      }
    },
  };
};

// Test Code
// 1st deck of cards
const myDeck = makeDeck();
myDeck.initialDeck();
myDeck.shuffle();
const h1 = myDeck.drawMultiple(2);
const h2 = myDeck.drawMultiple(2);
const h3 = myDeck.drawMultiple(5);
console.log(myDeck);
console.log(h1);
console.log(h2);
console.log(h3);

// 2nd deck of cards
const myDeckTwo = makeDeck();
myDeckTwo.initialDeck();
myDeckTwo.shuffle();
const hand1 = myDeckTwo.drawMultiple(5);
console.log(myDeckTwo);
console.log(hand1);
