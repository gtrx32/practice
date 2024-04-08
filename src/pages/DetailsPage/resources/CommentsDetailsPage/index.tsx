import s from "./CommentsDetailsPage.module.scss";
import DetailsData from "../../DetailsData";

interface CommentsDetailsPageProps {
  data: CommentType;
  relatedData: RelatedDataType | null;
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
        content: (relatedData as PostType).title,
        type: "link",
        url: relatedPath,
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
