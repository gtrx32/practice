import s from "./PageLayout.module.scss";
import Header from "../Header";
import SideNav from "../SideNav";
import { PropsWithChildren, useContext } from "react";
import MenuIsOpenContext from "../../context/MenuIsOpenContext";

const PageLayout: React.FC<PropsWithChildren> = ({ children }) => {
  const { menuIsOpen } = useContext(MenuIsOpenContext);

  return (
    <div className={s.wrapper}>
      <Header />
      <main className={s.main}>
        <SideNav />
        <div className={menuIsOpen ? s.dark : s.transparent} />
        <div className={s.content}>{children}</div>
      </main>
    </div>
  );
};

export default PageLayout;
