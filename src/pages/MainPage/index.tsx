import s from "./MainPage.module.scss";
import Container from "../../components/UI/Container";
import { Logo } from "../../assets/images/icons";

const MainPage = () => (
  <Container className={s.container}>
    <div className={s.logo}>
      <Logo className={s.mainLogo} />
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
