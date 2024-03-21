import s from "./ListPage.module.scss";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Columns } from "./types";
import { Column } from "primereact/column";
import { DataTable, DataTableRowClickEvent } from "primereact/datatable";
import UpperPanel from "./_components/UpperPanel";
import LoadingSpinner from "../../components/LoadingSpinner";
import Container from "../../components/UI/Container";
import mainApi from "../../api/api";
import Pagination from "./_components/Pagination";
import { AlbumType, PostType, UserType } from "../EditPage/types";
import CustomBodyTemplate from "./_components/CustomBodyTemplate";
import { getRelatedTable } from "../DetailsPage/types";

interface ListPageProps {
  table: string;
}

const ListPage: React.FC<ListPageProps> = ({ table }) => {
  const [data, setData] = useState([]);
  const [relatedData, setRelatedData] = useState<UserType[] | AlbumType[] | PostType[]>([]);
  const relatedTable = getRelatedTable(table);

  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [rowsPerPage, setRowsPerPage] = useState<number>(10);
  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const displayedData = data.slice(startIndex, endIndex);

  useEffect(() => {
    setIsLoading(true);
    Promise.all([mainApi.get(table), mainApi.get(relatedTable)])
      .then(([data, relatedData]) => {
        setData(data.data);
        setRelatedData(relatedData.data);
      })
      .catch(() => setIsError(true))
      .finally(() => setIsLoading(false));
  }, [table]);

  const getById = (id: number) => {
    if (Array.isArray(relatedData)) {
      const dataItem = relatedData.find((item) => item.id === id);
      if (dataItem) {
        if ("name" in dataItem) return (dataItem as UserType).name;
        else if ("title" in dataItem) return (dataItem as AlbumType | PostType).title;
      }
    }
    return "";
  };

  const redirectToDetailPage = ({ data }: DataTableRowClickEvent) => {
    const { id } = data as { id: number };
    navigate(`/${table}/${id}`);
  };

  return (
    <Container className={s.container}>
      <UpperPanel table={table} />
      {isError ? (
        <p>Произошла ошибка при загрузке данных</p>
      ) : isLoading ? (
        <LoadingSpinner />
      ) : (
        <DataTable value={displayedData} scrollable onRowClick={redirectToDetailPage}>
          {Columns[table as keyof typeof Columns].map(({ field, header, width }) => (
            <Column
              key={field}
              header={header}
              body={(rowData) => <CustomBodyTemplate table={table} field={field} rowData={rowData} getById={getById} />}
              sortable
              style={{ width: width, maxWidth: width }}
            />
          ))}
        </DataTable>
      )}
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

export default ListPage;
