let chai = require("chai");
let assert = chai.assert;
let matchingWords = require("../app.js");

let tests = {
    noRepeats: "some string with no repeats",
    allRepeats: "test test test test",
    mix: "this this is an an example test test"
}

describe("matching words test", ()=>{
    it("should return empty array", ()=>{
        assert.deepEqual(matchingWords(tests.noRepeats), [])
    });
    it("shold return an array with one item", ()=>{
        assert.deepEqual(matchingWords(tests.allRepeats), ["test"])
    });
    it("should return an array with 3 items", ()=>{
        assert.deepEqual(matchingWords(tests.mix), ["this an test"])
    });
});
