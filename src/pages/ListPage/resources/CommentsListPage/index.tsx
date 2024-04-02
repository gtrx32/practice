import { Column } from "primereact/column";
import ListPage from "../..";
import s from "./CommentsListPage.module.scss";
import ListDataTable from "../../ListDataTable";

interface CommentsListPageProps {}

const CommentsListPage: React.FC<CommentsListPageProps> = () => {
  return (
    <ListPage>
      <ListDataTable>
        <Column field="id" header="ID" />
        <Column field="postId" header="Пост" />
        <Column field="email" header="E-mail автора" />
        <Column field="body" header="Текст комментария" />
        <Column field="actions" header="Действия" />
      </ListDataTable>
    </ListPage>
  );
};

export default CommentsListPage;
