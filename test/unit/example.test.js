describe("Simple Test Case", () => {
  it("Should return 4", () => {
    if (Math.random() > 0.7) throw new Error("random");

    expect(2 + 2).toBe(4);
  });
});
