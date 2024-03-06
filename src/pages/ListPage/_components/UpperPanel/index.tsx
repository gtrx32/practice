import SearchField from "../../../../components/UI/SearchField";
import { Tables } from "../../types";
import s from "./UpperPanel.module.scss";

interface UpperPanelProps {
  table: string;
}

const UpperPanel: React.FC<UpperPanelProps> = ({ table }) => (
  <div className={s.wrapper}>
    <h1 className={s.title}>{Tables[table as keyof typeof Tables]}</h1>
    <SearchField className={s.search} />
  </div>
);

export default UpperPanel;
