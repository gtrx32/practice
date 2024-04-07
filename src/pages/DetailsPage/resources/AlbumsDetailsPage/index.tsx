import DetailsData from "../../_components/DetailsData";
import s from "./AlbumsDetailsPage.module.scss";

interface AlbumsDetailsPageProps {
  data: AlbumType;
  relatedData: RelatedDataType;
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
        content: data.userId,
        type: "link",
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
