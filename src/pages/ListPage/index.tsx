import s from "./ListPage.module.scss";
import { useState, useEffect } from "react";
import { Columns } from "./types";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import ActionsBodyTemplate from "./_components/ActionsBodyTemplate";
import UpperPanel from "./_components/UpperPanel";

interface ListPageProps {
  table: string;
}

const ListPage: React.FC<ListPageProps> = ({ table }) => {
  const [data, setData] = useState<[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/" + table)
      .then((response) => response.json())
      .then((json) => {
        setData(json);
      });
  }, [table]);

  return (
    <div className={s.container}>
      <UpperPanel table={table} />
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
    </div>
  );
};

export default ListPage;
