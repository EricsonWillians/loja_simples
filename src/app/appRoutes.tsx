import browserHistory from "./history";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Products from "../features/products/Products";
import ShoppingCart from "../features/shoppingCart/ShoppingCart";
import TopNavigation from "../features/topNavigation/TopNavigation";
import DetailedProduct from "../features/detailedProduct/DetailedProduct";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <TopNavigation />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="*" element={<div>Essa página não existe :(</div>} />
        <Route path="/produtos" element={<Products />} />
        <Route path="/produto/:id" element={<DetailedProduct />} />
        <Route path="/carrinho" element={<ShoppingCart />} />
        <Route path="/checkout" element={<p>Você realizou uma compra :)</p>} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
