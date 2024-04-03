import { PropsWithChildren, useState } from "react";
import MenuIsOpenContext from "./MenuIsOpenContext";
import ModalIsOpenContext from "./ModalIsOpenContext";
import CorrectInputContext from "./CorrectInputContext";
import ThemeContext, { Theme } from "./ThemeContext";

interface AppContextProvider extends PropsWithChildren {}

const AppContextProvider: React.FC<AppContextProvider> = ({ children }) => {
  const [_theme, _setTheme] = useState<Theme>((localStorage.getItem("theme") as Theme) ?? "light");
  const setTheme = (theme: Theme) => {
    _setTheme(theme);
    localStorage.setItem("theme", theme.toString());
  };

  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [target, setTarget] = useState({ resourceName: "", id: "" });

  const [fields, setFields] = useState({});
  const fieldsIsValid = () => Object.values(fields).every((value) => value);

  return (
    <ThemeContext.Provider value={{ theme: _theme, setTheme }}>
      <MenuIsOpenContext.Provider value={{ menuIsOpen, setMenuIsOpen }}>
        <ModalIsOpenContext.Provider value={{ modalIsOpen, setModalIsOpen, target, setTarget }}>
          <CorrectInputContext.Provider value={{ fields, setFields, fieldsIsValid }}>
            {children}
          </CorrectInputContext.Provider>
        </ModalIsOpenContext.Provider>
      </MenuIsOpenContext.Provider>
    </ThemeContext.Provider>
  );
};

export default AppContextProvider;
