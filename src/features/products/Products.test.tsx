import React from "react";
import { render } from "@testing-library/react";
import Products from "./Products";

window.matchMedia =
  window.matchMedia ||
  function () {
    return {
      matches: false,
      addListener: function () {},
      removeListener: function () {},
    };
  };

test("renders the products screen", () => {
  const renderedApp = render(<Products />);
  /* const productsAnchorNode = screen.getByText("/produtos"); */
});
