// Jest Test
import { greet } from "./1-hello-world";

describe("Testing function", () => {
  it("Is it a function?", () => {
    expect(typeof greet).toEqual("function");
  });

  it("Correct return-value?", () => {
    expect(greet()).toEqual("hello world!");
  });
});

// Chai Test Sample from Code Wars

// const assert = require("chai").assert;

// describe("Testing function", function () {
//   it("Is it a function?", function () {
//     assert.strictEqual(typeof greet, "function", "greet should be a function");
//   });
//   it("Correct return-value?", function () {
//     assert.strictEqual(greet(), "hello world!");
//   });
// });
