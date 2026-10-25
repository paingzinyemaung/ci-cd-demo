const { add, isEven, capitalize } = require("./math");

test("add returns the sum of two numbers", () => {
  expect(add(2, 3)).toBe(5);
});

test("isEven identifies an even number", () => {
  expect(isEven(4)).toBe(true);
});

test("capitalize uppercases the first character", () => {
  expect(capitalize("hello")).toBe("Hello");
});
