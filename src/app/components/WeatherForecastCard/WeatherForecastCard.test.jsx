import { mount } from "enzyme";
import { Provider } from "react-redux";
import store from "../../features/store";
import WeatherForecastCard from "./WeatherForecastCard";
import {
  CardWrapper,
  Temperature,
  Description,
  WeatherIcon,
  DateText,
} from "./styles";
import { act } from "@testing-library/react";

describe("test <WeatherForecastCard/> component", () => {
  let wrapper,
    showTempChart = jest.fn(),
    props = {
      date: "29-11",
      description: "sunny",
      icon: "/",
      temperature: 120.4,
    };

  beforeEach(
    () =>
      (wrapper = mount(
        <Provider store={store}>
          <WeatherForecastCard {...props} showTempChart={showTempChart} />
        </Provider>
      ))
  );

  test("snapshot testing", () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  test("should include all components", () => {
    expect(wrapper.find(CardWrapper)).toHaveLength(1);
    expect(wrapper.find(Temperature)).toHaveLength(1);
    expect(wrapper.find(Description)).toHaveLength(1);
    expect(wrapper.find(WeatherIcon)).toHaveLength(1);
    expect(wrapper.find(DateText)).toHaveLength(2);
  });

  test("clicking a card should update the selected card state", async () => {
    expect(store.getState().selectedCard).toEqual(null);

    await act(async () => {
      wrapper.find(CardWrapper).prop("onClick")();
    });

    expect(store.getState().selectedCard).toEqual(props);
  });
});
