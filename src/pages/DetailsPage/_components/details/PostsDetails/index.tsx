import { useContext } from "react";
import DetailsDataContext from "../../../../../context/DetailsDataContext";
import DataRow from "../../../_components/DataRow";

const PostsDetails = () => {
  const { data, relatedData, relatedPath } = useContext(DetailsDataContext);

  return (
    <div>
      <DataRow name="id" content={(data as PostType).id} type="text" />
      <DataRow name="Автор" content={(relatedData as UserType).name} type="link" url={relatedPath} />
      <DataRow name="Заголовок" content={(data as PostType).title} type="text" />
      <DataRow name="Текст поста" content={(data as PostType).body} type="text" />
    </div>
  );
};

export default PostsDetails;
