const chai = require("chai");
const assert = chai.assert;
const firstNoRpt = require("../app.js");

let tests = {
    first: "abbbbc",
    notFirst: "aaaabbbcdef",
    allRpts: "aaaaaa"
}

describe("first non-repeating character test", ()=>{
    it("should return a" ,()=>{
        assert.equal(firstNoRpt(tests.frst), "a");
    });
    it("should return b", ()=>{
        assert.equal(firstNoRpt(tests.notFirst), "b");
    });
    it("should throw an error", ()=>{
        assert.throw(
            ()=> {
                firstNoRpt(tests.allRpts)
            },
        )
    })

})