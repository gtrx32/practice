import Button from "../../../../components/UI/Button";
import { Link } from "react-router-dom";
import SearchField from "../../../../components/UI/SearchField";
import s from "./UpperPanel.module.scss";
import { useContext } from "react";
import { listPageTitleEnum } from "./types";
import PageContext from "../../../../context/PageContext";

const UpperPanel = () => {
  const { resourceName } = useContext(PageContext);
  const title = listPageTitleEnum[resourceName];

  return (
    <div className={s.wrapper}>
      <h1 className={s.title}>{title}</h1>

      <Button className={s.add} asChild>
        <Link to="create">Создать</Link>
      </Button>

      <SearchField className={s.search} />
    </div>
  );
};

export default UpperPanel;
