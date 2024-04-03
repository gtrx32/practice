import { Column } from "primereact/column";
import ListPage from "../..";
import s from "../OverallStyles.module.scss";
import ListDataTable from "../../ListDataTable";
import CustomBodyTemplate from "../../_components/CustomBodyTemplate";

interface PostsListPageProps {}

const PostsListPage: React.FC<PostsListPageProps> = () => {
  return (
    <ListPage>
      <ListDataTable>
        <Column header="ID" field="id" style={{ width: "70px", maxWidth: "70px" }} />
        <Column
          header="Автор"
          body={(rowData) => <CustomBodyTemplate field="userId" rowData={rowData} />}
          style={{ width: "250px", maxWidth: "250px" }}
        />
        <Column header="Заголовок" field="title" style={{ width: "600px", maxWidth: "600px" }} />
        <Column
          header="Действия"
          headerClassName={s.actionsHeader}
          body={(rowData) => <CustomBodyTemplate field="actions" rowData={rowData} />}
          style={{ width: "90px", maxWidth: "90px" }}
        />
      </ListDataTable>
    </ListPage>
  );
};

export default PostsListPage;
