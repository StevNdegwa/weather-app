import { shallow } from "enzyme";
import { AppLoaderContent } from "./styles";
import AppLoader from "./AppLoader";

describe("test <AppLoader/> component", () => {
  let wrapper;

  beforeEach(()=>wrapper = shallow(<AppLoader/>))

  test("should contain the wrapper component", () => {
    expect(wrapper.find(AppLoaderContent)).toHaveLength(1);
  })
});