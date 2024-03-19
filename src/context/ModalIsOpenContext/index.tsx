import { Dispatch, SetStateAction, createContext } from "react";

interface ModalIsOpenContextType {
  modalIsOpen: boolean;
  setModalIsOpen: Dispatch<SetStateAction<boolean>>;
  table: string;
  setTable: Dispatch<SetStateAction<string>>;
  id: string;
  setId: Dispatch<SetStateAction<string>>;
}

const defaultState: ModalIsOpenContextType = {
  modalIsOpen: false,
  setModalIsOpen: () => {},
  table: "",
  setTable: () => {},
  id: "",
  setId: () => {},
};

const ModalIsOpenContext = createContext<ModalIsOpenContextType>(defaultState);

export default ModalIsOpenContext;
