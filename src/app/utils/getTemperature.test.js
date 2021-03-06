import getTemperature from "./getTemperature";

describe("test getTemperature function", () => {
  test("should convert farenheit to Farenheit", () => {
    expect(parseFloat(getTemperature(32, "F").temp)).toEqual(32);
  })

  test("should convert farenheit to ceclius", () => {
    expect(parseFloat(getTemperature(32, "C").temp)).toEqual(0);
    expect(parseFloat(getTemperature("32", "C").temp)).toEqual(0);
  })

  test("should not fail if right parameters are not passed", () => {
    expect(parseFloat(getTemperature().temp)).toEqual(0);
    expect(parseFloat(getTemperature("F").temp)).toEqual(0);
    expect(parseFloat(getTemperature("F", "X").temp)).toEqual(0);
  })
});