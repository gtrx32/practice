import s from "./CustomBodyTemplate.module.scss";
import ActionsBodyTemplate from "./ActionsBodyTemplate";
import { Link } from "react-router-dom";
import { CheckIcon, CrossIcon } from "../../../../../assets/images/icons";

interface CustomBodyTemplateProps {
  table: string;
  field: string;
  rowData: DataType;
  getItemById?: (id: number) => string;
}

const CustomBodyTemplate: React.FC<CustomBodyTemplateProps> = ({ table, field, rowData, getItemById }) => {
  switch (field) {
    case "thumbnailUrl":
      return <img src={(rowData as PhotoType)[field]} className={s.thumbnailUrl} alt="Thumbnail" />;
    case "completed":
      return (rowData as TodoType)[field] ? (
        <CheckIcon className={s.completed} />
      ) : (
        <CrossIcon className={s.completed} />
      );
    case "userId":
      return (
        <Link to={"/posts/" + (rowData as TodoType)[field]} className={s.link}>
          {getItemById?.((rowData as TodoType)[field])}
        </Link>
      );
    case "albumId":
      return (
        <Link to={"/albums/" + (rowData as PhotoType)[field]} className={s.link}>
          {getItemById?.((rowData as PhotoType)[field])}
        </Link>
      );
    case "postId":
      return (
        <Link to={"/posts/" + (rowData as CommentType)[field]} className={s.link}>
          {getItemById?.((rowData as CommentType)[field])}
        </Link>
      );
    case "actions":
      return <ActionsBodyTemplate id={rowData.id} table={table} />;
    case "email":
      return <span className={s.email}>{(rowData as UserType | CommentType)[field]}</span>;
    default:
      return <>{rowData[field as keyof DataType]}</>;
  }
};

export default CustomBodyTemplate;
