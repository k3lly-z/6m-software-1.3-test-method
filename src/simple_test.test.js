const { addFunc, isDivisibleBy5, checkOddEven } = require("./sample");

//create test suite
describe("Test Suite for sample.js functions", () => {
  //write the test
  it("should add 3 numbers", () => {
    const result = addFunc(1, 3, 4);
    //compare an expected value to the result
    expect(result).toBe(8);
  });

  //test to test functionality of isDivisibleby5:
  it("should check divisibility of number by 5", () => {
    const result = isDivisibleBy5(1209);
    expect(result).toBe(false);
  });

  //TEST-DRIVEN DEVELOPMENT LESSON NOTES
  //Step 1: Write the Test
  it("should check if odd or even", () => {
    const result = checkOddEven(199);
    expect(result).toBe("odd");
  });

  //Step 2: Write Code That Will Make Test Pass (rmb to add to export and require)

  //Step 3:
});
