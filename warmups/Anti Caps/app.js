var testString = "Hello AND goodBYE"

function antiCaps(str) {
   var switchedCaps = "";
   for (var i = 0; i < str.length; i++){
    if (str[i] === str[i].toUpperCase()) {
        switchedCaps += str[i].toLowerCase()
    } else {switchedCaps += str[i].toUpperCase()}
    }   return switchedCaps
}
console.log(antiCaps(testString));