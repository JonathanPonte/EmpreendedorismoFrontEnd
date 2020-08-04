import React from 'react';
import Routes from "./router/index";
import HeaderNav from "./layout/Header";

//CSS
import "./assets/style/Utilities.css";
import { ButtonHeaderInside } from './components/Button';

//Ant Design
import "antd/dist/antd.css";
import { Layout, Row, Col, Dropdown, Menu } from "antd";
import { Container } from "./components/Container";
import { CaretDownOutlined } from "@ant-design/icons";

import Logo from "./assets/images/logo512.png";
import { Router } from 'react-router-dom';


const { Header, Content } = Layout;


/* Inline CSS */

const contentStyle = {
  margin: "auto",
  textAlign: "center",
  display: "flex",
  minHeight: "calc(100vh - 64px)"
};

const logoStyle = {
  height: "35px",
};

const header={
  minWidth: "500px",
}



const menu = (
  <Menu>
    <Menu.Item key="0">
      <a href="/about">Sobre o sistema</a>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="1">Sair</Menu.Item>
  </Menu>
);

function App() {
  const loc = window.location.pathname;

  
  return (
    <Row>
      <Col span={24}>
        <Layout>
          <Row>
            <Col span={24}>
              <Header className="d-flex" style={header}>
                <a href="/">
                  <img style={logoStyle} src={Logo} alt="Logo branco" />
                </a>
                <HeaderNav />
              </Header>
            </Col>
          </Row>
          <Row >
            <Col span={24}>
              <Content style={contentStyle}>
                <Routes/>
              </Content>
            </Col>
          </Row>
        </Layout>
      </Col>
    </Row>
  );
}



export default App;
