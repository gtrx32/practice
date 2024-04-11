import { useContext } from "react";
import DetailsDataContext from "../../../../context/DetailsDataContext";
import DataRow from "../../_components/DataRow";

const PhotosDetails = () => {
  const { data, relatedData, relatedPath } = useContext(DetailsDataContext);

  return (
    <div>
      <DataRow name="id" content={(data as PhotoType).id} type="text" />
      <DataRow name="Название" content={(data as PhotoType).title} type="text" />
      <DataRow name="Альбом" content={(relatedData as AlbumType).title} type="link" url={relatedPath} />
      <DataRow name="Превью" content={(data as PhotoType).thumbnailUrl} type="image" />
      <DataRow name="Изображение" content={(data as PhotoType).url} type="image" />
    </div>
  );
};

export default PhotosDetails;
