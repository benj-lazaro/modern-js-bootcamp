// Function Challenge 03 Pangram

// My Solution
function isPangram(sentence) {
    const letters = "abcdefghijklmnopqrstuvwxyz";

    for (let char of letters) {
        if (sentence.toLowerCase().indexOf(char) === -1) return false;
    }
    return true;
}


// Alternative Solution: .includes() method is NOT supported by Internet Explorer
function isPangram2(sentence) {
    const letters = "abcdefghijklmnopqrstuvwxyz";

    for (let char of letters) {
        if (!sentence.toLowerCase().includes(char)) return false;
    }
    return true;
}


// Test Code
console.log(isPangram2("The five boxing wizards jump quickly"));
console.log(isPangram2("The five boxing wizards jump quick"));
