// let firstNoRpt = function(string) {
//     for (let i =0; i < string.length; i++) {
//         var c = string.charAt(i);
//         if (string.indexOf(c) == i && string.indexOf(c, i + 1) == -1){
//             return c;
//         }
//     }
//     return null;
// }

let firstNoRpt = function(str){
    //loop through string
    for (let i = 1; i < str.length; i++) {
        //check which iteration we're on
        if (i !== 1) {
            //we're not on first iteration
          if(str[i] !== str[i - 1]) {
              return str[i]
          }
        } else {
            //we are on first iteration
            if(str[i] !== str[i - 1]){
                return str[i - 1]
            }
        }
    }
    throw "contains all repeats";
}

module.exports = firstNoRpt;