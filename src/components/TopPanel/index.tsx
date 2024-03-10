import { Link, useNavigate } from "react-router-dom";
import s from "./TopPanel.module.scss";
import { titles } from "./types";

interface TopPanelProps {
  dataType: string;
  pageType: string;
  id?: string;
}

const TopPanel: React.FC<TopPanelProps> = ({ dataType, pageType, id }) => {
  const navigate = useNavigate();

  const goBack = () => {
    const currentPath = window.location.pathname;
    const newPath = currentPath.substring(0, currentPath.lastIndexOf("/"));
    navigate(newPath);
  };

  const title = titles[dataType]?.[pageType] || "";

  const renderButtons = () => {
    switch (pageType) {
      case "details":
        return (
          <div className={s.wrapper}>
            <div className={s.buttons}>
              <button onClick={goBack} className={s.link}>
                &#60;&#60;&#60; Назад
              </button>
              <div className={s.rightButtons}>
                <Link className={s.link} to={`/${dataType}`}>
                  Список
                </Link>
                <Link className={s.link} to={`/${dataType}/${id}/edit`}>
                  Редактировать
                </Link>
                <button className={s.link}>Удалить</button>
              </div>
            </div>
            <h1 className={s.title}>{title}</h1>
          </div>
        );
      case "edit":
        return (
          <div className={s.wrapper}>
            <div className={s.buttons}>
              <button onClick={goBack} className={s.link}>
                &#60;&#60;&#60; Назад
              </button>
              <div className={s.rightButtons}>
                <Link className={s.link} to={`/${dataType}`}>
                  Список
                </Link>
                <Link className={s.link} to={`/${dataType}/${id}`}>
                  Посмотреть
                </Link>
                <button className={s.link}>Удалить</button>
              </div>
            </div>
            <h1 className={s.title}>{title}</h1>
          </div>
        );
      case "create":
        return (
          <div className={s.wrapper}>
            <div className={s.buttons}>
              <button onClick={goBack} className={s.link}>
                &#60;&#60;&#60; Назад
              </button>
              <div className={s.rightButtons}>
                <Link className={s.link} to={`/${dataType}`}>
                  Список
                </Link>
              </div>
            </div>
            <h1 className={s.title}>{title}</h1>
          </div>
        );
      default:
        return null;
    }
  };

  return renderButtons();
};

export default TopPanel;
