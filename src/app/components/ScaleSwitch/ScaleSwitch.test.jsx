import { mount } from "enzyme";
import { Provider } from "react-redux";
import ScaleSwitch from "./ScaleSwitch";
import { RadioGroup } from "@mui/material";
import { act } from "@testing-library/react";
import store from "../../features/store";

describe("test <ScaleSwitch/> component", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <Provider store={store}>
        <ScaleSwitch />
      </Provider>
    );
  });

  test("should have celcius as default", () => {
    expect(wrapper.find(RadioGroup).prop("defaultValue")).toEqual("C");
  });

  test("should toggle scale value", async () => {
    expect(store.getState().selectedScale).toEqual("C");

    await act(async () => {
      wrapper.find(RadioGroup).prop("onChange")();
    });

    expect(store.getState().selectedScale).toEqual("F");

    await act(async () => {
      wrapper.find(RadioGroup).prop("onChange")();
    });

    expect(store.getState().selectedScale).toEqual("C");
  });
});
