import { useLocation } from "react-router-dom";
import TopPanel from "../../components/TopPanel";
import s from "./EditPage.module.scss";
import Container from "../../components/UI/Container";
import EditPhoto from "./_components/EditPhoto";
import EditUser from "./_components/EditUser";
import EditAlbum from "./_components/EditAlbum";
import EditTodo from "./_components/EditTodo";
import EditComment from "./_components/EditComment";
import EditPost from "./_components/EditPost";

interface EditPageProps {}

const EditPage: React.FC<EditPageProps> = () => {
  const location = useLocation();
  const { pathname } = location;
  const [table, id] = pathname.split("/").slice(1);

  return (
    <Container className={s.container}>
      <TopPanel dataType={table} pageType="edit" id={id} />
      {(() => {
        switch (table) {
          case "users":
            return <EditUser />;
          case "todos":
            return <EditTodo />;
          case "photos":
            return <EditPhoto />;
          case "albums":
            return <EditAlbum />;
          case "posts":
            return <EditPost />;
          case "comments":
            return <EditComment />;
          default:
            return null;
        }
      })()}
    </Container>
  );
};

export default EditPage;
