import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Button, Col, Row, Select, Tooltip, InputNumber } from "antd";
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
import { updateCartStart } from "../../store/ducks/carts/updateCart/actions";
import moment from "moment";
import getDefaultUserId from "../../helpers/getDefaultUserId";

const DetailedProduct = () => {
  const dispatch = useDispatch();
  const { Option } = Select;

  const singleProduct = useAppSelector(
    (state) => state.getASingleProduct.product
  );
  const singleProductLoading = useAppSelector(
    (state) => state.getASingleProduct.loading
  );

  const [productId, setProductId] = useState("1");
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const urlProductId = window.location.pathname.split("/").slice(-1)[0];
    setProductId(urlProductId);
    dispatch(getASingleProductStart(urlProductId));
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
            <Row gutter={[8, 12]} justify="space-between" align="middle">
              <Col span={4}>
                <span>Qtd.</span>
              </Col>
              <Col span={20}>
                <InputNumber
                  min={1}
                  max={10}
                  defaultValue={3}
                  onChange={(value: number) => {
                    setQuantity(value);
                  }}
                  style={{ width: "90%" }}
                />
              </Col>
              <Col span={24}>
                <Button
                  style={{
                    width: "100%",
                  }}
                  type="primary"
                  icon={<ShoppingCartOutlined />}
                  onClick={() => {
                    dispatch(
                      updateCartStart(
                        getDefaultUserId(),
                        moment().format("YYYY-MM-DD"),
                        [
                          {
                            productId,
                            quantity,
                          },
                        ]
                      )
                    );
                  }}
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
