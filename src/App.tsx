import React from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import { Provider } from "react-redux";
import "./App.css";
import { store } from "./app/store";
import { Col, Row } from "antd";
import TopNavigation from "./features/topNavigation/TopNavigation";

function App() {
  return (
    <Provider store={store}>
      <Row className="App">
        <Col>
          <TopNavigation/>
        </Col>
      </Row>
    </Provider>
  );
}

export default App;
