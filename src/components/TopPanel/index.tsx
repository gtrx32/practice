import { Link, useNavigate } from "react-router-dom";
import s from "./TopPanel.module.scss";
import { titles } from "./types";
import { useContext } from "react";
import ModalIsOpenContext from "../../context/ModalIsOpenContext";
import Button from "../UI/Button";
import clsx from "clsx";
import PageContext from "../../context/PageContext";

const TopPanel = () => {
  const { pageType, resourceName, dataId } = useContext(PageContext);
  const { setTarget, setModalIsOpen } = useContext(ModalIsOpenContext);
  const navigate = useNavigate();

  const onDeleteHandler = () => {
    setTarget({ resourceName, dataId });
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
              <Link className={s.link} to={`/${resourceName}/${dataId}${pageType === "details" ? "/edit" : ""}`}>
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
