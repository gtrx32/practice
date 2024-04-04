import s from "./PageLayout.module.scss";
import Header from "../Header";
import SideNav from "../SideNav";
import { PropsWithChildren, useContext } from "react";
import MenuIsOpenContext from "../../context/MenuIsOpenContext";
import clsx from "clsx";
import DeleteRowModal from "../../components/ModalWindow/DeleteRowModal";
import ThemeContext from "../../context/ThemeContext";
import { useLocation } from "react-router-dom";

const PageLayout: React.FC<PropsWithChildren> = ({ children }) => {
  const { menuIsOpen, setMenuIsOpen } = useContext(MenuIsOpenContext);
  const { theme } = useContext(ThemeContext);
  const { pathname } = useLocation();

  const handleMenuClick = () => setMenuIsOpen(!menuIsOpen);

  return (
    <div className={s.wrapper} data-theme={theme}>
      <Header key={pathname} />
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
