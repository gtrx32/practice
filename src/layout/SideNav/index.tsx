import Button from "../../components/UI/Button";
import s from "./SideNav.module.scss";
import arrow from "../../assets/navHideButton.svg";
import Container from "../../components/UI/Container";
import SideNavList from "./SideNavList";
import { useState } from "react";
import clsx from "clsx";

const SideNav = () => {
  const [sideMenuIsOpen, setSideMenuIsOpen] = useState(true);

  const handleSideMenuClick = () => setSideMenuIsOpen(!sideMenuIsOpen);

  return (
    <div className={clsx(s.sideNav, sideMenuIsOpen && s.openedNav)}>
      <div className={s.topRow}>
        {sideMenuIsOpen && <Container>ADMIN</Container>}
        <Button onClick={handleSideMenuClick} className={clsx(s.button, s.buttonClose)}>
          <img src={arrow} alt="" />
        </Button>
      </div>
      {sideMenuIsOpen && <SideNavList />}
    </div>
  );
};

export default SideNav;
