import React from "react";
import { render, screen } from "@testing-library/react";
import ShoppingCart from "./ShoppingCart";
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

test("renders the shopping cart screen", () => {
  /* 
		Initially the component is in a loading state,
		due to time constraints I'm only chacking for the aria-label
	*/

  const renderedComponent = render(
    <Provider store={store}>
      <BrowserRouter>
        <ShoppingCart />
      </BrowserRouter>
    </Provider>
  );

  screen.debug();

  const shoppingCartAnchorNode = screen.getByLabelText("loading");

  expect(shoppingCartAnchorNode).toBeInTheDocument();
});
