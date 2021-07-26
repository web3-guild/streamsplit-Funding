import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import React from "react";
import { ThemeSwitcherProvider } from "react-css-theme-switcher";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import {Button , Layout , Breadcrumb, Menu} from "antd"

const {SubMenu} = Menu;
const {Header , Content , Sider} = Layout;

const themes = {
  dark: `${process.env.PUBLIC_URL}/dark-theme.css`,
  light: `${process.env.PUBLIC_URL}/light-theme.css`,
};

const prevTheme = window.localStorage.getItem("theme");
// TODO: define the graph for the split contract , using the example of [eip721-subgraph](https://github.com/wighawag/eip721-subgraph) example 🐣
const subgraphUri = "http://localhost:8000/subgraphs/name/scaffold-eth/your-contract";

const client = new ApolloClient({
  uri: subgraphUri,
  cache: new InMemoryCache(),
});

ReactDOM.render(

<Layout>
  <Header className="header">
  <div className="logo" />
  <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
    <Menu.Item key="1">Search</Menu.Item>
    <Menu.Item key="2">SplitStream marketplace</Menu.Item>
    <Button type="primary">connect to wallet</Button>
    </Menu>
</Header>

/** 
<ApolloProvider client={client}>
    <ThemeSwitcherProvider themeMap={themes} defaultTheme={prevTheme || "light"}>
      <App subgraphUri={subgraphUri} />
    </ThemeSwitcherProvider>
  </ApolloProvider> */,
  document.getElementById("root"),
);
