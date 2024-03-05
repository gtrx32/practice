import s from "./MainPage.module.scss";
import logo from "../../assets/header/logo.png";
import Container from "../../components/UI/Container";

const MainPage = () => (
  <Container className={s.container}>
    <div className={s.logo}>
      <img src={logo} alt="" />
    </div>
    <h1 className={s.welcome}>
      Добро пожаловать{"\n"}в админ-панель{"\n"}M-SOCIAL!
    </h1>
    <div className={s.tip}>
      <p>Используйте боковое меню, чтобы перейти к нужному разделу</p>
    </div>
  </Container>
);

export default MainPage;
