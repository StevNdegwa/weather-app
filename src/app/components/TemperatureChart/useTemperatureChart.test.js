import { Provider } from "react-redux";
import { renderHook } from "@testing-library/react-hooks";
import getTemperature from "../../utils/getTemperature";
import store from "../../features/store";
import { selectCard } from "../../features/weather/selectedCardSlice";
import useTemperatureChart from "./useTemperatureChart";
import { act } from "@testing-library/react-hooks";

const wrapper = ({ children }) => (
  <Provider store={store}>
    {children}
  </Provider>
),
  date = new Date(),
  data = {
    forecast: [
      {
        date: "2021-11-29 21:00:00",
        temperature: 30.16,
        icon: "http://openweathermap.org/img/wn/13n@4x.png",
        description: "light snow",
      },
      {
        date,
        temperature: 30.16,
        icon: "http://openweathermap.org/img/wn/13n@4x.png",
        description: "light snow",
      },
    ]
  };

describe("test 'useTemperatureChart'", () => {

  test("should return temperature data", async () => {

    let { result, rerender } = renderHook(
      ({ data }) => useTemperatureChart(data),
      { wrapper, initialProps: { data: null } }
    );

    expect(result.current.temperatureData).toEqual([])

    rerender({ data });

    expect(result.current.temperatureData)
      .toEqual([
        {
          date: new Date(date),
          temperature: getTemperature(30.16, store.getState().selectedScale).temp,
          icon: "http://openweathermap.org/img/wn/13n@4x.png",
          description: "light snow",
        },
      ])

    await act(async () => {
      store.dispatch(selectCard(data.forecast[0]));
    })

    expect(result.current.temperatureData)
      .toEqual([
        {
          date: new Date("2021-11-29 21:00:00"),
          temperature: getTemperature(30.16, store.getState().selectedScale).temp,
          icon: "http://openweathermap.org/img/wn/13n@4x.png",
          description: "light snow",
        },
      ])
  });

  test("should properly format data", async () => {
    let { result } = renderHook(
      () => useTemperatureChart(data),
      { wrapper }
    );

    await act(async () => {
      store.dispatch(selectCard(data.forecast[0]));
    })

    let { xAxisTickFormatter, toolTipFormatter } = result.current;

    expect(xAxisTickFormatter(new Date(1995, 12, 3, 10, 30, 0))).toEqual("10:30");
    expect(toolTipFormatter(5)).toEqual([`5°C`, "Temperature"]);
  })
})