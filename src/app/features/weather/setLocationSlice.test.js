import reducer, { setLocation } from "./setLocationSlice";

const initialState = {
  name: "Munich",
  country: "Germany"
}

describe("test selectedLocationSlice", () => {

  test("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  test("should update selected location state", () => {
    expect(reducer(initialState, setLocation({
      name: "Nairobi",
      country: "KE"
    })).payload)
      .toEqual({
        name: "Nairobi",
        country: "KE"
      });
  });
});
