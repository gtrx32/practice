import { Dispatch, SetStateAction, createContext } from "react";

interface ModalIsOpenContextType {
  modalIsOpen: boolean;
  setModalIsOpen: Dispatch<SetStateAction<boolean>>;
  target: { resourceName: string; dataId: number };
  setTarget: Dispatch<SetStateAction<{ resourceName: Resources; dataId: number }>>;
}

const defaultState: ModalIsOpenContextType = {
  modalIsOpen: false,
  setModalIsOpen: () => {},
  target: { resourceName: "", dataId: -1 },
  setTarget: () => {},
};

const ModalIsOpenContext = createContext<ModalIsOpenContextType>(defaultState);

export default ModalIsOpenContext;
