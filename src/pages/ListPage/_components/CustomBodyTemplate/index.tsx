import { Link } from "react-router-dom";
import { CheckIcon, CrossIcon } from "../../../../assets/images/icons";
import s from "./CustomBodyTemplate.module.scss";
import ActionsBodyTemplate from "./ActionsBodyTemplate";
import { useContext } from "react";
import ListDataContext from "../../../../context/ListDataContext";
import { getItemById } from "./types";

interface CustomBodyTemplateProps {
  field: string;
  rowData: DataType;
}

const CustomBodyTemplate: React.FC<CustomBodyTemplateProps> = ({ field, rowData }) => {
  const { relatedData } = useContext(ListDataContext);

  switch (field) {
    case "thumbnailUrl":
      return (
        <img
          src={(rowData as PhotoType)[field as keyof PhotoType].toString()}
          className={s.thumbnailUrl}
          alt="Thumbnail"
        />
      );
    case "completed":
      return (
        <div className={s.completedWrapper}>
          {(rowData as TodoType)[field] ? <CheckIcon className={s.completed} /> : <CrossIcon className={s.completed} />}
        </div>
      );
    case "userId":
      return (
        <Link to={"/users/" + (rowData as TodoType)[field]} className={s.link}>
          {getItemById?.((rowData as TodoType)[field], relatedData)}
        </Link>
      );
    case "albumId":
      return (
        <Link to={"/albums/" + (rowData as PhotoType)[field]} className={s.link}>
          {getItemById?.((rowData as PhotoType)[field], relatedData)}
        </Link>
      );
    case "postId":
      return (
        <Link to={"/posts/" + (rowData as CommentType)[field]} className={s.link}>
          {getItemById?.((rowData as CommentType)[field], relatedData)}
        </Link>
      );
    case "actions":
      return <ActionsBodyTemplate dataId={rowData.id} />;
    case "email":
      return (
        <a href={`mailto:${(rowData as UserType | CommentType)[field]}`} className={s.email}>
          {(rowData as UserType | CommentType)[field]}
        </a>
      );
    default:
      return <>{rowData[field as keyof DataType]}</>;
  }
};

export default CustomBodyTemplate;
