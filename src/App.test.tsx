import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

window.matchMedia =
  window.matchMedia ||
  function () {
    return {
      matches: false,
      addListener: function () {},
      removeListener: function () {},
    };
  };

test("renders the app and find a loading label and a meu role", () => {
  const renderedApp = render(<App />);
  screen.debug();

  const spinContainerAnchorNode = screen.getByLabelText("loading");
  expect(spinContainerAnchorNode).toBeInTheDocument();
  const menuAnchorNode = screen.getByRole("menu");
  expect(menuAnchorNode).toBeInTheDocument();
});
