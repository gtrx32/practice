import { Link, useNavigate } from "react-router-dom";
import s from "./TopPanel.module.scss";
import { titles } from "./types";
import { useContext } from "react";
import ModalIsOpenContext from "../../context/ModalIsOpenContext";

interface TopPanelProps {
  dataType: string;
  pageType: "details" | "edit" | "create";
  id: string;
}

const TopPanel: React.FC<TopPanelProps> = ({ dataType, pageType, id }) => {
  const navigate = useNavigate();
  const { setTarget, setModalIsOpen } = useContext(ModalIsOpenContext);

  const onDeleteHandler = () => {
    setTarget({ table: dataType, id: id });
    setModalIsOpen(true);
  };

  const goBack = () => {
    const currentPath = window.location.pathname;
    const newPath = currentPath.substring(0, currentPath.lastIndexOf("/"));
    navigate(newPath);
  };

  const title = titles[dataType]?.[pageType] || "";

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
          {(pageType === "details" || pageType === "edit") && (
            <>
              <Link className={s.link} to={`/${dataType}/${id}${pageType === "details" ? "/edit" : ""}`}>
                {pageType === "details" ? "Редактировать" : "Посмотреть"}
              </Link>
              <button onClick={onDeleteHandler} className={s.link}>
                Удалить
              </button>
            </>
          )}
        </div>
      </div>
      <h1 className={s.title}>{title}</h1>
    </div>
  );
};

export default TopPanel;
