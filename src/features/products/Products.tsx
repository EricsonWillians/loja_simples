import { Card, Col, Image, Row, Tooltip } from "antd";
import React, { useEffect, useRef } from "react";
import { useAppSelector } from "../../app/hooks";
import { StProductsContainer } from "./styled";
import StarRatingComponent from "react-star-rating-component";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const navigate = useNavigate();

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
                  preview={false}
                  style={{
                    width: 300,
                    height: 300,
                    objectFit: "contain",
                    objectPosition: "50% 50%",
                  }}
                  onClick={() => navigate(`/produto/${product?.id}`)}
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
                    <Tooltip title="Avaliações">
                      <span>({product?.rating?.count})</span>
                    </Tooltip>
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
