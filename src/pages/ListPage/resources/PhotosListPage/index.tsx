import { Column } from "primereact/column";
import ListPage from "../..";
import s from "../OverallStyles.module.scss";
import ListDataTable from "../../ListDataTable";
import CustomBodyTemplate from "../../_components/CustomBodyTemplate";

interface PhotosListPageProps {}

const PhotosListPage: React.FC<PhotosListPageProps> = () => {
  return (
    <ListPage>
      <ListDataTable>
        <Column header="ID" field="id" style={{ maxWidth: "70px" }} />
        <Column
          header="Превью"
          body={(rowData) => <CustomBodyTemplate field="thumbnailUrl" rowData={rowData} />}
          style={{ maxWidth: "100px" }}
        />
        <Column header="Заголовок" field="title" style={{ maxWidth: "340px" }} />
        <Column
          header="Альбом"
          body={(rowData) => <CustomBodyTemplate field="albumId" rowData={rowData} />}
          style={{ maxWidth: "360px" }}
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

export default PhotosListPage;
