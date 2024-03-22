import s from "./PageLayout.module.scss";
import Header from "../Header";
import SideNav from "../SideNav";
import { CSSProperties, PropsWithChildren, useContext } from "react";
import MenuIsOpenContext from "../../context/MenuIsOpenContext";
import clsx from "clsx";
import DeleteRowModal from "../../components/ModalWindow/DeleteRowModal";
import ThemeContext from "../../context/ThemeContext";
import { themeColors } from "../../context/ThemeContext/types";

const PageLayout: React.FC<PropsWithChildren> = ({ children }) => {
  const { menuIsOpen, setMenuIsOpen } = useContext(MenuIsOpenContext);
  const { theme } = useContext(ThemeContext);

  const handleMenuClick = () => setMenuIsOpen(!menuIsOpen);

  return (
    <div className={s.wrapper} style={themeColors[theme] as CSSProperties}>
      <Header />
      <main className={s.main}>
        <SideNav />
        <div onClick={handleMenuClick} className={clsx(s.cover, menuIsOpen ? s.blur : s.clear)} />
        <div className={s.content}>{children}</div>
      </main>
      <DeleteRowModal />
    </div>
  );
};

export default PageLayout;
