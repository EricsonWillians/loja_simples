import { Card, Col, Image, Row } from "antd";
import React, { useEffect, useRef } from "react";
import { useAppSelector } from "../../app/hooks";
import { StProductsContainer } from "./styled";
import StarRatingComponent from "react-star-rating-component";

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
              <Row justify="space-between">
                <Col>
                  <p>
                    {product?.price.toLocaleString("pt-br", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </p>
                </Col>
                <Row>
                  <Col span={18}>
                    <StarRatingComponent
                      name="Avaliação"
                      starCount={5}
                      value={product?.rating?.rate}
                    />
                  </Col>
                  <Col span={6}>
                    <p> ({product?.rating?.count})</p>
                  </Col>
                </Row>
              </Row>
            </Card>
          }
        </Col>
      );
    });
  };

  return <StProductsContainer gutter={16}>{renderCards()}</StProductsContainer>;
};

export default Products;
