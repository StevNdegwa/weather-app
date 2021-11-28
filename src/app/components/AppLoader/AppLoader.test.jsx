import { shallow } from "enzyme";
import { AppLoaderWrapper } from "./styles";
import AppLoader from "./AppLoader";

describe("test <AppLoader/> component", () => {
  let wrapper;

  beforeEach(() => (wrapper = shallow(<AppLoader />)));

  test("snapshot testing", () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  test("should contain the wrapper component", () => {
    expect(wrapper.find(AppLoaderWrapper)).toHaveLength(1);
  });
});
