import { Product } from "../../../src/common/types";

export function CreateMockData(data: Partial<MockData> = {}): MockData {
  return {
    initialEntries: ["/"],
    initialIndex: 0,
    basename: "/hw/store",
    products: [],
    ...data,
  };
}

export interface MockData {
  initialEntries: string[];
  initialIndex: number;
  basename: string;
  products: Product[];
}
