import { Column } from "primereact/column";
import ListPage from "../..";
import s from "../_shared/shared.module.scss";
import ListDataTable from "../../_components/ListDataTable";
import CustomBodyTemplate from "../../_components/CustomBodyTemplate";
import clsx from "clsx";

const TodosListPage = () => {
  return (
    <ListPage>
      <ListDataTable>
        <Column header="ID" field="id" sortable headerClassName={"id"} style={{ maxWidth: "70px" }} />
        <Column
          header="Автор"
          body={(rowData) => <CustomBodyTemplate field="userId" rowData={rowData} />}
          sortable
          headerClassName={"userId"}
          style={{ maxWidth: "250px" }}
        />
        <Column header="Текст" field="title" sortable headerClassName={"title"} style={{ maxWidth: "450px" }} />
        <Column
          header="Выполнена"
          body={(rowData) => <CustomBodyTemplate field="completed" rowData={rowData} />}
          sortable
          headerClassName={clsx("completed", s.completedHeader)}
          style={{ maxWidth: "140px" }}
        />
        <Column
          header="Действия"
          headerClassName={s.actionsHeader}
          body={(rowData) => <CustomBodyTemplate field="actions" rowData={rowData} />}
          style={{ maxWidth: "90px" }}
        />
      </ListDataTable>
    </ListPage>
  );
};

export default TodosListPage;
