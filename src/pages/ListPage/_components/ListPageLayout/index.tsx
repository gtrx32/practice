import s from "./ListPageLayout.module.scss";
import ListDataContext from "../../../../context/ListDataContext";
import Pagination from "../../_components/Pagination";
import { PropsWithChildren, useContext, useState } from "react";
import UpperPanel from "../../_components/UpperPanel";
import RelatedFilter from "../../_components/RelatedFilter";
import { SelectPlaceholders, getFilters } from "./types";
import Container from "../../../../components/UI/Container";
import PageContext from "../../../../context/PageContext";

interface ListPageLayoutProps extends PropsWithChildren {
  data: DataType[];
  relatedData: RelatedDataType[];
}

const ListPageLayout: React.FC<ListPageLayoutProps> = ({ children, data, relatedData }) => {
  const { resourceName } = useContext(PageContext);

  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;

  const displayedData = data.slice(startIndex, endIndex);

  return (
    <Container className={s.container}>
      <UpperPanel />

      {resourceName !== "users" && (
        <RelatedFilter
          filters={getFilters(resourceName, relatedData)}
          placeholder={SelectPlaceholders[resourceName as keyof typeof SelectPlaceholders]}
        />
      )}

      <ListDataContext.Provider value={{ data: displayedData, relatedData: relatedData }}>
        {children}
      </ListDataContext.Provider>

      <Pagination
        rowCount={data.length}
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
