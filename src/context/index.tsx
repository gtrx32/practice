import { PropsWithChildren, useState } from "react";
import MenuIsOpenContext from "./MenuIsOpenContext";

interface AppContextProvider extends PropsWithChildren {}

const AppContextProvider: React.FC<AppContextProvider> = ({ children }) => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  return <MenuIsOpenContext.Provider value={{ menuIsOpen, setMenuIsOpen }}>{children}</MenuIsOpenContext.Provider>;
};

export default AppContextProvider;
