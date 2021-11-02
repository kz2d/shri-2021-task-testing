import { Product } from "../../../src/common/types";

export function CreateMockData(data = {}): MockData {
  console.log(
    {
      history: {
        initialEntries: ["/"],
        initialIndex: 0,
      },
      basename: "/hw/store",
      products: [],
      ...data,
    }.history.initialEntries
  );

  return {
    history: {
      initialEntries: ["/"],
      initialIndex: 0,
    },
    basename: "/hw/store",
    products: [],
    ...data,
  };
}

export interface MockData {
  history: {
    initialEntries: string[];
    initialIndex: number;
  };
  basename: string;
  products: Product[];
}
