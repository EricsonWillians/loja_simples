import { Card, Col, Row } from "antd";
import React, { useEffect } from "react";
import { useAppSelector } from "../../app/hooks";
import { RootState } from "../../app/store";

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
              cover={<img alt={product?.title} src={product?.image}></img>}
              style={{ width: 300 }}
            >
              <p>{product?.description}</p>
              <p>{product?.price}</p>
            </Card>
          }
        </Col>
      );
    });
  };

  return <Row gutter={16}>{renderCards()}</Row>;
};

export default Products;
