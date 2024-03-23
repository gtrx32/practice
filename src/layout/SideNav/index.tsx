import Button from "../../components/UI/Button";
import s from "./SideNav.module.scss";
import Container from "../../components/UI/Container";
import SideNavList from "./SideNavList";
import { useContext } from "react";
import clsx from "clsx";
import MenuIsOpenContext from "../../context/MenuIsOpenContext";
import { SideMenuArrowIcon } from "../../assets/images/icons";

const SideNav = () => {
  const { menuIsOpen, setMenuIsOpen } = useContext(MenuIsOpenContext);

  const handleMenuClick = () => setMenuIsOpen(!menuIsOpen);

  return (
    <div className={s.wrapper}>
      <div className={clsx(s.sideNav, !menuIsOpen && s.closedNav)}>
        <div className={s.topRow}>
          <Container className={clsx(s.shrink, !menuIsOpen && s.closed, s.admin)}>ADMIN</Container>
          <Button onClick={handleMenuClick} className={s.button}>
            <SideMenuArrowIcon className={menuIsOpen ? s.navHideButton : s.navShowButton} />
          </Button>
        </div>
        <SideNavList className={clsx(s.shrink, !menuIsOpen && s.closed)} />
      </div>
    </div>
  );
};

export default SideNav;
