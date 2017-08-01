var readline = require("readline-sync");
var input = readline.question('What phrase would you like to encrypt? ').toLowerCase();
var shift = parseInt(readline.question("How many letters would you like to shift?"));

// create an empty placeholder string
var result = "";
var alphabet = "abcdefghijklmnopqrstuvwxyz"
// loop through the string
for (var i = 0; i < input.length; i++) {
    // find the index of the current letter in the alphabet
    // add shift to index of current letter
    var currentCharIndex = alphabet.indexOf(input[i]) + shift;
    if (currentCharIndex === -1) {
        result += input[i];
        continue;
    }
    //if new value (shift + currentIndex) > 25
    if (newIndex > 25) {}
        // subtract 26 from new index
        newIndex -= 26;
    }

    // add new letter (alphabet[shift + oldIndex]) to our results string
    result += alphabet[]
}
// console.log(results string)
