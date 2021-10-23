import { router } from "../../src/server/routes";

describe("server/routes", () => {
  it("open main page", () => {
    expect(router.length).toBe(3);
  });
});
