import { Column } from "primereact/column";
import ListPage from "../..";
import s from "./PhotosListPage.module.scss";
import ListDataTable from "../../ListDataTable";

interface PhotosListPageProps {}

const PhotosListPage: React.FC<PhotosListPageProps> = () => {
  return (
    <ListPage>
      <ListDataTable>
        <Column field="id" header="ID" />
        <Column field="thumbnailUrl" header="Превью" />
        <Column field="title" header="Заголовок" />
        <Column field="albumId" header="Альбом" />
        <Column field="actions" header="Действия" />
      </ListDataTable>
    </ListPage>
  );
};

export default PhotosListPage;
