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

describe("open main page", () => {
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
});
