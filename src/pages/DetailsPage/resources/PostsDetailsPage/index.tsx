import s from "./PostsDetailsPage.module.scss";
import DetailsData from "../../DetailsData";

interface PostsDetailsPageProps {
  data: PostType;
  relatedData: RelatedDataType | null;
  relatedPath: string;
}

const PostsDetailsPage: React.FC<PostsDetailsPageProps> = ({ data, relatedData, relatedPath }) => (
  <DetailsData
    rows={[
      {
        name: "id:",
        content: data.id,
        type: "text",
      },
      {
        name: "Автор:",
        content: (relatedData as UserType).name,
        type: "link",
        url: relatedPath,
      },
      {
        name: "Заголовок:",
        content: data.title,
        type: "text",
      },
      {
        name: "Текст поста:",
        content: data.body,
        type: "text",
      },
    ]}
  />
);

export default PostsDetailsPage;
