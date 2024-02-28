import s from "./PageLayout.module.scss";
import Header from "../Header";
import SideNav from "../SideNav";
import { PropsWithChildren } from "react";

const PageLayout: React.FC<PropsWithChildren> = ({ children }) => (
  <div className={s.wrapper}>
    <Header />
    <main className={s.main}>
      <SideNav />
      {children}
    </main>
  </div>
);

export default PageLayout;
