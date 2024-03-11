import React from "react";
import { Layout, Menu, theme } from "antd";
import "./homepage.css";
import backgroundImg from "../../assets/img/homepage-background.png";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const { Header, Content, Footer } = Layout;

const menuItems = [
  {
    key: 1,
    label: "CHATTING",
  },
  {
    key: 2,
    label: "GENERATING",
  },
  {
    key: 3,
    label: "TRAINING",
  },
  {
    key: 4,
    label: "ROBOT",
  },
  {
    key: 5,
    label: "MORE",
  },
];

const HomePage = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Router>
      <div
        className="homepage"
        style={{
          height: "100vh",
          backgroundImage: `url(${backgroundImg})`,
          backgroundSize: "cover",
        }}
      >
        <Layout style={{ background: "none" }}>
          <Header
            style={{
              display: "flex",
              alignItems: "center",
              background: "rgba(0, 0, 0, 0.8)",
            }}
          >
            <div className="demo-logo">
              <span style={{ fontWeight: "bold", color: "white" }}>AI-HUB</span>
            </div>
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={["2"]}
              items={menuItems}
              style={{
                flex: 1,
                minWidth: 0,
                background: "none",
                justifyContent: "center",
              }}
            />
          </Header>
          <Content
            style={{
              background: "rgba(0, 0, 0, 0.7)",
              height: "calc(100vh-128.5px)",
              height: "-webkit-calc(100vh - 128.5px)",
              padding: 14,
            }}
          >
            <div
              style={{
                // minHeight: 280,
                // padding: 14,
                borderRadius: borderRadiusLG,
              }}
            >
              Content
            </div>
          </Content>
          <Footer
            style={{
              color: "#fff",
              textAlign: "center",
              background: "rgba(0, 0, 0, 0.7)",
            }}
          >
            AI Hub ©{new Date().getFullYear()} Created by AI-HUB
          </Footer>
        </Layout>
      </div>
    </Router>
  );
};
export default HomePage;
