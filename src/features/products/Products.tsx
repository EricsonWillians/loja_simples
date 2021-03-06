import { Card, Col, Image, Row, Tooltip } from "antd";
import React, { useEffect, useRef } from "react";
import { useAppSelector } from "../../app/hooks";
import { StProductsContainer } from "../../common/productCard/styled";
import { useDispatch } from "react-redux";
import { getAllProductsStart } from "../../store/ducks/products/getAllProducts/actions";
import IProduct from "../../types/ProductType";
import ProductCard from "../../common/productCard/ProductCard";
import SpinContainer from "../../common/spinContainer/SpinContainer";

const Products = () => {
  const dispatch = useDispatch();

  const allProducts = useAppSelector((state) => state.getAllProducts.products);
  const allProductsLoading = useAppSelector(
    (state) => state.getAllProducts.loading
  );
  const allProductsError = useAppSelector(
    (state) => state.getAllProducts.error
  );

  useEffect(() => {
    dispatch(getAllProductsStart());
  }, []);

  const renderCards = () => {
    return allProducts.map((product: IProduct) => {
      return (
        <Col span={6}>
          {
            <ProductCard
              product={product}
              isLoading={allProductsLoading}
              isDetailed={false}
            />
          }
        </Col>
      );
    });
  };

  return (
    <>
      {allProductsLoading ? (
        <SpinContainer />
      ) : (
        <>
          {allProductsError ? (
            <h1>Erro na API :(</h1>
          ) : (
            <StProductsContainer gutter={16}>
              {renderCards()}
            </StProductsContainer>
          )}
        </>
      )}
    </>
  );
};

export default Products;
