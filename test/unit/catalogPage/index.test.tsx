/**
 * @jest-environment jsdom
 */
import { screen, waitFor, within } from "@testing-library/dom";
import "@testing-library/jest-dom";
import events from "@testing-library/user-event";
import React from "react";
import { Application } from "../../../src/client/Application";
import { CreateMockData } from "../utils/mock";
import RenderReactTemplate from "../utils/template";
import event from "@testing-library/user-event";

describe("catalog page", () => {
  it("open main page", async () => {
    const { container, getByText, getAllByTestId } = RenderReactTemplate(
      Application,
      CreateMockData({
        initialEntries: ["/catalog"],
        products: [
          {
            color: "red",
            id: 1,
            name: "Name",
            price: 123,
            description: "description",
            material: "material",
          },
        ],
      })
    );
    await waitFor(() => expect(screen.queryByText(/loading/i)).toBeNull());

    screen.logTestingPlaygroundURL(container);
    const item = getAllByTestId(1)[0];
    expect(within(item).queryByText("Name")).toBeTruthy();
    expect(within(item).queryByText("$123")).toBeTruthy();
    expect(
      item.getElementsByClassName("ProductItem-DetailsLink")[0]
    ).toHaveAttribute("href", "/catalog/1");

    screen.logTestingPlaygroundURL(container);
  });

  it("description page", async () => {
    const { container, getByText, getAllByTestId } = RenderReactTemplate(
      Application,
      CreateMockData({
        initialEntries: ["/catalog"],
        products: [
          {
            color: "red",
            id: 1,
            name: "any Name",
            price: 123,
            description: "any description",
            material: "any material",
          },
        ],
      })
    );
    await waitFor(() => expect(screen.queryByText(/loading/i)).toBeNull());

    event.click(within(getAllByTestId(1)[0]).queryByText("Details"));
    await waitFor(() => expect(screen.queryByText(/loading/i)).toBeNull());

    expect(within(container).queryByText("any Name")).toBeTruthy();
    expect(within(container).queryByText("$123")).toBeTruthy();
    expect(within(container).queryByText("red")).toBeTruthy();
    expect(within(container).queryByText("any material")).toBeTruthy();
    expect(within(container).queryByText("any description")).toBeTruthy();
    expect(
      within(container).queryByRole("button", { name: /add to cart/i })
    ).toBeTruthy();
  });

  it("description page click", async () => {
    const { container, getByText, getAllByTestId } = RenderReactTemplate(
      Application,
      CreateMockData({
        initialEntries: ["/catalog"],
        products: [
          {
            color: "red",
            id: 1,
            name: "any Name",
            price: 123,
            description: "any description",
            material: "any material",
          },
        ],
      })
    );
    await waitFor(() => expect(screen.queryByText(/loading/i)).toBeNull());

    const item = getAllByTestId(1)[0];
    event.click(within(item).queryByText("Details"));
    await waitFor(() => expect(screen.queryByText(/loading/i)).toBeNull());
    event.click(
      within(container).queryByRole("button", { name: /add to cart/i })
    );
    expect(within(container).getByText(/item in cart/i));
    expect(within(container).getByRole("link", { name: /cart \(1\)/i }));
    event.click(
      within(container).queryByRole("button", { name: /add to cart/i })
    );
    event.click(
      within(container).queryByRole("button", { name: /add to cart/i })
    );
    expect(within(container).getByRole("link", { name: /cart \(1\)/i }));
    // screen.logTestingPlaygroundURL(container);
  });
});
