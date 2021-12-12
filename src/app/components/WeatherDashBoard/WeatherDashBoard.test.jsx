import { mount } from "enzyme";
import { Provider } from "react-redux";
import fetchMock from "jest-fetch-mock";
import { act } from "@testing-library/react";
import store from "../../features/store";
import WeatherDashBoard from "./WeatherDashBoard";
import WeatherForecastCard from "../WeatherForecastCard";
import TemperatureChart from "../TemperatureChart";
import { WeatherDashBoardWrapper } from "./styles";

describe("test <WeatherDashBoard/> component", () => {
  let wrapper,
    reloadData = jest.fn();

  beforeEach(() => {
    fetchMock.resetMocks();

    wrapper = mount(
      <Provider store={store}>
        <WeatherDashBoard
          fadeIn={true}
          forecast={[
            {
              date: "2021-11-29 21:00:00",
              temperature: 30.16,
            },
          ]}
          loadingData={false}
          reloadData={reloadData}
        />
      </Provider>
    );
  });

  test("snapshot testing", () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  test("should contain all components", () => {
    expect(wrapper.find(WeatherDashBoardWrapper)).toHaveLength(1);
    expect(wrapper.find(WeatherForecastCard).length).toBeGreaterThanOrEqual(1);
    expect(wrapper.find(TemperatureChart)).toHaveLength(1);
  });

  test("should show and hide temperature chart", async () => {
    expect(wrapper.find(TemperatureChart).prop("open")).toBe(false);

    await act(async () => {
      wrapper.find(WeatherForecastCard).first().prop("showTempChart")();
    });

    wrapper.update();

    expect(wrapper.find(TemperatureChart).prop("open")).toBe(true);

    await act(async () => {
      wrapper.find(TemperatureChart).prop("closeModal")();
    });
    
    wrapper.update();

    expect(wrapper.find(TemperatureChart).prop("open")).toEqual(false);
  });
});
