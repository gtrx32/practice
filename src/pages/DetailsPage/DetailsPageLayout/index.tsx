import { useContext } from "react";
import s from "./DetailsPageLayout.module.scss";
import Container from "../../../components/UI/Container";
import TopPanel from "../../../components/TopPanel";
import ResourceNameContext from "../../../context/ResourceNameContext";
import UserLinks from "../../../components/UserLinks";
import UsersDetailsPage from "../resources/UsersDetailsPage";
import AlbumsDetailsPage from "../resources/AlbumsDetailsPage";
import CommentsDetailsPage from "../resources/CommentsDetailsPage";
import PhotosDetailsPage from "../resources/PhotosDetailsPage";
import PostsDetailsPage from "../resources/PostsDetailsPage";
import TodosDetailsPage from "../resources/TodosDetailsPage";

interface DetailsPageLayoutProps {
  data: DataType;
  relatedData: RelatedDataType | null;
  relatedPath: string;
}

const DetailsPageLayout: React.FC<DetailsPageLayoutProps> = ({ data, relatedData, relatedPath }) => {
  const resourceName = useContext(ResourceNameContext);

  return (
    <Container className={s.container}>
      <TopPanel pageType="details" />

      {resourceName === "users" && (
        <>
          <UserLinks />
          <UsersDetailsPage data={data as UserType} />
        </>
      )}
      {resourceName === "todos" && (
        <TodosDetailsPage data={data as TodoType} relatedData={relatedData} relatedPath={relatedPath} />
      )}
      {resourceName === "photos" && (
        <PhotosDetailsPage data={data as PhotoType} relatedData={relatedData} relatedPath={relatedPath} />
      )}
      {resourceName === "albums" && (
        <AlbumsDetailsPage data={data as AlbumType} relatedData={relatedData} relatedPath={relatedPath} />
      )}
      {resourceName === "posts" && (
        <PostsDetailsPage data={data as PostType} relatedData={relatedData} relatedPath={relatedPath} />
      )}
      {resourceName === "comments" && (
        <CommentsDetailsPage data={data as CommentType} relatedData={relatedData} relatedPath={relatedPath} />
      )}
    </Container>
  );
};

export default DetailsPageLayout;
