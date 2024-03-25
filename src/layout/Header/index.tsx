import s from "./Header.module.scss";
import Container from "../../components/UI/Container";
import Button from "../../components/UI/Button";
import { Link, useLocation } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import MenuIsOpenContext from "../../context/MenuIsOpenContext";
import ThemeContext from "../../context/ThemeContext";
import { Logo, ProfileIcon, ThemeIcon } from "../../assets/images/icons";
import clsx from "clsx";

const Header = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const { menuIsOpen, setMenuIsOpen } = useContext(MenuIsOpenContext);
  const handleMenuClick = () => setMenuIsOpen(!menuIsOpen);

  const { pathname } = useLocation();
  const [profileMenuIsOpen, setProfileMenuIsOpen] = useState<boolean>(false);

  useEffect(() => {
    setProfileMenuIsOpen(false);
  }, [pathname]);

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
          {pathname !== "/login" && (
            <div className={s.loginButton}>
              <Button aria-label="profile" onClick={() => setProfileMenuIsOpen(!profileMenuIsOpen)}>
                <ProfileIcon />
              </Button>
              <div className={clsx(s.logout, profileMenuIsOpen ? s.open : s.close)}>
                <Link to="/login">Выйти</Link>
              </div>
            </div>
          )}
        </div>
        <Button onClick={handleMenuClick} className={s.mobileMenuButton}>
          {menuIsOpen ? "Закрыть" : "Меню"}
        </Button>
      </div>
    </Container>
  );
};

export default Header;
