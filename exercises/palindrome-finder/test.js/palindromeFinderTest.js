var chai = require('chai');

var assert = chai.assert;

var isPalindrome = require('../palindromeFinder.js')

describe("A function to check if a word is a palindrome", function() {
    it("should return true if it is a palindrome", function() {
        isPalindrome('raCe$ CAr');
        assert.equal(isPalindrome('RaCe$ CAr'), true);
    });
});








