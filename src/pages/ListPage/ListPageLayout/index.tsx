import s from "./ListPageLayout.module.scss";
import DataTableContext from "../../../context/DataTableContext/DataTableContext";
import { ListProps } from "..";
import Pagination from "./Pagination";
import { useState } from "react";
import UpperPanel from "./UpperPanel";

interface ListPageLayoutProps extends ListProps {
  data: DataType[];
}

const ListPageLayout: React.FC<ListPageLayoutProps> = ({ children, data, title }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;

  const _data = data.slice(startIndex, endIndex);

  return (
    <div className={s.wrapper}>
      <UpperPanel title={title} />

      <DataTableContext.Provider value={{ data: _data }}>{children}</DataTableContext.Provider>

      <Pagination
        rowCount={data.length}
        startIndex={startIndex}
        endIndex={endIndex}
        currentPage={currentPage}
        rowsPerPage={rowsPerPage}
        setCurrentPage={setCurrentPage}
        setRowsPerPage={setRowsPerPage}
      />
    </div>
  );
};

export default ListPageLayout;
