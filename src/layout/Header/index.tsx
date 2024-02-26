import s from './Header.module.scss';
import image from '../../assets/header/logo.png'
import Container from '../../components/UI/Container';
import themePic from "../../assets/header/themeBtn.svg"
import anonymousPic from "../../assets/header/userBtn.svg"
import Button from '../../components/UI/Button';

const Header: React.FC = () => (
  <header className={s.header}>
    <Container>
      <div className={s.header__inner}>

        <div className={s.header__logo}>
          <img src={image} alt="" />
        </div>

        <div className={s.header__btns}>
          <Button aria-label="theme">
            <img src={themePic} alt="" />
          </Button>
          <Button aria-label="anonymous">
            <img src={anonymousPic} alt="" />
          </Button>
        </div>

      </div>
    </Container>
  </header>
);

export default Header;