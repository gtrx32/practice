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

interface EditPageProps {
  edit?: boolean;
}

const EditPage: React.FC<EditPageProps> = ({ edit = true }) => {
  const location = useLocation();
  const { pathname } = location;
  const [table, id] = pathname.split("/").slice(1);

  return (
    <Container className={s.container}>
      <TopPanel table={table} pageType={edit ? "edit" : "create"} id={id} />
      <Suspense fallback={<LoadingSpinner />}>
        {(() => {
          switch (table) {
            case "users":
              return <EditUser id={parseInt(id)} edit={edit} />;
            case "todos":
              return <EditTodo id={parseInt(id)} edit={edit} />;
            case "photos":
              return <EditPhoto id={parseInt(id)} edit={edit} />;
            case "albums":
              return <EditAlbum id={parseInt(id)} edit={edit} />;
            case "posts":
              return <EditPost id={parseInt(id)} edit={edit} />;
            case "comments":
              return <EditComment id={parseInt(id)} edit={edit} />;
            default:
              return null;
          }
        })()}
      </Suspense>
    </Container>
  );
};

export default EditPage;
