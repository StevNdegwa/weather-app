import { mount } from "enzyme";
import { Provider } from "react-redux";
import store from "../../features/store";
import WeatherForecastCard from "./WeatherForecastCard";
import { CardWrapper, Temperature } from "./styles";
import { act } from "@testing-library/react";
import { formatDate } from "./WeatherForecastCard";

describe("test <WeatherForecastCard/> component", () => {
  let wrapper,
    showTempChart = jest.fn(),
    date = new Date("2021-12-12T07:29:45.123Z"),
    props = {
      date,
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
  });

  it("should contain weather forecast day", () => {
    expect(wrapper.find(WeatherForecastCard).text()).toEqual(
      expect.stringContaining(formatDate(props.date))
    );
  });

  test("clicking a card should update the selected card state", async () => {
    expect(store.getState().selectedDate).toEqual(null);

    await act(async () => {
      wrapper.find(CardWrapper).prop("onClick")();
    });

    expect(store.getState().selectedDate).toEqual(date.toJSON());
  });
});
