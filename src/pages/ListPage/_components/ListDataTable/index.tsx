import { PropsWithChildren, useContext, useState } from "react";
import ListDataContext from "../../../../context/ListDataContext";
import { DataTable, DataTableExpandedRows, DataTableValueArray } from "primereact/datatable";
import { useNavigate } from "react-router-dom";
import UserLinks from "../../../../components/UserLinks";
import s from "./ListDataTable.module.scss";

const ListDataTable: React.FC<PropsWithChildren> = ({ children }) => {
  const { data } = useContext(ListDataContext);
  const [expandedRows, setExpandedRows] = useState<DataTableExpandedRows | DataTableValueArray>([]);
  const navigate = useNavigate();

  return (
    <DataTable
      className={s.datatable}
      value={data}
      scrollable
      onRowClick={(event) => navigate(`${event.data.id}`)}
      expandedRows={expandedRows}
      onRowToggle={(e) => setExpandedRows(e.data)}
      rowExpansionTemplate={(rowData) => <UserLinks dataId={rowData.id} />}
    >
      {children}
    </DataTable>
  );
};

export default ListDataTable;
