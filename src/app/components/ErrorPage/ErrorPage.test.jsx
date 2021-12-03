import { mount } from "enzyme";
import { act } from "@testing-library/react";
import { Button } from "@mui/material";
import { ErrorPageContent } from "./styles";
import ErrorPage from "./ErrorPage";

describe("test <ErrorPage/> component", () => {
  let wrapper,
    errorMessage = "A bad error",
    windowSpy;

  beforeEach(() => {
    windowSpy = jest.spyOn(window, "window", "get");
    wrapper = mount(<ErrorPage errorMessage={errorMessage} />);
  });

  afterEach(() => {
    windowSpy.mockRestore();
  });

  test("snapshot testing", () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  test("should render error message", () => {
    expect(wrapper.find(ErrorPageContent).text()).toEqual(
      expect.stringContaining(errorMessage)
    );
  });

  test("should reload application", async () => {
    let reload = jest.fn();

    windowSpy.mockImplementation(() => ({
      location: {
        reload,
      },
    }));

    await act(async () => {
      wrapper.find(Button).prop("onClick")();
    });

    expect(reload).toHaveBeenCalled();
  });
});
