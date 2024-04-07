import s from "./DetailsData.module.scss";

interface DetailsDataProps {
  rows: Array<{
    name: string;
    content: string | number | boolean;
    type: "text" | "email" | "link" | "boolean" | "image";
  }>;
}

const DetailsData: React.FC<DetailsDataProps> = ({ rows }) => (
  <div className={s.wrapper}>
    {rows.map(({ name, content, type }) => (
      <div key={name} className={s.row}>
        <div className={s.rowName}>{name}</div>
        <div className={s.rowContent}>{content}</div>
      </div>
    ))}
  </div>
);

export default DetailsData;
