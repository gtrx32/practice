import s from "./PhotosDetailsPage.module.scss";
import DetailsData from "../../_components/DetailsData";

interface PhotosDetailsPageProps {
  data: PhotoType;
  relatedData: RelatedDataType;
  relatedPath: string;
}

const PhotosDetailsPage: React.FC<PhotosDetailsPageProps> = ({ data, relatedData, relatedPath }) => (
  <DetailsData
    rows={[
      {
        name: "id:",
        content: data.id,
        type: "text",
      },
      {
        name: "Название:",
        content: data.title,
        type: "text",
      },
      {
        name: "Альбом:",
        content: data.albumId,
        type: "link",
      },
      {
        name: "Превью:",
        content: data.thumbnailUrl,
        type: "image",
      },
      {
        name: "Превью:",
        content: data.url,
        type: "image",
      },
    ]}
  />
);

export default PhotosDetailsPage;
