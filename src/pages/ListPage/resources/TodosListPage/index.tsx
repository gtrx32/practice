import { Column } from "primereact/column";
import ListPage from "../..";
import ListDataTable from "../../ListDataTable";
import CustomBodyTemplate from "../../_components/CustomBodyTemplate";
import s from "../overall.module.scss";

interface TodosListPageProps {}

const TodosListPage: React.FC<TodosListPageProps> = () => {
  return (
    <ListPage>
      <ListDataTable>
        <Column header="ID" field="id" style={{ maxWidth: "70px" }} />
        <Column
          header="Автор"
          body={(rowData) => <CustomBodyTemplate field="userId" rowData={rowData} />}
          style={{ maxWidth: "250px" }}
        />
        <Column header="Текст" field="title" style={{ maxWidth: "450px" }} />
        <Column
          header="Выполнена"
          headerClassName={s.completedHeader}
          body={(rowData) => <CustomBodyTemplate field="completed" rowData={rowData} />}
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
