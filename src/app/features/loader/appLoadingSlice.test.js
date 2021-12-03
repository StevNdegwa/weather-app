import applicationLoading, { appLoaded } from "./appLoadingSlice";

describe("test appLoadingSlice", () => {

  test("should return the initial state", () => {
    expect(applicationLoading.reducer(undefined, {})).toEqual(true);
  });

  test("should update application loading state", () => {
    let prevState = true;
    expect(applicationLoading.reducer(prevState, appLoaded())).toEqual(false);
  });
});
