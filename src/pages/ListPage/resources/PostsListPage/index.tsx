import { Column } from "primereact/column";
import ListPage from "../..";
import s from "./PostsListPage.module.scss";
import ListDataTable from "../../ListDataTable";

interface PostsListPageProps {}

const PostsListPage: React.FC<PostsListPageProps> = () => {
  return (
    <ListPage title="Посты">
      <ListDataTable>
        <Column field="id" header="ID" />
        <Column field="userId" header="Автор" />
        <Column field="title" header="Заголовок" />
        <Column field="actions" header="Действия" />
      </ListDataTable>
    </ListPage>
  );
};

export default PostsListPage;
