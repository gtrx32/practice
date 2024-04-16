import { Link } from "react-router-dom";
import s from "./UserLinks.module.scss";

interface UserLinksProps {
  dataId: number;
}

const UserLinks: React.FC<UserLinksProps> = ({ dataId }) => {
  return (
    <div className={s.wrapper}>
      <Link className={s.link} to={{ pathname: "/posts", search: "?userId=" + dataId }}>
        Посты
      </Link>
      <Link className={s.link} to={{ pathname: "/albums", search: "?userId=" + dataId }}>
        Альбомы
      </Link>
      <Link className={s.link} to={{ pathname: "/todos", search: "?userId=" + dataId }}>
        Задачи
      </Link>
    </div>
  );
};

export default UserLinks;
