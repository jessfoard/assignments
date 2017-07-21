
//var fruits = ["Bananas", "Apples", "Oranges", "Grapes", "Cherrys", "Kiwis"];

//function fruits() {
//    var arr1 = [fruits];
//    console.log(arr1);
//}

//console.log(fruits);

function reverseString(str) {
    var stringToArray = splitString(str);
    var reverseArray = revStr(stringToArray);
    var newString = joinedStr(reverseArray);
    function splitString(str) {
        var newString = str.split("");
        return newString;
    }

    function revStr(newString) {
        var reversedStr = newString.reverse();
        return reversedStr;
    }

    function joinedStr(newString) {
        var joinedString = newString.join("");
        return joinedString;
    }
   
    return newString;
}






reverseString("abcdefghijklmnopqrstuvwxyz")

console.log(reverseString(""));




//function eat(item, numOfUser, favoriteFood) {
  //  if (favoriteFood === "pie") {
 //       return sum(item, 1)
 //   } else {
 //       return "not 3"
 //       }
//}

//function sum(num1, num2){
    //var total = 0;
    //total = num1 + num2;
    //return total;
//}


//var number = 3;
//var item;
//console.log(eat(number, 7, "pie"));
//console.log(eat(5));
//console.log(item);