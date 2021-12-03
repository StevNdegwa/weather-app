import { createRef } from "react";
import { mount } from "enzyme";
import { Slide } from "react-slideshow-image";
import { Slider } from "@mui/material";
import { act } from "@testing-library/react";
import WeatherCardsSlider from "./WeatherCardsSlider";

describe("test <WeatherCardsSlider/>", () => {
  let wrapper,
    forecast = [],
    showTempChart = jest.fn(),
    ref = createRef();

  beforeEach(() => {
    wrapper = mount(
      <WeatherCardsSlider
        forecast={forecast}
        showTempChart={showTempChart}
        ref={ref}
      />
    );
  });

  test("snapshot testing", () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  test("should render right components", () => {
    expect(wrapper.find(Slide)).toHaveLength(1);
    expect(wrapper.find(Slider)).toHaveLength(1);
  });

  test("should update slide index", async () => {
    expect(wrapper.find(Slider).prop("value")).toEqual(0);

    await act(async () => {
      wrapper.find(Slide).prop("onChange")(0, 1);
    });

    wrapper.update();

    expect(wrapper.find(Slider).prop("value")).toEqual(1);

  });
});
