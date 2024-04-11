import { Link } from "react-router-dom";
import { CheckIcon, CrossIcon } from "../../../../assets/images/icons";
import s from "./DataRow.module.scss";

interface DataRowProps {
  name: string;
  content: string | number | boolean;
  type: "text" | "email" | "link" | "boolean" | "image";
  url?: string;
}

const DataRow: React.FC<DataRowProps> = ({ name, content, type, url }) => {
  let rowContent;

  switch (type) {
    case "text":
      rowContent = content;
      break;
    case "email":
      rowContent = (
        <a href={`mailto:${content}`} className={s.email}>
          {content}
        </a>
      );
      break;
    case "link":
      rowContent = (
        <Link to={url as string} className={s.link}>
          {content}
        </Link>
      );
      break;
    case "boolean":
      rowContent = content ? <CheckIcon className={s.readyIcon} /> : <CrossIcon className={s.readyIcon} />;
      break;
    case "image":
      rowContent = <img src={content as string} className={s.image} />;
      break;
  }

  return (
    <div key={name} className={s.dataRow}>
      <div className={s.rowName}>{name}:</div>
      <div className={s.rowContent}>{rowContent}</div>
    </div>
  );
};

export default DataRow;
