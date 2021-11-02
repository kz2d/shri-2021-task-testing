/**
 * @jest-environment jsdom
 */
import { getByRole, screen, waitFor, within } from "@testing-library/dom";
import "@testing-library/jest-dom";
import events from "@testing-library/user-event";
import React from "react";
import { Application } from "../../../src/client/Application";
import { CreateMockData } from "../utils/mock";
import RenderReactTemplate from "../utils/template";
import event from "@testing-library/user-event";
import { Matcher, MatcherOptions } from "@testing-library/react";

describe("cart page", () => {
  it("cart add few items click", async () => {
    const { container, getByText, getAllByTestId, getByRole } =
      RenderReactTemplate(
        Application,
        CreateMockData({
          initialEntries: ["/catalog"],
          products: [
            {
              color: "red",
              id: 1,
              name: "one Name",
              price: 123,
              description: "one description",
              material: "one material",
            },
            {
              color: "red",
              id: 2,
              name: "two Name",
              price: 126,
              description: "two description",
              material: "two material",
            },
          ],
        })
      );
    await AddTwoItemsToCart(container, getAllByTestId);
    event.click(within(container).getByRole("link", { name: /cart \(2\)/i }));
    expect(getByText(/clear shopping cart/i)).toBeTruthy();
    event.click(getByText(/clear shopping cart/i));
    expect(getByText("catalog")).toBeTruthy();
    // const table = getByRole("table");
    // expect(within(container).getByRole("link", { name: /cart \(1\)/i }));
    // screen.logTestingPlaygroundURL(container);
    //   });

    //   it("cart top counter", async () => {
    //     const { container, getByText, getAllByTestId } = RenderReactTemplate(
    //       Application,
    //       CreateMockData({
    //         initialEntries: ["/catalog"],
    //         products: [
    //           {
    //             color: "red",
    //             id: 1,
    //             name: "one Name",
    //             price: 123,
    //             description: "one description",
    //             material: "one material",
    //           },
    //           {
    //             color: "red",
    //             id: 2,
    //             name: "two Name",
    //             price: 126,
    //             description: "two description",
    //             material: "two material",
    //           },
    //         ],
    //       })
    //     );
    //     await AddTwoItemsToCart(container, getAllByTestId);
    //     expect(within(container).getByRole("link", { name: /cart \(2\)/i }));
    //   });

    //   it("cart add few items click", async () => {
    //     const { container, getByText, getAllByTestId, getByRole } =
    //       RenderReactTemplate(
    //         Application,
    //         CreateMockData({
    //           initialEntries: ["/catalog"],
    //           products: [
    //             {
    //               color: "red",
    //               id: 1,
    //               name: "one Name",
    //               price: 123,
    //               description: "one description",
    //               material: "one material",
    //             },
    //             {
    //               color: "red",
    //               id: 2,
    //               name: "two Name",
    //               price: 126,
    //               description: "two description",
    //               material: "two material",
    //             },
    //           ],
    //         })
    //       );
    //     console.log("fghhhhhhhhhhhhhhhhhhhhhhhhhhh");
    event.click(getByText("catalog"));
    await AddTwoItemsToCart(container, getAllByTestId);
    event.click(within(container).getByRole("link", { name: /cart \(2\)/i }));
    screen.logTestingPlaygroundURL(container);
    const table = getByRole("table");
    expect(within(table).getByText("one Name")).toBeTruthy();
    expect(within(table).getByText("two Name")).toBeTruthy();
    expect(within(table).getByText("$123")).toBeTruthy();
    expect(within(table).getByText("$126")).toBeTruthy();
    expect(within(table).getByText("4")).toBeTruthy();
    expect(within(table).getByText("3")).toBeTruthy();
    expect(within(table).getByText("$870")).toBeTruthy();
    expect(within(table).getByText("$492")).toBeTruthy();
    expect(within(table).getByText("$378")).toBeTruthy();
    // expect(within(container).getByRole("link", { name: /cart \(1\)/i }));
    // screen.logTestingPlaygroundURL(container);
  });
});

async function AddTwoItemsToCart(
  container: HTMLElement,
  getAllByTestId: (id: Matcher, options?: MatcherOptions) => HTMLElement[]
) {
  await waitFor(() => expect(screen.queryByText(/loading/i)).toBeNull());

  screen.logTestingPlaygroundURL(container);
  let item = getAllByTestId(1)[0];

  event.click(within(item).queryByText("Details"));
  await waitFor(() => expect(screen.queryByText(/loading/i)).toBeNull());
  for (let i = 0; i < 4; i++) {
    event.click(
      within(container).queryByRole("button", { name: /add to cart/i })
    );
  }
  screen.logTestingPlaygroundURL(container);
  expect(within(container).getByText(/item in cart/i));
  expect(within(container).getByRole("link", { name: /cart \(1\)/i }));
  event.click(within(container).queryByText(/catalog/i));
  await waitFor(() => expect(screen.queryByText(/loading/i)).toBeNull());
  screen.logTestingPlaygroundURL(container);

  item = getAllByTestId(2)[1];

  event.click(within(item).queryByText(/details/i));
  await waitFor(() => expect(screen.queryByText(/loading/i)).toBeNull());
  for (let i = 0; i < 3; i++) {
    event.click(
      within(container).queryByRole("button", { name: /add to cart/i })
    );
  }
  screen.logTestingPlaygroundURL(container);
}
