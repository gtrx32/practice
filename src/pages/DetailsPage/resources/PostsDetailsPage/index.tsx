import s from "./PostsDetailsPage.module.scss";
import DetailsData from "../../_components/DetailsData";

interface PostsDetailsPageProps {
  data: PostType;
  relatedData: RelatedDataType;
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
        content: data.userId,
        type: "link",
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
