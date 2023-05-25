import axios from "axios";

describe("test look", () => {
  let data;

  beforeAll(async () => {
    const response = await axios.get("http://localhost:3000/get");
    data = response.data;
  });

  test("test 释义组", () => {
    expect(data.text).toEqual("get");
  });
});
