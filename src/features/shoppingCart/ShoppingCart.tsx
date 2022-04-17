import { Avatar, Button, Col, InputNumber, List, Row, Spin } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import getASingleProduct from "../../api/products/getASingleProduct";
import { useAppSelector } from "../../app/hooks";
import { StProductsContainer } from "../../common/productCard/styled";
import SpinContainer from "../../common/spinContainer/SpinContainer";
import { StSpinContainer } from "../../common/spinContainer/styled";
import getDefaultCartId from "../../helpers/getDefaultCartId";
import getDefaultDate from "../../helpers/getDefaultDate";
import getDefaultUserId from "../../helpers/getDefaultUserId";
import { getASingleCartStart } from "../../store/ducks/carts/getASingleCart/actions";
import { getUserCartsStart } from "../../store/ducks/carts/getUserCarts/actions";
import { updateCartStart } from "../../store/ducks/carts/updateCart/actions";
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
  const singleCart = useAppSelector((state) => state.getASingleCart.cart);
  const singleCartLoading = useAppSelector(
    (state) => state.getASingleCart.loading
  );
  const allProducts = useAppSelector((state) => state.getAllProducts.products);
  const allProductsLoading = useAppSelector(
    (state) => state.getAllProducts.loading
  );

  // Using just "recent" products since there's no time,
  // to implement a whole cart history system
  const [recentCart, setRecentCart] = useState({} as ICart);
  const [recentProducts, setRecentProducts] = useState([] as IProduct[]);

  useEffect(() => {
    dispatch(getAllProductsStart());
  }, []);

  useEffect(() => {
    dispatch(getASingleCartStart(getDefaultCartId()));
  }, [allProducts]);

  useEffect(() => {
    setRecentCart(singleCart);
  }, [singleCart]);

  const getCartProductInfo = (productId: string) => {
    const product = allProducts.find(
      (existingProduct: IProduct) => existingProduct.id === productId
    );
    return product;
  };

  useEffect(() => {
    if (recentCart?.products) {
      if (recentCart?.products?.length > 0) {
        const cartProducts = recentCart.products.map(
          ({ productId }: any): IProduct => {
            return getCartProductInfo(productId);
          }
        );
        if (cartProducts?.length > 0) {
          if (!cartProducts.some((element) => element === undefined)) {
            setRecentProducts(cartProducts);
          }
        }
      }
    }
  }, [recentCart, allProducts]);

  const removeItemFromCart = (productId: string) => {
    /*
      Since I'm working with a fake / mocked api,
      the removed cart products won't actually be removed from the cart.
    */
    const updatedProducts = recentProducts.filter(
      (product: IProduct) => product.id !== productId
    );
    setRecentProducts(updatedProducts);
    dispatch(
      updateCartStart(getDefaultUserId(), getDefaultDate(), [
        {
          productId,
          quantity: 0,
        },
      ])
    );
  };

  return (
    <>
      {userCartsLoading || singleCartLoading || allProductsLoading ? (
        <SpinContainer />
      ) : (
        <StProductsContainer gutter={[0, 16]}>
          <Col span={24}>
            {recentProducts?.length > 0 && !singleCartLoading ? (
              <List
                itemLayout="horizontal"
                dataSource={recentProducts}
                renderItem={(item) => (
                  <Row align="middle">
                    <Col span={18}>
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
                        <Button type="primary" />
                      </List.Item>
                    </Col>
                    <Col span={1}>
                      <span>Qtd.</span>
                    </Col>
                    <Col span={1}>
                      <InputNumber
                        min={1}
                        max={10}
                        defaultValue={3}
                        onChange={(value: number) => {
                          // TODO: Implement quantity update
                          // Since it's a fake API and there's not enough time,
                          // I'm just leaving the component here
                          // Also, I pass the quantity value to the updateCartStart action
                          // on the DetailedProduct component
                        }}
                        style={{ width: "100%" }}
                      />
                    </Col>
                    <Col span={4}>
                      <Button
                        type="primary"
                        danger
                        onClick={() => {
                          removeItemFromCart(item?.id);
                        }}
                      >
                        Remover
                      </Button>
                    </Col>
                  </Row>
                )}
              />
            ) : (
              <p>Não há itens no carrinho :(</p>
            )}
          </Col>
          {recentProducts?.length > 0 ? (
            <Col>
              <Button type="primary" onClick={() => navigate("/checkout")}>
                Finalizar compra
              </Button>
            </Col>
          ) : (
            <></>
          )}
        </StProductsContainer>
      )}
    </>
  );
};

export default ShoppingCart;
