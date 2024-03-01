import s from "./Header.module.scss";
import logo from "../../assets/header/logo.png";
import Container from "../../components/UI/Container";
import themePic from "../../assets/header/themeButton.svg";
import profilePic from "../../assets/header/profileButton.svg";
import Button from "../../components/UI/Button";
import { Link } from "react-router-dom";
import { useContext } from "react";
import MenuIsOpenContext from "../../context/MenuIsOpenContext";

const Header = () => {
  const { menuIsOpen, setMenuIsOpen } = useContext(MenuIsOpenContext);

  const handleMenuClick = () => setMenuIsOpen(!menuIsOpen);

  return (
    <Container as="header" className={s.header}>
      <div className={s.wrapper}>
        <Link to="/" className={s.logo}>
          <img src={logo} alt="" />
        </Link>
        <div className={s.buttons}>
          <Button aria-label="theme">
            <img src={themePic} alt="" />
          </Button>
          <Button aria-label="profile">
            <img src={profilePic} alt="" />
          </Button>{" "}
        </div>
        <Button onClick={handleMenuClick} className={s.mobileMenuButton}>
          {menuIsOpen ? "Закрыть" : "Меню"}
        </Button>
      </div>
    </Container>
  );
};

export default Header;
