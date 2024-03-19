import { PropsWithChildren, useState } from "react";
import MenuIsOpenContext from "./MenuIsOpenContext";
import CorrectInputContext from "./CorrectInputContext";
import ModalIsOpenContext from "./ModalIsOpenContext";

interface AppContextProvider extends PropsWithChildren {}

const AppContextProvider: React.FC<AppContextProvider> = ({ children }) => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [table, setTable] = useState("");
  const [id, setId] = useState("");

  const [fields, setFields] = useState({});
  const fieldsIsValid = () => Object.values(fields).every((value) => value);

  return (
    <MenuIsOpenContext.Provider value={{ menuIsOpen, setMenuIsOpen }}>
      <ModalIsOpenContext.Provider value={{ modalIsOpen, setModalIsOpen, table, setTable, id, setId }}>
        <CorrectInputContext.Provider value={{ fields, setFields, fieldsIsValid }}>
          {children}
        </CorrectInputContext.Provider>
      </ModalIsOpenContext.Provider>
    </MenuIsOpenContext.Provider>
  );
};

export default AppContextProvider;
