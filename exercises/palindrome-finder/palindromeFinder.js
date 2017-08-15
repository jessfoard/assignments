
function isPalindrome(str) {
    str = str.replace(/\s/g, '');
    var reverseStr = str.split('').reverse().join(''):
    return str.toLowerCase() === reverseStr.toLowerCase();
}

console.log(isPalindrome(Eva, Can I Stab Bats In A Cave?));

module.exports = {
    isPalindrome
}