import React from "react";
import { render, screen } from "@testing-library/react";
import SpinContainer from "./SpinContainer";
import { store } from "../../app/store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

window.matchMedia =
  window.matchMedia ||
  function () {
    return {
      matches: false,
      addListener: function () {},
      removeListener: function () {},
    };
  };

test("renders the SpinContainer component", () => {
  const renderedComponent = render(
    <Provider store={store}>
      <BrowserRouter>
        <SpinContainer />
      </BrowserRouter>
    </Provider>
  );

  screen.debug();

  const spinContainerAnchorNode = screen.getByLabelText("loading");

  expect(spinContainerAnchorNode).toBeInTheDocument();
});
