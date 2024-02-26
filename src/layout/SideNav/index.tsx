import Button from '../../components/UI/Button';
import s from './SideNav.module.scss';
import arrow from "../../assets/navHideBtn.svg"
import main from "../../assets/sidemenu/mainItem.svg"
import users from "../../assets/sidemenu/usersItem.svg"
import todos from "../../assets/sidemenu/todosItem.svg"
import photos from "../../assets/sidemenu/photosItem.svg"
import albums from "../../assets/sidemenu/albumsItem.svg"
import blog from "../../assets/sidemenu/blogItem.svg"
import Container from '../../components/UI/Container';

interface SideNavProps {
}

const SideNav: React.FC<SideNavProps> = () => (
  <div className={s.sideNav}>

    <div className={s.topRow}>
      <Container>
        ADMIN
      </Container>
      <Button className={s.button}>
        <img src={arrow} alt="" />
      </Button>
    </div>

    <Container className={s.container}>
      <div className={s.list}>
        <ul>
          <li><a href='#'><img src={main} alt="" />Главная</a></li>
          <li><a href='#'><img src={users} alt="" />Пользователи</a></li>
          <li><a href='#'><img src={todos} alt="" />Задания</a></li>
          <li><a href='#'><img src={photos} alt="" />Картинки</a></li>
          <li><a href='#'><img src={albums} alt="" />Альбомы</a></li>
          <li><a href='#'><img src={blog} alt="" />Блог</a></li>
        </ul>
      </div>
    </Container>

  </div>
);

export default SideNav;