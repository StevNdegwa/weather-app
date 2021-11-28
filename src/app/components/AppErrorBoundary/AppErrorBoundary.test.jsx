import { mount } from "enzyme";
import AppErrorBoundary from "./AppErrorBoundary";
import ErrorPage from "../ErrorPage";

const App = () => <span></span>;

describe("AppErrorBoundary", () => {
  test("should display an ErrorPage if wrapped component throws", () => {
    const wrapper = mount(
      <AppErrorBoundary>
        <App />
      </AppErrorBoundary>
    );

    expect(wrapper.find(ErrorPage)).toHaveLength(0);
    expect(wrapper.find(App)).toHaveLength(1);

    wrapper.find(App).simulateError(new Error("A very bad error"));

    expect(wrapper.find(App)).toHaveLength(0);
    expect(wrapper.find(ErrorPage)).toHaveLength(1);
  });
});
