import React from "react";
import { render, screen } from "@testing-library/react";
import ProductCard from "./ProductCard";
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

const fakeProduct = {
  category: "men's clothing",
  description:
    "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
  id: "1",
  image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  price: 109.95,
  rating: { rate: 3.9, count: 120 },
  title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
};

test("renders the product card component", () => {
  /* 
		In this one I'm checking if the specific product text is rendered,
    due to time constraints, it's not an integrated test.
	*/

  const renderedComponent = render(
    <Provider store={store}>
      <BrowserRouter>
        <ProductCard
          product={fakeProduct}
          isLoading={false}
          isDetailed={false}
        />
      </BrowserRouter>
    </Provider>
  );

  screen.debug();

  const productCardAnchorNode = screen.getByText(
    "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"
  );

  expect(productCardAnchorNode).toBeInTheDocument();
});
