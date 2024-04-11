import { useContext } from "react";
import DataRow from "../../../_components/DataRow";
import DetailsDataContext from "../../../../../context/DetailsDataContext";

const AlbumsDetails = () => {
  const { data, relatedData, relatedPath } = useContext(DetailsDataContext);

  return (
    <div>
      <DataRow name="id" content={(data as AlbumType).id} type="text" />
      <DataRow name="Владелец" content={(relatedData as UserType).name} type="link" url={relatedPath} />
      <DataRow name="Название" content={(data as AlbumType).title} type="text" />
    </div>
  );
};

export default AlbumsDetails;
