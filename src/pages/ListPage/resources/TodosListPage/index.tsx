import { Column } from "primereact/column";
import ListPage from "../..";
import s from "./TodosListPage.module.scss";
import ListDataTable from "../../ListDataTable";

interface TodosListPageProps {}

const TodosListPage: React.FC<TodosListPageProps> = () => {
  return (
    <ListPage>
      <ListDataTable>
        <Column field="id" header="ID" />
        <Column field="userId" header="Автор" />
        <Column field="title" header="Текст" />
        <Column field="completed" header="Выполнена" />
        <Column field="actions" header="Действия" />
      </ListDataTable>
    </ListPage>
  );
};

export default TodosListPage;
