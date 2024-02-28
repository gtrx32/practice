import s from "./Header.module.scss";
import logo from "../../assets/header/logo.png";
import Container from "../../components/UI/Container";
import themePic from "../../assets/header/themeButton.svg";
import profilePic from "../../assets/header/profileButton.svg";
import Button from "../../components/UI/Button";
import { Link } from "react-router-dom";

const Header = () => (
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
        </Button>
      </div>
    </div>
  </Container>
);

export default Header;
