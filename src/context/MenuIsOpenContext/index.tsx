import { Dispatch, SetStateAction, createContext } from "react";

interface MenuIsOpenContextType {
  menuIsOpen: boolean;
  setMenuIsOpen: Dispatch<SetStateAction<boolean>>;
}

const defaultState: MenuIsOpenContextType = {
  menuIsOpen: false,
  setMenuIsOpen: () => {},
};

const MenuIsOpenContext = createContext<MenuIsOpenContextType>(defaultState);

export default MenuIsOpenContext;
