import { Column } from "primereact/column";
import ListPage from "../..";
import s from "../_shared/shared.module.scss";
import ListDataTable from "../../_components/ListDataTable";
import CustomBodyTemplate from "../../_components/CustomBodyTemplate";

const CommentsListPage = () => {
  return (
    <ListPage>
      <ListDataTable>
        <Column header="ID" field="id" sortable headerClassName={"id"} style={{ maxWidth: "70px" }} />
        <Column
          header="Пост"
          body={(rowData) => <CustomBodyTemplate field="postId" rowData={rowData} />}
          sortable
          headerClassName={"postId"}
          style={{ maxWidth: "280px" }}
        />
        <Column
          header="E-mail автора"
          body={(rowData) => <CustomBodyTemplate field="email" rowData={rowData} />}
          sortable
          headerClassName={"email"}
          style={{ maxWidth: "215px" }}
        />
        <Column
          header="Текст комментария"
          field="body"
          sortable
          headerClassName={"body"}
          style={{ maxWidth: "330px" }}
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

export default CommentsListPage;
