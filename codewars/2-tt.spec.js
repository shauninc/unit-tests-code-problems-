import { greet } from "./1-hello-world";

describe("Testing function", () => {
  it("Is it a function?", () => {
    expect(typeof greet).toEqual("function");
  });

  it("Correct return-value?", () => {
    expect(greet()).toEqual("hello world!");
  });
});

// Tests from Code Wars
