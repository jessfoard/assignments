const camelCase = require("../app.js");
const chai = require("chai");
const assert = chai.assert;

let tests = {
    spaces: "test example",
    hyphens: "test-example",
    underscores: "test_example",
    multiple: "testy_mctest_test",
}

describe("camel case exercise", () => {
    it("should return a string with camelCase (from spaces)", () => {
        assert.equal(camelCase(tests.spaces), "testExample")
    });
    it("should return a string with camelCase (from heyphens)", () => {
        assert.equal(camelCase(tests.hyphens), "testExample")
    });
    it("should return a string with camelCase (from underscores)", () => {
        assert.equal(camelCase(tests.underscores), "testExample")
    });
    it("should return a string with camelCase (from muliple)", () => {
        assert.equal(camelCase(tests.multiple), "testy_mctest_test")
    })
    
  })
