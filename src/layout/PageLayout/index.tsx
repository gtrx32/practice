import s from "./PageLayout.module.scss";
import Header from "../Header";
import SideNav from "../SideNav";
import { PropsWithChildren, useContext } from "react";
import MenuIsOpenContext from "../../context/MenuIsOpenContext";
import clsx from "clsx";

const PageLayout: React.FC<PropsWithChildren> = ({ children }) => {
  const { menuIsOpen, setMenuIsOpen } = useContext(MenuIsOpenContext);

  const handleMenuClick = () => setMenuIsOpen(!menuIsOpen);

  return (
    <div className={s.wrapper}>
      <Header />
      <main className={s.main}>
        <SideNav />
        <div onClick={handleMenuClick} className={clsx(s.cover, menuIsOpen ? s.blur : s.clear)} />
        <div className={s.content}>{children}</div>
      </main>
    </div>
  );
};

export default PageLayout;
