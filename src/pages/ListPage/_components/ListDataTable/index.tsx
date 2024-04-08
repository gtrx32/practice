import { PropsWithChildren, useContext, useState } from "react";
import DataTableContext from "../../../../context/DataTableContext/DataTableContext";
import { DataTable, DataTableExpandedRows, DataTableValueArray } from "primereact/datatable";
import { useNavigate } from "react-router-dom";
import UserLinks from "../../../../components/UserLinks";
import { getDetailsPagePath } from "./types";
import s from "./ListDataTable.module.scss";
import ResourceNameContext from "../../../../context/ResourceNameContext";

const ListDataTable: React.FC<PropsWithChildren> = ({ children }) => {
  const { data } = useContext(DataTableContext);
  const resourceName = useContext(ResourceNameContext);
  const [expandedRows, setExpandedRows] = useState<DataTableExpandedRows | DataTableValueArray>([]);
  const navigate = useNavigate();

  return (
    <DataTable
      className={s.datatable}
      value={data}
      scrollable
      onRowClick={(event) => navigate(getDetailsPagePath(resourceName, event))}
      expandedRows={expandedRows}
      onRowToggle={(e) => setExpandedRows(e.data)}
      rowExpansionTemplate={() => <UserLinks />}
    >
      {children}
    </DataTable>
  );
};

export default ListDataTable;
