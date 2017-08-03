var readline = require("readline-sync");
var name = (readline.question('What is your name? ')).toUpperCase();
console.log('Hi ' + name + '!');
var age = (readline.question('How old are you? '));
console.log(age + '? Dam! Old timer, eh?');
var color =(readline.question('How about your favorite color? '));
console.log('Yeah ' + color + 'black"s good.');