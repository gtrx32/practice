import { PropsWithChildren, useState } from "react";
import MenuIsOpenContext from "./MenuIsOpenContext";
import ModalIsOpenContext from "./ModalIsOpenContext";
import ThemeContext from "./ThemeContext";

interface AppContextProvider extends PropsWithChildren {}

const AppContextProvider: React.FC<AppContextProvider> = ({ children }) => {
  const [_theme, _setTheme] = useState<Theme>((localStorage.getItem("theme") as Theme) ?? "light");
  const setTheme = (theme: Theme) => {
    _setTheme(theme);
    localStorage.setItem("theme", theme.toString());
  };

  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const [target, setTarget] = useState<{ resourceName: Resources; dataId: number }>({
    resourceName: "users",
    dataId: -1,
  });

  return (
    <ThemeContext.Provider value={{ theme: _theme, setTheme }}>
      <MenuIsOpenContext.Provider value={{ menuIsOpen, setMenuIsOpen }}>
        <ModalIsOpenContext.Provider value={{ modalIsOpen, setModalIsOpen, target, setTarget }}>
          {children}
        </ModalIsOpenContext.Provider>
      </MenuIsOpenContext.Provider>
    </ThemeContext.Provider>
  );
};

export default AppContextProvider;
