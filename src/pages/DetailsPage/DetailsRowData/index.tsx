import { Link } from "react-router-dom";
import { Show, DataRow } from "./types";
import s from "./DetailsRowData.module.scss";
import { CheckIcon, CrossIcon } from "../../../assets/images/icons";

interface DetailsRowDataProps {
  table: string;
  data: any;
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
            rowContent = <img src={data[name]} className={s.image} />;
            break;
          case "completed":
            rowContent = data[name] ? <CheckIcon className={s.readyIcon} /> : <CrossIcon className={s.readyIcon} />;
            break;
          default:
            if (sub) {
              rowContent = sub.map((subField: any, index: number) => (
                <span key={subField.name}>
                  {index > 0 && ", "}
                  {data[name]?.[subField?.name]}
                </span>
              ));
            } else {
              rowContent = data[name];
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
