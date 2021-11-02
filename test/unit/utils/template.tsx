import { AxiosResponse } from "axios";
import { createMemoryHistory } from "history";
import { ExampleApi, CartApi } from "../../../src/client/api";
import React from "react";
import { Router } from "react-router-dom";
import { Provider } from "react-redux";
import { render, within } from "@testing-library/react";
import { initStore } from "../../../src/client/store";
import "@testing-library/jest-dom";
import events from "@testing-library/user-event";
import { CartState, CheckoutFormData, CheckoutResponse, Product, ProductShortInfo } from "../../../src/common/types";
import { MockData } from "./mock";


export default function RenderReactTemplate(Children:React.FC, mock:MockData) {
  let history = createMemoryHistory({
    initialEntries: mock.initialEntries,
    initialIndex: mock.initialIndex,
  });

  const basename = "/hw/store/" + mock.basename;

  const api = new MockApi(mock.products);
  const cart = new CartApi();
  const store = initStore(api, cart);

  const application = (
    <Router history={history}>
      <Provider store={store}><Children/></Provider>
    </Router>
  );

  return render(application);
}

class MockApi extends ExampleApi {
  constructor(private readonly products:ProductShortInfo[]) {
super('/')
 }

   getProducts() {
      return Promise.resolve({data:this.products} as AxiosResponse<ProductShortInfo[], any>)
  }

  async getProductById(id: number) {
      return Promise.resolve({data:this.products.filter((e)=>e.id)[0]} as AxiosResponse<Product, any>)   
  }

  async checkout(form: CheckoutFormData, cart: CartState) {
      return  Promise.resolve({data:{id:1}} as AxiosResponse<CheckoutResponse, any>) 
  }
}