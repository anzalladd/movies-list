import React, { useContext } from "react";
import { Menu as Navbar } from "antd";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { ThemeContext } from "../../contexts/ThemeContext/context";
import { Navbar as StyledNavbar } from "./MenuStyled";

const Menu = (props) => {
  const { theme } = useContext(ThemeContext);

  const pushToPath = (path) => {
    props.history.push(path);
  };

  const renderMenu = () => {
    return props.lists.map((value) => (
      <Navbar.Item
        key={value.key}
        icon={value.icon}
        onClick={() => pushToPath(value.path)}
      >
        {value.name}
      </Navbar.Item>
    ));
  };

  return (
    <StyledNavbar
      theme={theme}
      onClick={props.handleClick}
      selectedKeys={[props.selectedKey]}
      mode="horizontal"
    >
      {renderMenu()}
    </StyledNavbar>
  );
};

Menu.defaultProps = {
  lists: [],
  history: () => {},
  handleClick: () => {},
  selectedKey: "",
};

Menu.propTypes = {
  lists: PropTypes.array,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }),
  handleClick: PropTypes.func,
  selectedKey: PropTypes.string,
};

export default withRouter(Menu);
