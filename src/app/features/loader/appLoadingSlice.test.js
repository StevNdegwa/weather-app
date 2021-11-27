import reducer, { appLoaded } from "./appLoadingSlice";

describe("test appLoadingSlice", () => {

  test("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual(true);
  });

  test("should update application loading state", () => {
    let prevState = true;
    expect(reducer(prevState, appLoaded())).toEqual(false);
  });
});
