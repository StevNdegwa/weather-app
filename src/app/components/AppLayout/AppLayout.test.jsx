import { mount } from "enzyme";
import { Box } from "@mui/material";
import AppLayout from "./AppLayout";

describe("test <AppLayout/> component", () => {
  let wrapper;

  beforeEach(
    () =>
      (wrapper = mount(
        <AppLayout>
          <span />
        </AppLayout>
      ))
  );

  test("snapshot testing", () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  test("should contain a Box component", () => {
    expect(wrapper.find(Box)).toHaveLength(1);
  });

  test("should render the component children", () => {
    expect(wrapper.childAt(0).type()).toBe("span");
  });
});
