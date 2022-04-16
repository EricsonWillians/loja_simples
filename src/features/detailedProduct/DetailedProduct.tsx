import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Button, Card, Col, Image, Row, Tooltip, Typography } from "antd";
import StarRatingComponent from "react-star-rating-component";
import { useDispatch } from "react-redux";
import getASingleProduct from "../../api/products/getASingleProduct";
import { getASingleProductStart } from "../../store/ducks/products/getASingleProduct/actions";
import { useAppSelector } from "../../app/hooks";
import ProductCard from "../../common/productCard/ProductCard";
import { StProductsContainer } from "../../common/productCard/styled";
import Icon from "@ant-design/icons";
import ShoppingCartOutlined from "@ant-design/icons";
import SpinContainer from "../../common/spinContainer/SpinContainer";

const DetailedProduct = () => {
  const dispatch = useDispatch();

  const singleProduct = useAppSelector(
    (state) => state.getASingleProduct.product
  );
  const singleProductLoading = useAppSelector(
    (state) => state.getASingleProduct.loading
  );

  useEffect(() => {
    const productId = window.location.pathname.split("/").slice(-1)[0];
    dispatch(getASingleProductStart(productId));
  }, []);

  useEffect(() => {
    console.log("SINGLE PRODUCT Loading", singleProductLoading);
  }, [singleProductLoading]);

  return (
    <>
      {singleProductLoading ? (
        <SpinContainer />
      ) : (
        <StProductsContainer gutter={32} justify="start">
          <Col span={12}>
            <ProductCard
              product={singleProduct}
              isLoading={singleProductLoading}
              isDetailed
            />
          </Col>
          <Col span={8}>
            <Row justify="start">
              <Col span={24}>
                <p
                  style={{
                    textAlign: "justify",
                    fontSize: "1.3rem",
                  }}
                >
                  {singleProduct?.description}
                </p>
              </Col>
              <Col span={4}>
                <StarRatingComponent
                  name="Avaliação"
                  starCount={5}
                  value={singleProduct?.rating?.rate}
                />
              </Col>
              <Col span={2}>
                <Tooltip title="Avaliações">
                  <span>({singleProduct?.rating?.count})</span>
                </Tooltip>
              </Col>
            </Row>
          </Col>
          <Col span={4}>
            <Row gutter={[0, 12]}>
              <Col span={24}>
                <Button
                  style={{
                    width: "100%",
                  }}
                  type="primary"
                  icon={<ShoppingCartOutlined />}
                >
                  Adicionar ao carrinho
                </Button>
              </Col>
              <Col span={24}>
                <Button
                  style={{
                    width: "100%",
                  }}
                  type="primary"
                >
                  Comprar agora
                </Button>
              </Col>
            </Row>
          </Col>
        </StProductsContainer>
      )}
    </>
  );
};

DetailedProduct.propTypes = {};

export default DetailedProduct;
