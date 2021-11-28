import selectedScaleSlice, { toggleScale } from "./selectedScaleSlice";

let { reducer } = selectedScaleSlice

const initialState = "C";

describe("test selectedLocationSlice", () => {

  test("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  test("should toggle scale 1", () => {
    expect(reducer(initialState, toggleScale()))
      .toEqual("F");
  });

  test("should toggle scale 2", () => {
    let prevState = "C";
    expect(reducer(prevState, toggleScale()))
      .toEqual("F");
  });
});
