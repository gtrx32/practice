import { PropsWithChildren, useState } from "react";
import MenuIsOpenContext from "./MenuIsOpenContext";
import CorrectInputContext from "./CorrectInputContext";
import ModalIsOpenContext from "./ModalIsOpenContext";

interface AppContextProvider extends PropsWithChildren {}

const AppContextProvider: React.FC<AppContextProvider> = ({ children }) => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [target, setTarget] = useState({ table: "", id: "" });

  const [fields, setFields] = useState({});
  const fieldsIsValid = () => Object.values(fields).every((value) => value);

  return (
    <MenuIsOpenContext.Provider value={{ menuIsOpen, setMenuIsOpen }}>
      <ModalIsOpenContext.Provider value={{ modalIsOpen, setModalIsOpen, target, setTarget }}>
        <CorrectInputContext.Provider value={{ fields, setFields, fieldsIsValid }}>
          {children}
        </CorrectInputContext.Provider>
      </ModalIsOpenContext.Provider>
    </MenuIsOpenContext.Provider>
  );
};

export default AppContextProvider;
