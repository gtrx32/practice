import { useContext } from "react";
import DetailsDataContext from "../../../../context/DetailsDataContext";
import DataRow from "../../_components/DataRow";

const CommentsDetails = () => {
  const { data, relatedData, relatedPath } = useContext(DetailsDataContext);

  return (
    <div>
      <DataRow name="id" content={(data as CommentType).id} type="text" />
      <DataRow name="Пост" content={(relatedData as PostType).title} type="link" url={relatedPath} />
      <DataRow name="Email автора" content={(data as CommentType).email} type="email" />
      <DataRow name="Текст комментария" content={(data as CommentType).body} type="text" />
    </div>
  );
};

export default CommentsDetails;
