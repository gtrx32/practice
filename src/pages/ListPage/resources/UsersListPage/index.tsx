import ListPage from "../..";
import { Column } from "primereact/column";
import s from "./UsersListPage.module.scss";
import ListDataTable from "../../ListDataTable";

interface UsersListPageProps {}

const UsersListPage: React.FC<UsersListPageProps> = () => {
  return (
    <ListPage>
      <ListDataTable>
        <Column expander={true} />
        <Column field="id" header="ID" />
        <Column field="name" header="Имя" />
        <Column field="username" header="Никнейм" />
        <Column field="email" header="E-mail" />
        <Column field="phone" header="Телефон" />
        <Column field="actions" header="Действия" />
      </ListDataTable>
    </ListPage>
  );
};

export default UsersListPage;
