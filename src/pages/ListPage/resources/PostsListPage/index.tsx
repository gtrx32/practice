import { Column } from "primereact/column";
import ListPage from "../..";
import s from "../_shared/shared.module.scss";
import ListDataTable from "../../_components/ListDataTable";
import CustomBodyTemplate from "../../_components/CustomBodyTemplate";

const PostsListPage = () => {
  return (
    <ListPage>
      <ListDataTable>
        <Column header="ID" field="id" style={{ maxWidth: "70px" }} />
        <Column
          header="Автор"
          body={(rowData) => <CustomBodyTemplate field="userId" rowData={rowData} />}
          style={{ maxWidth: "250px" }}
        />
        <Column header="Заголовок" field="title" style={{ maxWidth: "600px" }} />
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

export default PostsListPage;
