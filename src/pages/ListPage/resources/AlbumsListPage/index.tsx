import { Column } from "primereact/column";
import ListPage from "../..";
import s from "./AlbumsListPage.module.scss";
import ListDataTable from "../../ListDataTable";

interface AlbumsListPageProps {}

const AlbumsListPage: React.FC<AlbumsListPageProps> = () => {
  return (
    <ListPage>
      <ListDataTable>
        <Column field="id" header="ID" />
        <Column field="userId" header="Владелец" />
        <Column field="title" header="Название" />
        <Column field="actions" header="Действия" />
      </ListDataTable>
    </ListPage>
  );
};
export default AlbumsListPage;
