const { default: testRunner } = require("jest-runner");
const { addFive } = require("./addFive");
test("should add 5", () => {
  expect(addFive(5)).toBe(10);
});
