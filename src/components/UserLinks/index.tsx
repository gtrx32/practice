import { Link } from "react-router-dom";
import s from "./UserLinks.module.scss";

interface UserLinksProps {
  id: string;
}

const UserLinks: React.FC<UserLinksProps> = ({ id }) => (
  <div className={s.wrapper}>
    <Link className={s.link} to={{ pathname: "/posts", search: "?id=" + id }}>
      Посты
    </Link>
    <Link className={s.link} to={{ pathname: "/albums", search: "?id=" + id }}>
      Альбомы
    </Link>
    <Link className={s.link} to={{ pathname: "/todos", search: "?id=" + id }}>
      Задачи
    </Link>
  </div>
);

export default UserLinks;
