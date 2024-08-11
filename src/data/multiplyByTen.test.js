// multiplyByTen.test.js

const multiplyByTen = require("./multiplyByTen");

describe("multiplyByTen", () => {
  test("correctly multiplies positive numbers", () => {
    expect(multiplyByTen(5)).toBe(50);
    expect(multiplyByTen(0)).toBe(0);
    expect(multiplyByTen(10)).toBe(100);
  });

  test("correctly multiplies negative numbers", () => {
    expect(multiplyByTen(-5)).toBe(-50);
    expect(multiplyByTen(-10)).toBe(-100);
  });

  test("throws an error if the parameter is not a number", () => {
    expect(() => multiplyByTen("a")).toThrow(TypeError);
    expect(() => multiplyByTen(null)).toThrow(TypeError);
    expect(() => multiplyByTen([])).toThrow(TypeError);
    expect(() => multiplyByTen({})).toThrow(TypeError);
  });
});
