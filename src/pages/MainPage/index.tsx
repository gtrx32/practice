import s from './MainPage.module.scss';
import logo from '../../assets/header/logo.png'
import Container from '../../components/UI/Container';

interface MainPageProps {
}

const MainPage: React.FC<MainPageProps> = () => (
  <Container className={s.container}>
    <div className={s.logo}><img src={logo} alt="" /></div>
    <h2 className={s.welcome}>Добро пожаловать в админ-панель M-SOCIAL!</h2>
    <h3 className={s.tip}>Используйте боковое меню, чтобы перейти к нужному разделу</h3>
  </Container>
);

export default MainPage;