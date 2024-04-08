import { Link, useParams } from "react-router-dom";
import s from "./UserLinks.module.scss";

const UserLinks = () => {
  const { id } = useParams();

  return (
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
};

export default UserLinks;
