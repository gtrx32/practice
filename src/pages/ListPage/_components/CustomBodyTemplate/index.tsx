import s from "./CustomBodyTemplate.module.scss";
import ActionsBodyTemplate from "./ActionsBodyTemplate";
import { Link } from "react-router-dom";
import { CheckIcon, CrossIcon } from "../../../../assets/images/icons";

interface CustomBodyTemplateProps {
  table: string;
  field: string;
  rowData: any;
  getById?: (id: number) => string;
}

const CustomBodyTemplate: React.FC<CustomBodyTemplateProps> = ({ table, field, rowData, getById }) => {
  switch (field) {
    case "thumbnailUrl":
      return <img src={rowData[field]} className={s.thumbnailUrl} alt="Thumbnail" />;
    case "completed":
      return rowData[field] ? <CheckIcon className={s.completed} /> : <CrossIcon className={s.completed} />;
    case "userId":
    case "albumId":
    case "postId":
      const path = `/${field === "userId" ? "users/" : field === "albumId" ? "albums/" : "posts/"}${rowData[field]}`;
      return (
        <Link to={path} className={s.link}>
          {getById?.(rowData[field])}
        </Link>
      );
    case "actions":
      return <ActionsBodyTemplate id={rowData.id} table={table} />;
    case "email":
      return <span className={s.email}>{rowData[field]}</span>;
    default:
      return <>{rowData[field]}</>;
  }
};

export default CustomBodyTemplate;
