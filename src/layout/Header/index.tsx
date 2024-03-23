import s from "./Header.module.scss";
import Container from "../../components/UI/Container";
import Button from "../../components/UI/Button";
import { Link } from "react-router-dom";
import { useContext } from "react";
import MenuIsOpenContext from "../../context/MenuIsOpenContext";
import ThemeContext from "../../context/ThemeContext";
import { Logo, ProfileIcon, ThemeIcon } from "../../assets/images/icons";

const Header = () => {
  const { menuIsOpen, setMenuIsOpen } = useContext(MenuIsOpenContext);
  const { theme, setTheme } = useContext(ThemeContext);

  const handleMenuClick = () => setMenuIsOpen(!menuIsOpen);

  return (
    <Container as="header" className={s.header}>
      <div className={s.wrapper}>
        <Link to="/" className={s.logo}>
          <Logo className={s.headerLogo} />
        </Link>
        <div className={s.buttons}>
          <Button onClick={() => setTheme(theme === "light" ? "dark" : "light")} aria-label="theme">
            <ThemeIcon />
          </Button>
          <Button aria-label="profile">
            <ProfileIcon />
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
