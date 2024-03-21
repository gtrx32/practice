import { Link } from "react-router-dom";
import { UserType, AlbumType, PostType } from "../../EditPage/types";
import { Show, DataRow } from "./types";
import s from "./DetailsRowData.module.scss";
import done from "@assets/images/details/done.svg";
import notDone from "@assets/images/details/notDone.svg";

interface DetailsRowDataProps {
  table: string;
  data: any;
  relatedData: UserType | AlbumType | PostType | undefined;
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
            rowContent = <img src={data[name] ? done : notDone} className={s.readyIcon} />;
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
