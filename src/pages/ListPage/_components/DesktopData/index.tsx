import { Column } from "primereact/column";
import { DataTable, DataTableExpandedRows, DataTableValueArray } from "primereact/datatable";
import UserLinks from "../../../../components/UserLinks";
import CustomBodyTemplate from "./CustomBodyTemplate";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import s from "./DesktopData.module.scss";
import { getDetailsPagePath, Columns } from "./types";
import getItemById from "../../../../utils/getItemById";
import clsx from "clsx";

interface DesktopDataProps {
  table: string;
  displayedData: DataType[];
  relatedData: RelatedDataType[];
  className: string;
}

const DesktopData: React.FC<DesktopDataProps> = ({ table, displayedData, relatedData, className }) => {
  const [expandedRows, setExpandedRows] = useState<DataTableExpandedRows | DataTableValueArray>([]);
  const navigate = useNavigate();

  useEffect(() => {
    setExpandedRows([]);
  }, [table]);

  return (
    <DataTable
      className={clsx(s.datatable, className)}
      value={displayedData}
      scrollable
      onRowClick={(event) => navigate(getDetailsPagePath(table, event))}
      expandedRows={expandedRows}
      onRowToggle={(e) => setExpandedRows(e.data)}
      rowExpansionTemplate={(rowData) => <UserLinks id={rowData["id"].toString()} />}
    >
      {table === "users" && <Column expander={true} className={s.expander} />}
      {Columns[table as keyof typeof Columns].map(({ field, header, width }) => (
        <Column
          key={field}
          header={header}
          body={(rowData) => (
            <CustomBodyTemplate
              table={table}
              field={field}
              rowData={rowData}
              getItemById={(id: number) => getItemById(id, relatedData)}
            />
          )}
          field={field}
          sortable
          style={{ width: width, maxWidth: width }}
        />
      ))}
    </DataTable>
  );
};

export default DesktopData;
