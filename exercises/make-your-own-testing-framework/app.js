var metal = ('James Hetfield');
var newMetal = metal;


var metalSplit = metal.split(" ");
metalSplit;

var assert = function(actual, expected) {
  if (actual != expected) {
    throw {type: "fail", details: {actual: actual, expected: expected}};
  } else {
    console.log("Succes", {type: "Test passed", details: {actual: actual, expected: expected}});
  }
};

var describe = function(message, testFunc) {
  try {
    testFunc();
  } catch(err) {
    console.log.error("Failure", err);
  }
};

describe("Test group", function() {
  assert(metal, newMetal);
});

