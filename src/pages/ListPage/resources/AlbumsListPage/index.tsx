import { Column } from "primereact/column";
import ListPage from "../..";
import s from "../overall.module.scss";
import ListDataTable from "../../_components/ListDataTable";
import CustomBodyTemplate from "../../_components/CustomBodyTemplate";

interface AlbumsListPageProps {}

const AlbumsListPage: React.FC<AlbumsListPageProps> = () => {
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
