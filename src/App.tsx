import React from "react";
import { Provider } from "react-redux";
import "./App.css";
import { store } from "./app/store";
import { Col, Row } from "antd";
import AppRoutes from "./app/appRoutes";

function App() {
  return (
    <Provider store={store}>
      <Row className="App" gutter={[0, 16]}>
        <Col span={24}>
          <AppRoutes />
        </Col>
      </Row>
    </Provider>
  );
}

export default App;
