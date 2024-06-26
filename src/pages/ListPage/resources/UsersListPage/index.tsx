import { Column } from "primereact/column";
import ListPage from "../..";
import s from "../_shared/shared.module.scss";
import ListDataTable from "../../_components/ListDataTable";
import CustomBodyTemplate from "../../_components/CustomBodyTemplate";

const UsersListPage = () => {
  return (
    <ListPage>
      <ListDataTable>
        <Column expander={true} />
        <Column header="ID" field="id" sortable headerClassName={"id"} style={{ maxWidth: "70px" }} />
        <Column header="Имя" field="name" sortable headerClassName={"name"} style={{ maxWidth: "190px" }} />
        <Column header="Никнейм" field="username" sortable headerClassName={"username"} style={{ maxWidth: "190px" }} />
        <Column header="E-mail" field="email" sortable headerClassName={"email"} style={{ maxWidth: "260px" }} />
        <Column header="Телефон" field="phone" sortable headerClassName={"phone"} style={{ maxWidth: "190px" }} />
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

export default UsersListPage;
