import { PropsWithChildren, useContext, useEffect, useState } from "react";
import ListDataContext from "../../../../context/ListDataContext";
import { DataTable, DataTableExpandedRows, DataTableStateEvent, DataTableValueArray } from "primereact/datatable";
import { useNavigate } from "react-router-dom";
import UserLinks from "../../../../components/UserLinks";
import s from "./ListDataTable.module.scss";
import { useDataParams } from "../../../../hooks/useDataParams";

const ListDataTable: React.FC<PropsWithChildren> = ({ children }) => {
  const navigate = useNavigate();
  const { data } = useContext(ListDataContext);
  const [expandedRows, setExpandedRows] = useState<DataTableExpandedRows | DataTableValueArray>([]);
  const { setParam, getParam } = useDataParams();

  useEffect(() => {
    const sortHeader = document.querySelector(`th[class~="${getParam("_sort")}"]`);
    sortHeader?.setAttribute("aria-sort", getParam("_order") === "asc" ? "ascending" : "descending");
  }, []);

  const sortHandler = (event: DataTableStateEvent) => {
    const prevSortField = getParam("_sort");

    setParam("_sort", event.sortField);

    prevSortField === event.sortField
      ? setParam("_order", getParam("_order") === "asc" ? "desc" : "asc")
      : setParam("_order", "asc");

    const headers = document.querySelectorAll(`th[role="columnheader"]`);
    headers.forEach((header) => header.removeAttribute("aria-sort"));

    const sortHeader = document.querySelector(`th[class~="${event.sortField}"]`);
    sortHeader?.setAttribute("aria-sort", getParam("_order") === "asc" ? "ascending" : "descending");
  };

  return (
    <DataTable
      className={s.datatable}
      value={data}
      scrollable
      onRowClick={(event) => navigate(`${event.data.id}`)}
      expandedRows={expandedRows}
      onSort={sortHandler}
      onRowToggle={(e) => setExpandedRows(e.data)}
      rowExpansionTemplate={(rowData) => <UserLinks dataId={rowData.id} />}
    >
      {children}
    </DataTable>
  );
};

export default ListDataTable;
