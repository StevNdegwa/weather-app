import reducer, { setLocation } from "./setLocationSlice";

describe("test selectedLocationSlice", () => {

  test("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual("munich");
  });

  test("should update application loading state", () => {
    let prevState = "munich";
    expect(reducer(prevState, setLocation("nairobi")).payload).toEqual("nairobi");
  });
});
