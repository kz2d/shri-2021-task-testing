/**
 * @jest-environment jsdom
 */
import { screen } from "@testing-library/dom";
import "@testing-library/jest-dom";
import events from "@testing-library/user-event";
import React from "react";
import { Application } from "../../../src/client/Application";
import { CreateMockData } from "../utils/mock";
import RenderReactTemplate from "../utils/template";
import event from "@testing-library/user-event";

describe("open main page", () => {
  it("open main page", () => {
    const { container, getByText } = RenderReactTemplate(
      Application,
      CreateMockData({
        history: {
          initialEntries: ["/cart"],
          initialIndex: 0,
        },
      })
    );
    screen.logTestingPlaygroundURL(container);
    const mainLink = getByText(/Example store/i);
    expect(mainLink).toHaveAttribute("href", "/");
    event.click(mainLink);
    expect(getByText(/welcome to example store!/i).textContent).toEqual(
      "Welcome to Example store!"
    );

    screen.logTestingPlaygroundURL(container);
  });
});
