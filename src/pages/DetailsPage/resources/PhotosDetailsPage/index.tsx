import s from "./PhotosDetailsPage.module.scss";
import DetailsData from "../../DetailsData";

interface PhotosDetailsPageProps {
  data: PhotoType;
  relatedData: RelatedDataType | null;
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
        content: (relatedData as AlbumType).title,
        type: "link",
        url: relatedPath,
      },
      {
        name: "Превью:",
        content: data.thumbnailUrl,
        type: "image",
      },
      {
        name: "Изображение:",
        content: data.url,
        type: "image",
      },
    ]}
  />
);

export default PhotosDetailsPage;
