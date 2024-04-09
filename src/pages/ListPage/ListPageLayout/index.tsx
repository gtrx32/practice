import s from "./ListPageLayout.module.scss";
import DataTableContext from "../../../context/DataTableContext/DataTableContext";
import Pagination from "../_components/Pagination";
import { PropsWithChildren, useContext, useState } from "react";
import UpperPanel from "../_components/UpperPanel";
import RelatedFilter from "../_components/RelatedFilter";
import { SelectPlaceholders, getFilters } from "./types";
import { useFilteredDataTable } from "../../../hooks/useFilteredDataTable";
import Container from "../../../components/UI/Container";
import ResourceNameContext from "../../../context/ResourceNameContext";

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
  const [selectedFilters, setSelectedFilters] = useState<SelectOption[]>([]);

  const filteredData = useFilteredDataTable({ data, selectedFilters });
  const displayedData = filteredData.slice(startIndex, endIndex);

  return (
    <Container className={s.container}>
      <UpperPanel />

      {resourceName !== "users" && (
        <RelatedFilter
          filters={getFilters(resourceName, relatedData)}
          placeholder={SelectPlaceholders[resourceName as keyof typeof SelectPlaceholders]}
          onChange={(selected: SelectOption[]) => setSelectedFilters(selected)}
        />
      )}

      <DataTableContext.Provider value={{ data: displayedData, relatedData: relatedData }}>
        {children}
      </DataTableContext.Provider>

      <Pagination
        rowCount={filteredData.length}
        startIndex={startIndex}
        endIndex={endIndex}
        currentPage={currentPage}
        rowsPerPage={rowsPerPage}
        setCurrentPage={setCurrentPage}
        setRowsPerPage={setRowsPerPage}
      />
    </Container>
  );
};

export default ListPageLayout;
