import getDayWeatherAverage from "./getDayWeatherAverage";

describe("test getDayWeatherAverage", () => {
  let forecastData = [
    {
      date: "2021-12-12 12:00:00",
      temperature: 36.27
    },
    {
      date: "2021-12-12 15:00:00",
      temperature: 34.81
    }
  ];

  test("should return empty array", () => {
    expect(getDayWeatherAverage()).toEqual([])
  })

  test("should return empty array 2", () => {
    expect(getDayWeatherAverage([])).toEqual([])
  });

  test("should return the daily average", () => {
    expect(getDayWeatherAverage(forecastData)).toEqual([{
      date: new Date("2021-12-12 12:00:00"),
      temperature: 35.54,
    }])
  })
})