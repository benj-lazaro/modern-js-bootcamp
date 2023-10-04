// Putting It All Togerther: Deck Of Cards

// Function based approach
function initializeDeck() {
  const deck = [];
  const suits = ["hearts", "diamonds", "spades", "clubs"];
  const values = "2,3,4,5,6,7,8,9,10,J,Q,K,A";

  for (let value of values.split(",")) {
    for (let suit of suits) {
      deck.push({ value, suit });
    }
  }
  return deck;
}

function drawCard(deck, drawnCards) {
  const card = deck.pop();
  drawnCards.push(card);
  return card;
}

function drawMultiple(numCards, deck, drawnCards) {
  const cards = [];
  for (let i = 0; i < numCards; i++) {
    cards.push(drawCard(deck, drawnCards));
  }
  return cards;
}

function shuffle(deck) {
  // loop over array backwards
  for (let i = deck.length - 1; i > 0; i--) {
    //pick random index before current element
    let j = Math.floor(Math.random() * (i + 1));
    //swap
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
  return deck;
}

// Test Code (Function based approach)
const firstDeck = initializeDeck();
const drawnCards = [];
shuffle(firstDeck);
const hand1 = drawMultiple(2, firstDeck, drawnCards);
const hand2 = drawMultiple(2, firstDeck, drawnCards);
const pokerHand = drawMultiple(5, firstDeck, drawnCards);

// Object based approach
const myDeck = {
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

// Test Code (Object based approach)
myDeck.initialDeck();
myDeck.shuffle();
const h1 = myDeck.drawMultiple(2);
const h2 = myDeck.drawMultiple(2);
const h3 = myDeck.drawMultiple(5);
