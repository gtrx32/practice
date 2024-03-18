import s from "./ListPage.module.scss";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Columns } from "./types";
import { Column } from "primereact/column";
import { DataTable, DataTableRowClickEvent } from "primereact/datatable";
import ActionsBodyTemplate from "./_components/ActionsBodyTemplate";
import UpperPanel from "./_components/UpperPanel";
import LoadingSpinner from "../../components/LoadingSpinner";
import Container from "../../components/UI/Container";
import mainApi from "../../api/api";
import done from "@assets/images/details/done.svg";
import notDone from "@assets/images/details/notDone.svg";
import Pagination from "./_components/Pagination";

interface ListPageProps {
  table: string;
}

const ListPage: React.FC<ListPageProps> = ({ table }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const navigate = useNavigate();

  const [rowsOnPage, setRowsOnPage] = useState<number>(10);
  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    setIsLoading(true);
    mainApi
      .get(table)
      .then(({ data }) => setData(data))
      .catch(() => setIsError(true))
      .finally(() => setIsLoading(false));
  }, [table]);

  const handleRowsOnPageChange = ({ target: { value } }: React.ChangeEvent<HTMLSelectElement>) =>
    setRowsOnPage(Number(value));
  const handleCurrentPageChange = (pageNumber: number) => setCurrentPage(pageNumber);

  const startIndex = (currentPage - 1) * rowsOnPage;
  const endIndex = startIndex + rowsOnPage;
  const displayedData = data.slice(startIndex, endIndex);

  const redirectToDetailPage = ({ data }: DataTableRowClickEvent) => {
    const { id } = data as { id: number };
    navigate(`/${table}/${id}`);
  };

  return (
    <Container className={s.container}>
      <UpperPanel table={table} />
      {!isError ? (
        !isLoading ? (
          <DataTable value={displayedData} scrollable onRowClick={redirectToDetailPage}>
            {Columns[table as keyof typeof Columns].map(({ field, header, width }) => (
              <Column
                key={field}
                header={header}
                body={
                  field == "thumbnailUrl" || field == "completed"
                    ? (rowData) => (
                        <img
                          src={field == "thumbnailUrl" ? rowData[field] : rowData[field] == true ? done : notDone}
                          style={field == "thumbnailUrl" ? { maxHeight: "50px" } : { width: "16px" }}
                        />
                      )
                    : undefined
                }
                field={field}
                sortable
                style={{ width: width, maxWidth: width }}
              ></Column>
            ))}
            <Column
              header="Действия"
              body={(rowData) => <ActionsBodyTemplate id={rowData.id} table={table} />}
              headerClassName="actions"
              style={{ width: `90px`, maxWidth: `90px`, textAlign: `center` }}
            />
          </DataTable>
        ) : (
          <LoadingSpinner />
        )
      ) : (
        <p>Произошла ошибка при загрузке данных</p>
      )}
      <Pagination
        rowCount={data.length}
        startIndex={startIndex}
        endIndex={endIndex}
        currentPage={currentPage}
        rowsOnPage={rowsOnPage}
        handleRowsOnPageChange={handleRowsOnPageChange}
        handleCurrentPageChange={handleCurrentPageChange}
      />
    </Container>
  );
};

export default ListPage;
