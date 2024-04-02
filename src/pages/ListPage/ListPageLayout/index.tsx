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

interface ListPageLayoutProps extends ListProps {
  data: DataType[];
  relatedData: RelatedDataType[];
}

const ListPageLayout: React.FC<ListPageLayoutProps> = ({ children, data, relatedData, title }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;

  const _data = data.slice(startIndex, endIndex);

  const resourceName = useContext(ResourceNameContext);
  const [selectedFilters, setSelectedFilters] = useState<Option[]>([]);

  return (
    <div className={s.wrapper}>
      <UpperPanel title={title} />

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
