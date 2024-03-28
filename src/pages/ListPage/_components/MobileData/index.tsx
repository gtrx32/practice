import { table } from "console";
import { Columns } from "../DesktopData/types";
import s from "./MobileData.module.scss";

interface MobileDataProps {
  table: string;
  displayedData: DataType[];
  relatedData: RelatedDataType[];
  className: string;
}

const MobileData: React.FC<MobileDataProps> = ({ table, displayedData, relatedData, className }) => {
  return (
    <div className={className}>
      {displayedData.map((data) => (
        <div>
          {Columns[table as keyof typeof Columns].map(({ field, header, width }) => (
            <div>
              {field} - {data[field as keyof DataType]}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default MobileData;
