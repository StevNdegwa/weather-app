import { shallow } from "enzyme";
import { Box, Fade } from "@mui/material";
import AppLayout from "./AppLayout";

describe("test <AppLayout/> component", () => {
  let wrapper;

  beforeEach(
    () =>
      (wrapper = shallow(
        <AppLayout>
          <span />
        </AppLayout>
      ))
  );

  test("should contain a Box component", () => {
    expect(wrapper.find(Box)).toHaveLength(1);
  });

  test("should contain the Fade component", () => {
    expect(wrapper.find(Fade)).toHaveLength(1);
  })

  test("should render the component children", () => {
    expect(wrapper.childAt(0).childAt(0).type()).toBe("span");
  });
});
