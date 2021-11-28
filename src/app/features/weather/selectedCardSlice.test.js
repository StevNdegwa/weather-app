import selectedCardSlice, { selectCard } from "./selectedCardSlice";

let { reducer } = selectedCardSlice

describe("test selectedLocationSlice", () => {

  test("should return the initial state", () => {
    expect(reducer(undefined, {})).toBeNull();
  });

  test("should select a card", () => {
    let prevState = null;
    expect(reducer(prevState, selectCard({ temperature: 123.4 })))
      .toEqual({ temperature: 123.4 });
  });

});
