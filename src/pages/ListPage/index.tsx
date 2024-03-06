import s from "./ListPage.module.scss";
import { useState, useEffect } from "react";
import { Tables, Columns } from "./types";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import SearchField from "../../components/UI/SearchField";
import Button from "../../components/UI/Button";
import pencil from "../../assets/table/pencil.svg";
import trashcan from "../../assets/table/trashcan.svg";
import sideArrow from "../../assets/table/sideArrow.svg";
import sideArrowGray from "../../assets/table/sideArrowGray.svg";

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

  const actionsBodyTemplate = () => {
    return (
      <div className={s.buttons}>
        <Button className={s.button}>
          <img src={pencil} alt="" />
        </Button>
        <Button className={s.button}>
          <img src={trashcan} alt="" />
        </Button>
      </div>
    );
  };

  const arrowTemplate = (isHeader: boolean) => {
    return (
      <div className={s.sideArrow}>
        <img src={isHeader ? sideArrowGray : sideArrow} />
      </div>
    );
  };

  return (
    <div className={s.container}>
      <div className={s.topRow}>
        <h1 className={s.title}>{Tables[table as keyof typeof Tables]}</h1>
        <SearchField className={s.search} />
      </div>
      <DataTable value={data}>
        <Column
          header={() => arrowTemplate(true)} // Передаем параметр true для заголовка
          body={() => arrowTemplate(false)}
          headerClassName="helpme"
          style={{ width: `40px`, maxWidth: `40px` }}
        />
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
          body={actionsBodyTemplate}
          style={{ width: `90px`, maxWidth: `90px`, textAlign: `center` }}
          headerClassName="actions"
        />
      </DataTable>
    </div>
  );
};

export default ListPage;
