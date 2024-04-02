import s from "./ListPageLayout.module.scss";
import DataTableContext from "../../../context/DataTableContext/DataTableContext";
import { ListProps } from "..";
import Pagination from "./Pagination";
import { useContext, useState } from "react";
import UpperPanel from "./UpperPanel";
import RelatedFilter from "./RelatedFilter";
import { SelectPlaceholders, getFilters } from "./types";
import { ResourceNameContext } from "../../../AppRouter";
import { Option } from "react-multi-select-component";
import { useFilteredData } from "../../../hooks/useFilteredData";

interface ListPageLayoutProps extends ListProps {
  data: DataType[];
  relatedData: RelatedDataType[];
}

const ListPageLayout: React.FC<ListPageLayoutProps> = ({ children, data, relatedData, title }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;

  const [selectedFilters, setSelectedFilters] = useState<Option[]>([]);
  const resourceName = useContext(ResourceNameContext);

  const filteredData = useFilteredData({ data, selectedFilters });
  const _data = filteredData.slice(startIndex, endIndex);

  return (
    <div className={s.wrapper}>
      <UpperPanel QQQQQQQQQQQ />

      <RelatedFilter
        filters={getFilters(resourceName, relatedData)}
        placeholder={SelectPlaceholders[resourceName as keyof typeof SelectPlaceholders]}
        onChange={(selected: Option[]) => setSelectedFilters(selected)}
      />

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
