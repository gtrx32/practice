import s from "./ListPageLayout.module.scss";
import DataTableContext from "../../../context/DataTableContext/DataTableContext";
import Pagination from "./Pagination";
import { PropsWithChildren, useContext, useState } from "react";
import UpperPanel from "./UpperPanel";
import RelatedFilter from "./RelatedFilter";
import { SelectPlaceholders, getFilters } from "./types";
import { ResourceNameContext } from "../../../AppRouter";
import { Option } from "react-multi-select-component";
import { useFilteredData } from "../../../hooks/useFilteredData";

interface ListPageLayoutProps extends PropsWithChildren {
  data: DataType[];
  relatedData: RelatedDataType[];
}

const ListPageLayout: React.FC<ListPageLayoutProps> = ({ children, data, relatedData }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;

  const resourceName = useContext(ResourceNameContext);
  const [selectedFilters, setSelectedFilters] = useState<Option[]>([]);

  const filteredData = useFilteredData({ data, selectedFilters });
  const displayedData = filteredData.slice(startIndex, endIndex);

  return (
    <div className={s.wrapper}>
      <UpperPanel />

      {resourceName !== "users" && (
        <RelatedFilter
          filters={getFilters(resourceName, relatedData)}
          placeholder={SelectPlaceholders[resourceName as keyof typeof SelectPlaceholders]}
          onChange={(selected: Option[]) => setSelectedFilters(selected)}
        />
      )}

      <DataTableContext.Provider value={{ data: displayedData }}>{children}</DataTableContext.Provider>

      <Pagination
        rowCount={filteredData.length}
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
