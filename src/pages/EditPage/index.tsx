import { useLocation } from "react-router-dom";
import TopPanel from "../../components/TopPanel";
import s from "./EditPage.module.scss";
import Container from "../../components/UI/Container";
import { Suspense, lazy } from "react";
import LoadingSpinner from "../../components/LoadingSpinner";

const EditUser = lazy(() => import("./_components/EditUser"));
const EditTodo = lazy(() => import("./_components/EditTodo"));
const EditPhoto = lazy(() => import("./_components/EditPhoto"));
const EditAlbum = lazy(() => import("./_components/EditAlbum"));
const EditPost = lazy(() => import("./_components/EditPost"));
const EditComment = lazy(() => import("./_components/EditComment"));

interface EditPageProps {}

const EditPage: React.FC<EditPageProps> = () => {
  const location = useLocation();
  const { pathname } = location;
  const [table, id] = pathname.split("/").slice(1);

  return (
    <Container className={s.container}>
      <TopPanel dataType={table} pageType="edit" id={id} />
      <Suspense fallback={<LoadingSpinner />}>
        {(() => {
          switch (table) {
            case "users":
              return <EditUser id={parseInt(id)} />;
            case "todos":
              return <EditTodo id={parseInt(id)} />;
            case "photos":
              return <EditPhoto id={parseInt(id)} />;
            case "albums":
              return <EditAlbum id={parseInt(id)} />;
            case "posts":
              return <EditPost id={parseInt(id)} />;
            case "comments":
              return <EditComment id={parseInt(id)} />;
            default:
              return null;
          }
        })()}
      </Suspense>
    </Container>
  );
};

export default EditPage;
