import { Link } from "react-router-dom";
import SearchField from "../../../../components/UI/SearchField";
import { Tables } from "../../types";
import s from "./UpperPanel.module.scss";
import Button from "../../../../components/UI/Button";

interface UpperPanelProps {
  table: string;
}

const UpperPanel: React.FC<UpperPanelProps> = ({ table }) => (
  <div className={s.wrapper}>
    <h1 className={s.title}>{Tables[table as keyof typeof Tables]}</h1>
    <Button className={s.add} asChild>
      <Link to="create">Создать</Link>
    </Button>
    <SearchField className={s.search} />
  </div>
);

export default UpperPanel;
