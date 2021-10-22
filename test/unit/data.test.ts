import { ExampleStore } from "../../src/server/data";
import { Order } from "../../src/common/types";

describe("server/store", () => {
  it("create", () => {
    const store = new ExampleStore();
    expect(store).toBeDefined();
  });
  it("get all product", () => {
    const store = new ExampleStore();
    store.getAllProducts().map((el) =>
      expect(el).toMatchObject({
        id: expect.any(Number),
        name: expect.any(String),
        price: expect.any(Number),
      })
    );
  });
  it("get product by id", () => {
    const store = new ExampleStore();
    const product = store.getAllProducts();
    if (product.length > 0) {
      const num = Math.floor(product.length / 2);

      expect(store.getProductById(product[num].id)).toMatchObject(product[num]);
    } else {
      throw new Error("length == 0");
    }
  });
  it("add irder and get last order", () => {
    const store = new ExampleStore();
    const option: Order = {
      form: { address: "my-adress", name: "my-name", phone: "my-phone" },
      cart: [],
    };
    store.createOrder(option);
    expect(store.getLatestOrders()).toContainEqual({
      ...option,
      id: expect.any(Number),
    });
  });
});
