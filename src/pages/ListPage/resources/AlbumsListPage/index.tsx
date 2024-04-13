import { Column } from "primereact/column";
import ListPage from "../..";
import s from "../_shared/shared.module.scss";
import ListDataTable from "../../_components/ListDataTable";
import CustomBodyTemplate from "../../_components/CustomBodyTemplate";

const AlbumsListPage = () => {
  return (
    <ListPage>
      <ListDataTable>
        <Column field="id" header="ID" style={{ maxWidth: "70px" }} />
        <Column
          header="Владелец"
          body={(rowData) => <CustomBodyTemplate field="userId" rowData={rowData} />}
          style={{ maxWidth: "310px" }}
        />
        <Column field="title" header="Название" style={{ maxWidth: "530px" }} />
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
