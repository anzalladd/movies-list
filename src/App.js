import React, { useContext, useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Layout } from "antd";
import { PlaySquareOutlined, ReadOutlined } from "@ant-design/icons";
import { useThemeSwitcher } from "react-css-theme-switcher";
import GlobalStyle from "./styles/GlobalStyle";
import Pages from "./pages";
import { ThemeContext } from "./contexts/ThemeContext/context";
import { lightTheme, darkTheme } from "./styles/helpers/Theme";
import Header from "./styles/common/Header";
import Menu from "./components/Menu";
import Loading from "./components/Loading";

export default function App() {
  const { theme } = useContext(ThemeContext);
  const { Content } = Layout;
  const [selectedKey, setSelectedKey] = useState("movies");
  const { status } = useThemeSwitcher();
  const menuList = [
    {
      path: "/",
      name: "Movies",
      key: "movies",
      icon: <PlaySquareOutlined />,
    },
    {
      path: "/news",
      name: "News",
      key: "news",
      icon: <ReadOutlined />,
    },
  ];

  useEffect(() => {
    const currentRoute = menuList.find(
      (value) => value.path === window.location.pathname
    );
    setSelectedKey(currentRoute.key);
    return () => {
      console.log("Cleanup");
    };
  }, [menuList]);

  const onChangeRouter = (e) => {
    setSelectedKey(e.key);
  };

  if (status === "loading") {
    return <Loading />;
  }

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyle />
      <Router>
        <Layout>
          <Header>
            <Menu
              lists={menuList}
              handleClick={onChangeRouter}
              selectedKey={selectedKey}
            />
          </Header>
          <Content>
            <Switch>
              <Route path="/" component={Pages.Movies} exact />
            </Switch>
          </Content>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}
