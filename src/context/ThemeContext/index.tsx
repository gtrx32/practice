import { createContext } from "react";

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const defaultState: ThemeContextType = {
  theme: "light",
  setTheme: () => {},
};

const ThemeContext = createContext<ThemeContextType>(defaultState);

export default ThemeContext;
