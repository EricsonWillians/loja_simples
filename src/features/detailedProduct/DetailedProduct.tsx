import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Card, Col, Image, Row, Tooltip } from "antd";
import StarRatingComponent from "react-star-rating-component";
import { useDispatch } from "react-redux";
import getASingleProduct from "../../api/products/getASingleProduct";
import { getASingleProductStart } from "../../store/ducks/products/getASingleProduct/actions";
import { useAppSelector } from "../../app/hooks";

const DetailedProduct = () => {
  const dispatch = useDispatch();

  const singleProduct = useAppSelector(
    (state) => state.getASingleProduct.product
  );
  const singleProductLoading = useAppSelector(
    (state) => state.getAllProducts.loading
  );

  useEffect(() => {
    const productId = window.location.pathname.split("/").slice(-1)[0];
    dispatch(getASingleProductStart(productId));
  }, []);

  useEffect(() => {
    console.log("SINGLE PRODUCT", singleProduct);
  }, [singleProduct]);

  return (
    <Row>
      <Col span={12}>
        <Card
          title={singleProduct?.title}
          loading={singleProductLoading}
          cover={
            <Image
              alt={singleProduct?.title}
              src={singleProduct?.image}
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
                {singleProduct?.price?.toLocaleString("pt-br", {
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
                  value={singleProduct?.rating?.rate}
                />
              </Col>
              <Col span={6}>
                <Tooltip title="Avaliações">
                  <span>({singleProduct?.rating?.count})</span>
                </Tooltip>
              </Col>
            </Row>
          </Row>
        </Card>
      </Col>
    </Row>
  );
};

DetailedProduct.propTypes = {};

export default DetailedProduct;
