import { shallow } from "enzyme";
import WeatherIcon from "./WeatherIcon";

describe("test the <WeatherIcon/> component", () => {
  let wrapper;

  beforeEach(() => (wrapper = shallow(<WeatherIcon />)));

  test("should contain Box component", () => {
    expect(wrapper.find("lottie-player")).toHaveLength(1);
  });
});
