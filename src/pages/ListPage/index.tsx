import s from "./ListPage.module.scss";
import { useState, useEffect } from "react";
import { Columns } from "./types";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import ActionsBodyTemplate from "./_components/ActionsBodyTemplate";
import UpperPanel from "./_components/UpperPanel";
import LoadingSpinner from "../../components/LoadingSpinner";
import axios from "axios";

interface ListPageProps {
  table: string;
}

const ListPage: React.FC<ListPageProps> = ({ table }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    axios
      .get("https://jsonplaceholder.typicode.com/" + table)
      .then(({ data }) => setData(data))
      .catch(() => setIsError(true))
      .finally(() => setIsLoading(false));
  }, [table]);

  return (
    <div className={s.container}>
      <UpperPanel table={table} />
      {isError && <p>Произошла ошибка при загрузке данных</p>}
      {!isError && (
        <>
          {!isLoading ? (
            <>
              <DataTable value={data.slice(0, 20)} scrollable>
                {Columns[table as keyof typeof Columns].map((column) => (
                  <Column
                    key={column.field}
                    header={column.header}
                    field={column.field}
                    sortable
                    style={{ width: column.width, maxWidth: column.width }}
                  ></Column>
                ))}
                <Column
                  header="Действия"
                  body={<ActionsBodyTemplate />}
                  headerClassName="actions"
                  style={{ width: `90px`, maxWidth: `90px`, textAlign: `center` }}
                />
              </DataTable>
            </>
          ) : (
            <LoadingSpinner />
          )}
        </>
      )}
    </div>
  );
};

export default ListPage;
