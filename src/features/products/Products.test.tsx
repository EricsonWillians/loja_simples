import React from "react";
import { render, screen } from "@testing-library/react";
import Products from "./Products";
import { store } from "../../app/store";
import { Provider } from "react-redux";

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
  /* 
		Initially the component is in a loading state,
		due to time constraints I'm only chacking for the aria-label
	*/

  const renderedComponent = render(
    <Provider store={store}>
      <Products />
    </Provider>
  );

  screen.debug();

  const productsAnchorNode = screen.getByLabelText("loading");

  expect(productsAnchorNode).toBeInTheDocument();
});
