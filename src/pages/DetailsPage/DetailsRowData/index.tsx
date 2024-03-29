import { Link } from "react-router-dom";
import { Show, DataRow } from "./types";
import s from "./DetailsRowData.module.scss";
import { CheckIcon, CrossIcon } from "../../../assets/images/icons";
import clsx from "clsx";

interface DetailsRowDataProps {
  table: string;
  data: DataType | null;
  relatedData: RelatedDataType | null;
  relatedPath: string;
}

const DetailsRowData: React.FC<DetailsRowDataProps> = ({ table, data, relatedData, relatedPath }) => {
  const fieldsToShow = Show[table as keyof typeof Show];

  return (
    <div className={s.wrapper}>
      {fieldsToShow.map(({ name, label, sub }: DataRow) => {
        let rowContent;
        switch (name) {
          case "userId":
          case "albumId":
          case "postId":
            rowContent = (
              <Link to={relatedPath} className={s.link}>
                {(name === "userId" && (relatedData as UserType).name) ||
                  (name === "albumId" && (relatedData as AlbumType).title) ||
                  (name === "postId" && (relatedData as PostType).title)}
              </Link>
            );
            break;
          case "url":
          case "thumbnailUrl":
            rowContent = <img src={(data as PhotoType)[name]} className={s.image} />;
            break;
          case "completed":
            rowContent = (data as TodoType)[name] ? (
              <CheckIcon className={s.readyIcon} />
            ) : (
              <CrossIcon className={s.readyIcon} />
            );
            break;
          case "email":
            rowContent = (
              <a href={clsx("mailto:", (data as UserType | CommentType)[name])} className={s.email}>
                {(data as UserType | CommentType)[name]}
              </a>
            );
            break;
          default:
            if (sub) {
              rowContent = sub.map((subField: any, index: number) => (
                <span key={subField.name}>
                  {index > 0 && ", "}
                  {(data as any)[name]?.[subField?.name]}
                </span>
              ));
            } else {
              rowContent = data && data[name as keyof DataType];
            }
        }

        return (
          <div key={name} className={s.row}>
            <div className={s.rowTitle}>{label}: </div>
            <div className={s.rowData}>{rowContent}</div>
          </div>
        );
      })}
    </div>
  );
};

export default DetailsRowData;
