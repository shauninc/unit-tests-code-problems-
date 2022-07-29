import { getMiddle } from "./2-middle-char";

describe("GetMiddle", () => {
  it("Tests", () => {
    expect(getMiddle("test")).toEqual("es");
    expect(getMiddle("testing")).toEqual("t");
    expect(getMiddle("middle")).toEqual("dd");
    expect(getMiddle("a")).toEqual("a");
  });
});

// Tests from Code Wars
// describe("GetMiddle", function () {
//   it("Tests", function () {
//     Test.assertEquals(getMiddle("test"), "es");
//     Test.assertEquals(getMiddle("testing"), "t");
//     Test.assertEquals(getMiddle("middle"), "dd");
//     Test.assertEquals(getMiddle("A"), "A");
//   });
// });
