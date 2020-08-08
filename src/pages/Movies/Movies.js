import React, { useContext } from "react";
import Container from "../../styles/common/Container";
import { ThemeContext } from "../../contexts/ThemeContext/context";
import { Button } from "antd";

const Movies = () => {
  const { themeToggler } = useContext(ThemeContext);
  return (
    <Container>
      <Button onClick={themeToggler}>Toggle</Button>
    </Container>
  );
};

export default Movies;
