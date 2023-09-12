// Function Challenge 04 Get Playing Card

// My Solution
function getCard() {
    const suits = ["clubs", "spades", "hearts", "diamonds"];
    const values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];

    const suitIndex = Math.floor(Math.random() * suits.length);
    const valueIndex = Math.floor(Math.random() * values.length);

    return { value: values[valueIndex], suit: suits[suitIndex]}
}


// Alternative Solution = separates random value generation as a stand-alone reusable function
function getRandomElement(array) {
    indexValue = Math.floor(Math.random() * array.length);
    return array[indexValue];
}

function getCard2() {
    const suits = ["clubs", "spades", "hearts", "diamonds"];
    const values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
    
    return { value: getRandomElement(values), suit: getRandomElement(suits) }
}

// Test Code
pulledCard = getCard();
console.log(pulledCard);

pulledCard = getCard2();
console.log(pulledCard);
