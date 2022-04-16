import React from "react";
import PropTypes from "prop-types";
import { Card, Col, Image, Row, Tooltip } from "antd";
import { useNavigate } from "react-router-dom";
import StarRatingComponent from "react-star-rating-component";
import IProductCard from "../../types/ProductCardType";

const ProductCard = ({ product, isLoading, isDetailed }: IProductCard) => {
  const navigate = useNavigate();

  return (
    <Card
      title={product?.title}
      loading={isLoading}
      key={product?.id}
      cover={
        <Image
          alt={product?.title}
          src={product?.image}
          preview={isDetailed}
          style={{
            width: 300,
            height: 300,
            objectFit: "contain",
            objectPosition: "50% 50%",
          }}
          {...(!isDetailed
            ? { onClick: () => navigate(`/produto/${product?.id}`) }
            : {})}
        ></Image>
      }
      bordered
      style={{
        cursor: "pointer",
      }}
      headStyle={{
        fontWeight: "bold",
        fontSize: "1.3rem",
      }}
      bodyStyle={{
        textAlign: "left",
      }}
    >
      {!isDetailed ? (
        <Row justify="space-between">
          <Col>
            <p>
              {product?.price?.toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
              })}
            </p>
          </Col>
          <Col>
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
          </Col>
        </Row>
      ) : (
        <></>
      )}
    </Card>
  );
};

export default ProductCard;
