import { mount } from "enzyme";
import fetchMock from "jest-fetch-mock";
import { Provider } from "react-redux";
import { GlobalStyles } from "@mui/material";
import { appLoaded } from "./features/loader/appLoadingSlice";
import store from "./features/store";
import AppLoader from "./components/AppLoader";
import AppLayout from "./components/AppLayout";
import WeatherDashBoard from "./components/WeatherDashBoard";
import AppErrorBoundary from "./components/AppErrorBoundary";

import App from "./App";

describe("test <App/> component", () => {
  let wrapper;

  beforeEach(() => {
    fetchMock.resetMocks();

    wrapper = mount(
      <Provider store={store}>
        <App />
      </Provider>
    );
  });

  test("snapshot testing", () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  test("should render AppLayout component", () => {
    expect(wrapper.find(AppLayout)).toHaveLength(1);
  });

  test("should render all the components by default", () => {
    expect(wrapper.find(GlobalStyles)).toHaveLength(1);
    expect(wrapper.find(AppLoader)).toHaveLength(1);
    expect(wrapper.find(WeatherDashBoard)).toHaveLength(0);
    expect(wrapper.find(AppErrorBoundary)).toHaveLength(1);
  });

  test("should not render the application loader", () => {
    store.dispatch(appLoaded());
    wrapper.update();
    expect(wrapper.find(AppLoader)).toHaveLength(0);
    expect(wrapper.find(WeatherDashBoard)).toHaveLength(1);
  });

});
