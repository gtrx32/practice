import DetailsData from "../../DetailsData";
import s from "./AlbumsDetailsPage.module.scss";

interface AlbumsDetailsPageProps {
  data: AlbumType;
  relatedData: RelatedDataType | null;
  relatedPath: string;
}

const AlbumsDetailsPage: React.FC<AlbumsDetailsPageProps> = ({ data, relatedData, relatedPath }) => (
  <DetailsData
    rows={[
      {
        name: "id:",
        content: data.id,
        type: "text",
      },
      {
        name: "Владелец:",
        content: (relatedData as UserType).name,
        type: "link",
        url: relatedPath,
      },
      {
        name: "Название:",
        content: data.title,
        type: "text",
      },
    ]}
  />
);

export default AlbumsDetailsPage;
