import { Link, useNavigate } from "react-router-dom";
import s from "./TopPanel.module.scss";
import { titles } from "./types";
import { useContext } from "react";
import ModalIsOpenContext from "../../context/ModalIsOpenContext";
import Button from "../UI/Button";
import UserLinks from "../UserLinks";
import clsx from "clsx";
import ResourceNameContext from "../../context/ResourceNameContext";

interface TopPanelProps {
  pageType: "details" | "edit" | "create";
  id: string;
}

const TopPanel: React.FC<TopPanelProps> = ({ pageType, id }) => {
  const navigate = useNavigate();
  const { setTarget, setModalIsOpen } = useContext(ModalIsOpenContext);
  const resourceName = useContext(ResourceNameContext);

  const onDeleteHandler = () => {
    setTarget({ resourceName, id: id });
    setModalIsOpen(true);
  };

  const goBack = () => {
    const currentPath = window.location.pathname;
    const newPath = currentPath.substring(0, currentPath.lastIndexOf("/"));
    navigate(newPath);
  };

  const title = titles[resourceName]?.[pageType] || "";

  return (
    <div className={s.wrapper}>
      <div className={s.buttons}>
        <Button onClick={goBack} className={clsx(s.link, s.backlink)}>
          &#60;&#60;&#60; Назад
        </Button>
        <div className={s.rightButtons}>
          <Link className={s.link} to={`/${resourceName}`}>
            Список
          </Link>
          {(pageType === "details" || pageType === "edit") && (
            <>
              <Link className={s.link} to={`/${resourceName}/${id}${pageType === "details" ? "/edit" : ""}`}>
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
      {resourceName === "users" && pageType === "details" && <UserLinks id={id} />}
    </div>
  );
};

export default TopPanel;
