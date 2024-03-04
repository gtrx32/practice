import s from "./ListPage.module.scss";
import { useState, useEffect } from "react";
import { Tables, Columns } from "./types";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";

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
      <h1 className={s.title}>{Tables[table as keyof typeof Tables]}</h1>
      <DataTable value={data} tableStyle={{ minWidth: "50rem" }}>
        {Columns[table as keyof typeof Columns].map((column) => (
          <Column field={column.field} header={column.header}></Column>
        ))}
      </DataTable>
    </div>
  );
};

export default ListPage;
