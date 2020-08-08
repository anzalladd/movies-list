import React, { createContext } from "react";
import useTheme from "../../hooks/common/useTheme";

export const ThemeContext = createContext();

const ContextProvider = (props) => {
  const { theme, themeToggler } = useTheme();
  return (
    <ThemeContext.Provider value={{ theme, themeToggler }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ContextProvider;
