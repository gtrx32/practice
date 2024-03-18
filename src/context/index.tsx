import { PropsWithChildren, useState } from "react";
import MenuIsOpenContext from "./MenuIsOpenContext";
import CorrectInputContext from "./CorrectInputContext";

interface AppContextProvider extends PropsWithChildren {}

const AppContextProvider: React.FC<AppContextProvider> = ({ children }) => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const [fields, setFields] = useState({});
  const fieldsIsValid = () => Object.values(fields).every((value) => value);

  return (
    <MenuIsOpenContext.Provider value={{ menuIsOpen, setMenuIsOpen }}>
      <CorrectInputContext.Provider value={{ fields, setFields, fieldsIsValid }}>
        {children}
      </CorrectInputContext.Provider>
    </MenuIsOpenContext.Provider>
  );
};

export default AppContextProvider;
