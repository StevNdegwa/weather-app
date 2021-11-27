import { mount } from "enzyme";
import { Provider } from "react-redux";
import { Box, GlobalStyles } from "@mui/material";
import store from "./features/store";
import { appLoaded } from "./features/loader/appLoadingSlice";
import AppLoader from "./components/AppLoader";
import App from "./App";

describe("test <App/> component", () => {
  test("should render the GlobalStyles component", () => {
    let wrapper = mount(
      <Provider store={store}>
        <App />
      </Provider>
    );

    expect(wrapper.find(App).childAt(0).type()).toEqual(GlobalStyles);
  });

  test("should render the AppLoader component by default", () => {
    
    let wrapper = mount(
      <Provider store={store}>
        <App />
      </Provider>
    );
    
    expect(wrapper.find(App).childAt(1).type()).toEqual(AppLoader);
  });

  test("should render the weather information dashboard", () => {
    store.dispatch(appLoaded());
    
    let wrapper = mount(
      <Provider store={store}>
        <App />
      </Provider>
    );
    
    expect(wrapper.find(App).childAt(1).type()).toEqual(Box);
  });
});
