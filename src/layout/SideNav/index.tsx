import Button from "../../components/UI/Button";
import s from "./SideNav.module.scss";
import navHide from "../../assets/navHideButton.svg";
import navShow from "../../assets/navShowButton.svg";
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
        <Button onClick={handleSideMenuClick} className={s.button}>
          <img src={sideMenuIsOpen ? navHide : navShow} alt="" />
        </Button>
      </div>
      {sideMenuIsOpen && <SideNavList />}
    </div>
  );
};

export default SideNav;
