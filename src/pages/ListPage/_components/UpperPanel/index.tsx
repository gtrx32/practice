import Button from "../../../../components/UI/Button";
import { Link } from "react-router-dom";
import SearchField from "../../../../components/UI/SearchField";
import s from "./UpperPanel.module.scss";
import { useContext } from "react";
import { ResourceNameContext } from "../../../../AppRouter";
import { listPageTitleEnum } from "./types";

const UpperPanel = () => {
  const resourceName = useContext(ResourceNameContext);
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
