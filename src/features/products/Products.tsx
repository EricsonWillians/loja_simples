import { Card, Col, Image, Row } from "antd";
import React, { useEffect, useRef } from "react";
import { useAppSelector } from "../../app/hooks";
import { RootState } from "../../app/store";
import calculateAspectRatio from "../../helpers/calculateAspectRatio";
import { StProductsContainer } from "./styled";

const Products = () => {
  const allProducts = useAppSelector((state) => state.getAllProducts.products);
  const allProductsLoading = useAppSelector(
    (state) => state.getAllProducts.loading
  );

  useEffect(() => {
    console.log("ALL PRODUCTS", allProducts);
  }, [allProducts]);

  const renderCards = () => {
    return allProducts.map((product: any) => {
      return (
        <Col span={6}>
          {
            <Card
              title={product?.title}
              loading={allProductsLoading}
              cover={
                <Image
                  alt={product?.title}
                  src={product?.image}
                  style={{
                    width: 300,
                    height: 300,
                    objectFit: "contain",
                    objectPosition: "50% 50%",
                  }}
                ></Image>
              }
              bordered
              bodyStyle={{
                textAlign: "left",
              }}
            >
              <p>
                {product?.price.toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })}
              </p>
            </Card>
          }
        </Col>
      );
    });
  };

  return <StProductsContainer gutter={16}>{renderCards()}</StProductsContainer>;
};

export default Products;
