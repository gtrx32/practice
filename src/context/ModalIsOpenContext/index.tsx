import { Dispatch, SetStateAction, createContext } from "react";

interface ModalIsOpenContextType {
  modalIsOpen: boolean;
  setModalIsOpen: Dispatch<SetStateAction<boolean>>;
  target: { resourceName: string; id: string };
  setTarget: Dispatch<SetStateAction<{ resourceName: string; id: string }>>;
}

const defaultState: ModalIsOpenContextType = {
  modalIsOpen: false,
  setModalIsOpen: () => {},
  target: { resourceName: "", id: "" },
  setTarget: () => {},
};

const ModalIsOpenContext = createContext<ModalIsOpenContextType>(defaultState);

export default ModalIsOpenContext;
