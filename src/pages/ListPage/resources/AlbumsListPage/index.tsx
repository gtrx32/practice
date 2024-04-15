import { Column } from "primereact/column";
import ListPage from "../..";
import s from "../_shared/shared.module.scss";
import ListDataTable from "../../_components/ListDataTable";
import CustomBodyTemplate from "../../_components/CustomBodyTemplate";

const AlbumsListPage = () => {
  return (
    <ListPage>
      <ListDataTable>
        <Column header="ID" field="id" sortable headerClassName={"id"} style={{ maxWidth: "70px" }} />
        <Column
          header="Владелец"
          body={(rowData) => <CustomBodyTemplate field="userId" rowData={rowData} />}
          sortable
          headerClassName={"userId"}
          style={{ maxWidth: "310px" }}
        />
        <Column header="Название" field="title" sortable headerClassName={"title"} style={{ maxWidth: "530px" }} />
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
export default AlbumsListPage;
