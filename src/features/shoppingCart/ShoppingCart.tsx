import { Avatar, Col, List, Spin } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import getASingleProduct from "../../api/products/getASingleProduct";
import { useAppSelector } from "../../app/hooks";
import { StProductsContainer } from "../../common/productCard/styled";
import SpinContainer from "../../common/spinContainer/SpinContainer";
import { StSpinContainer } from "../../common/spinContainer/styled";
import { getUserCartsStart } from "../../store/ducks/carts/getUserCarts/actions";
import { getAllProductsStart } from "../../store/ducks/products/getAllProducts/actions";
import { getASingleProductStart } from "../../store/ducks/products/getASingleProduct/actions";
import ICart from "../../types/CartType";
import IProduct from "../../types/ProductType";

const ShoppingCart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userCarts = useAppSelector((state) => state.getUserCarts.carts);
  const userCartsLoading = useAppSelector(
    (state) => state.getAllProducts.loading
  );
  const allProducts = useAppSelector((state) => state.getAllProducts.products);

  // Using just "recent" products since there's no time,
  // to implement a whole cart history system
  const [recentCart, setRecentCart] = useState({} as ICart);
  const [recentProducts, setRecentProducts] = useState([] as IProduct[]);

  // Using a default one since I'm not sure I'll have time to implement
  // the whole user sign up / login system
  const defaultUserId = "1";

  useEffect(() => {
    dispatch(getAllProductsStart());
  }, []);

  useEffect(() => {
    dispatch(getUserCartsStart(defaultUserId));
  }, [allProducts]);

  useEffect(() => {
    if (userCarts?.length > 0) {
      setRecentCart(userCarts.slice(-1)[0]);
    }
  }, [userCarts]);

  const getCartProductInfo = (productId: string) => {
    const product = allProducts.find(
      (existingProduct: IProduct) => existingProduct.id === productId
    );
    return product;
  };

  useEffect(() => {
    if (recentCart?.products) {
      if (recentCart?.products?.length > 0) {
        console.log("recentCart.products", recentCart.products);
        const cartProducts = recentCart.products.map(
          ({ productId }: any): IProduct => {
            return getCartProductInfo(productId);
          }
        );
        if (cartProducts?.length > 0) {
          if (!cartProducts.some((element) => element === undefined)) {
            console.log("THE CART PRODUCTS", cartProducts);
            setRecentProducts(cartProducts);
          }
        }
      }
    }
  }, [recentCart, allProducts]);

  useEffect(() => {
    console.log("recentProducts", recentProducts);
  }, [recentProducts]);

  return (
    <>
      {userCartsLoading ? (
        <StSpinContainer />
      ) : (
        <StProductsContainer>
          <Col span={24}>
            {recentProducts?.length > 0 ? (
              <List
                itemLayout="horizontal"
                dataSource={recentProducts}
                renderItem={(item) => (
                  <List.Item key={item?.id}>
                    <List.Item.Meta
                      avatar={<Avatar src={item?.image} />}
                      title={
                        <a
                          onClick={() => {
                            navigate(`/produto/${item?.id}`);
                          }}
                        >
                          {item?.title}
                        </a>
                      }
                      description={item?.description}
                      style={{
                        textAlign: "start",
                      }}
                    />
                  </List.Item>
                )}
              />
            ) : (
              <SpinContainer />
            )}
          </Col>
        </StProductsContainer>
      )}
    </>
  );
};

export default ShoppingCart;
