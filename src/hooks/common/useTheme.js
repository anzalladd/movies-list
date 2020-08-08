import { useState, useEffect } from "react";
import { useThemeSwitcher } from "react-css-theme-switcher";

const useTheme = () => {
  const [theme, setTheme] = useState("light");
  const { switcher, themes } = useThemeSwitcher();

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
    switcher({ theme: theme === "light" ? themes.dark : themes.light });
  };

  useEffect(() => {
    const currentTheme = window.localStorage.getItem("theme");
    switcher({ theme: currentTheme === "dark" ? themes.dark : themes.light });
    currentTheme && setTheme(currentTheme);
  }, []);

  useEffect(() => {
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  return {
    theme,
    themeToggler,
  };
};

export default useTheme;
