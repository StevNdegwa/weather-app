import { mount } from "enzyme";
import { act } from "@testing-library/react";
import fetchMock from "jest-fetch-mock";
import { Provider } from "react-redux";
import { GlobalStyles } from "@mui/material";
import { appLoaded } from "./features/loader/appLoadingSlice";
import store from "./features/store";
import AppLoader from "./components/AppLoader";
import AppLayout from "./components/AppLayout";
import WeatherDashBoard from "./components/WeatherDashBoard";
import AppErrorBoundary from "./components/AppErrorBoundary";
import ErrorPage from "./components/ErrorPage";
import { responseData } from "./data/testData";
import { setupApiStore } from "../testUtils";
import weatherForecastApi from "./features/weather/weatherForecastApi";

import App from "./App";

describe("test <App/> component", () => {
  let wrapper;

  beforeEach(() => {
    fetchMock.resetMocks();

    wrapper = mount(
      <Provider store={store}>
        <App />
      </Provider>
    );
  });

  test("snapshot testing", () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  test("should render right components", () => {
    expect(wrapper.find(AppLayout)).toHaveLength(1);
    expect(wrapper.find(GlobalStyles)).toHaveLength(1);
    expect(wrapper.find(AppLoader)).toHaveLength(1);
    expect(wrapper.find(WeatherDashBoard)).toHaveLength(0);
    expect(wrapper.find(AppErrorBoundary)).toHaveLength(1);
    expect(wrapper.find(ErrorPage)).toHaveLength(0);
  });

  test("should not render the loader once application has finished loading", () => {
    store.dispatch(appLoaded());
    wrapper.update();
    expect(wrapper.find(AppLoader)).toHaveLength(0);
    expect(wrapper.find(WeatherDashBoard)).toHaveLength(1);
  });

  test("should properly load an application", async function () {
    let storeRef = setupApiStore(weatherForecastApi);
    fetchMock.mockResponse(JSON.stringify(responseData));
    let forecast = [
      {
        date: "2021-11-29 21:00:00",
        temperature: 30.16,
        icon: "http://openweathermap.org/img/wn/13n@4x.png",
        description: "light snow",
      },
    ];

    expect(storeRef.store.getState().appLoading).toEqual(true);

    let wrapper;

    await act(async () => {
      wrapper = mount(
        <Provider store={storeRef.store}>
          <App />
        </Provider>
      );
    });
    
    expect(wrapper.find(WeatherDashBoard)).toHaveLength(0);
    expect(wrapper.find(AppLoader)).toHaveLength(1);

    wrapper.update();

    expect(wrapper.find(AppLoader)).toHaveLength(0);
    expect(storeRef.store.getState().appLoading).toEqual(false);
    expect(wrapper.find(WeatherDashBoard).prop("fadeIn")).toEqual(true);
    expect(wrapper.find(WeatherDashBoard).prop("forecast")).toEqual(forecast);
    expect(wrapper.find(WeatherDashBoard).prop("loadingData")).toEqual(false);
  });

  test("should render the error page if an error occurs", async function () {
    let storeRef = setupApiStore(weatherForecastApi);
    fetchMock.mockReject(new Error("Internal Server Error"));

    expect(storeRef.store.getState().appLoading).toEqual(true);

    let wrapper;

    await act(async () => {
      wrapper = mount(
        <Provider store={storeRef.store}>
          <App />
        </Provider>
      );
    });

    expect(wrapper.find(AppLoader)).toHaveLength(1);
    expect(wrapper.find(ErrorPage)).toHaveLength(0);

    wrapper.update();

    expect(wrapper.find(AppLoader)).toHaveLength(0);
    expect(wrapper.find(ErrorPage)).toHaveLength(1);
  });
});
