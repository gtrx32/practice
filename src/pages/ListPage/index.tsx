import s from "./ListPage.module.scss";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Columns } from "./types";
import { Column } from "primereact/column";
import { DataTable, DataTableRowClickEvent } from "primereact/datatable";
import ActionsBodyTemplate from "./_components/ActionsBodyTemplate";
import UpperPanel from "./_components/UpperPanel";
import LoadingSpinner from "../../components/LoadingSpinner";
import axios from "axios";
import Container from "../../components/UI/Container";

interface ListPageProps {
  table: string;
}

const ListPage: React.FC<ListPageProps> = ({ table }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);

    axios
      .get("https://jsonplaceholder.typicode.com/" + table)
      .then(({ data }) => setData(data))
      .catch(() => setIsError(true))
      .finally(() => setIsLoading(false));
  }, [table]);

  const redirectToDetailPage = ({ data }: DataTableRowClickEvent) => {
    const { id } = data as { id: number };
    navigate(`/${table}/${id}`);
  };

  return (
    <Container className={s.container}>
      <UpperPanel table={table} />
      {!isError ? (
        !isLoading ? (
          <DataTable value={data.slice(0, 20)} scrollable onRowClick={redirectToDetailPage}>
            {Columns[table as keyof typeof Columns].map(({ field, header, width }) => (
              <Column
                key={field}
                header={header}
                body={
                  field === "thumbnailUrl"
                    ? (rowData) => <img src={rowData[field]} alt={rowData[field]} style={{ maxHeight: "50px" }} />
                    : undefined
                }
                field={field}
                sortable
                style={{ width: width, maxWidth: width }}
              ></Column>
            ))}
            <Column
              header="Действия"
              body={<ActionsBodyTemplate />}
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
    </Container>
  );
};

export default ListPage;
