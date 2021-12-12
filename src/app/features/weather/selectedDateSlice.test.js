import selectedDateSlice, { selectDate } from "./selectedDateSlice";

let { reducer } = selectedDateSlice

describe("test selectedLocationSlice", () => {

  test("should return the initial state", () => {
    expect(reducer(undefined, {})).toBeNull();
  });

  test("should select a card", () => {
    let prevState = null;
    expect(reducer(prevState, selectDate("2021-12-12T09:52:22.941Z")))
      .toEqual("2021-12-12T09:52:22.941Z");
  });

});
