import Button from "../../components/UI/Button";
import s from "./SideNav.module.scss";
import arrow from "../../assets/navHideButton.svg";
import Container from "../../components/UI/Container";
import SideNavList from "./SideNavList";

const SideNav = () => (
  <div className={s.sideNav}>
    <div className={s.topRow}>
      <Container>ADMIN</Container>
      <Button className={s.button}>
        <img src={arrow} alt="" />
      </Button>
    </div>
    <SideNavList />
  </div>
);

export default SideNav;
