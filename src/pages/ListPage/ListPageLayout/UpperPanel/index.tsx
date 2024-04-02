import Button from "../../../../components/UI/Button";
import { Link } from "react-router-dom";
import SearchField from "../../../../components/UI/SearchField";
import s from "./UpperPanel.module.scss";

interface UpperPanelProps {
  title: string;
}

const UpperPanel: React.FC<UpperPanelProps> = ({ title }) => (
  <div className={s.wrapper}>
    <h1 className={s.title}>{title}</h1>

    <Button className={s.add} asChild>
      <Link to="create">Создать</Link>
    </Button>

    <SearchField className={s.search} />
  </div>
);

export default UpperPanel;
