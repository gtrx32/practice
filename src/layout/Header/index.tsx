import s from "./Header.module.scss";
import Container from "../../components/UI/Container";
import logo from "@assets/images/header/logo.png";
import themePic from "@assets/images/header/themeButton.svg";
import profilePic from "@assets/images/header/profileButton.svg";
import Button from "../../components/UI/Button";
import { Link } from "react-router-dom";
import { useContext } from "react";
import MenuIsOpenContext from "../../context/MenuIsOpenContext";
import ThemeContext from "../../context/ThemeContext";

const Header = () => {
  const { menuIsOpen, setMenuIsOpen } = useContext(MenuIsOpenContext);
  const { theme, setTheme } = useContext(ThemeContext);

  const handleMenuClick = () => setMenuIsOpen(!menuIsOpen);

  return (
    <Container as="header" className={s.header}>
      <div className={s.wrapper}>
        <Link to="/" className={s.logo}>
          <img src={logo} alt="" />
        </Link>
        <div className={s.buttons}>
          <Button onClick={() => setTheme(theme === "light" ? "dark" : "light")} aria-label="theme">
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
