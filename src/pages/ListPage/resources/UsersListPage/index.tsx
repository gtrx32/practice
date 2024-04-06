import ListPage from "../..";
import { Column } from "primereact/column";
import s from "../overall.module.scss";
import ListDataTable from "../../_components/ListDataTable";
import CustomBodyTemplate from "../../_components/CustomBodyTemplate";

interface UsersListPageProps {}

const UsersListPage: React.FC<UsersListPageProps> = () => {
  return (
    <ListPage>
      <ListDataTable>
        <Column expander={true} className={s.expander} />
        <Column header="ID" field="id" style={{ maxWidth: "70px" }} />
        <Column header="Имя" field="name" style={{ maxWidth: "190px" }} />
        <Column header="Никнейм" field="username" style={{ maxWidth: "190px" }} />
        <Column header="E-mail" field="email" style={{ maxWidth: "260px" }} />
        <Column header="Телефон" field="phone" style={{ maxWidth: "190px" }} />
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
