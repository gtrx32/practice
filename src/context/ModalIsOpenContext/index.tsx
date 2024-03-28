import { Dispatch, SetStateAction, createContext } from "react";

interface ModalIsOpenContextType {
  modalIsOpen: boolean;
  setModalIsOpen: Dispatch<SetStateAction<boolean>>;
  target: { id: string; table: string };
  setTarget: Dispatch<SetStateAction<{ id: string; table: string }>>;
}

const defaultState: ModalIsOpenContextType = {
  modalIsOpen: false,
  setModalIsOpen: () => {},
  target: { table: "", id: "" },
  setTarget: () => {},
};

const ModalIsOpenContext = createContext<ModalIsOpenContextType>(defaultState);

export default ModalIsOpenContext;
