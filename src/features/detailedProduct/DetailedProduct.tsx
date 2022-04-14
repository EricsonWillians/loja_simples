import React from "react";
import PropTypes from "prop-types";
import { Card, Col, Image, Row, Tooltip } from "antd";
import StarRatingComponent from "react-star-rating-component";

const DetailedProduct = () => {
  return (
    <Row>
      <Col span={12}>
        {/* <Card
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
              onClick={() => navigate(`/product/${product?.id}`)}
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
        </Card> */}
        <p>Card :)</p>
      </Col>
    </Row>
  );
};

DetailedProduct.propTypes = {};

export default DetailedProduct;
