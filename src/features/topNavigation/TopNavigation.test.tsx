import React from "react";
import { render, screen } from "@testing-library/react";
import TopNavigation from "./TopNavigation";
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

test("renders the TopNavigation component", () => {
  /* 
		Here I'm only checking for the existence of a menu,
    which is the main purpose of this component.
    Due to time constraints, I'm not checking for the content of the menu.
	*/

  const renderedComponent = render(
    <Provider store={store}>
      <BrowserRouter>
        <TopNavigation />
      </BrowserRouter>
    </Provider>
  );

  screen.debug();

  const menuAnchorNode = screen.getByRole("menu");

  expect(menuAnchorNode).toBeInTheDocument();
});
