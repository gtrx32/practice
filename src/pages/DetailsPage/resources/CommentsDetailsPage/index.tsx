import s from "./CommentsDetailsPage.module.scss";
import DetailsData from "../../_components/DetailsData";

interface CommentsDetailsPageProps {
  data: CommentType;
  relatedData: RelatedDataType;
  relatedPath: string;
}

const CommentsDetailsPage: React.FC<CommentsDetailsPageProps> = ({ data, relatedData, relatedPath }) => (
  <DetailsData
    rows={[
      {
        name: "id:",
        content: data.id,
        type: "text",
      },
      {
        name: "Пост:",
        content: data.postId,
        type: "link",
      },
      {
        name: "Email автора:",
        content: data.email,
        type: "email",
      },
      {
        name: "Текст комментария:",
        content: data.body,
        type: "text",
      },
    ]}
  />
);

export default CommentsDetailsPage;
