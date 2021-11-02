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
    screen.logTestingPlaygroundURL(container);
    expect(getByText(/name/i).textContent).toEqual("Name");

    screen.logTestingPlaygroundURL(container);
  });
});
