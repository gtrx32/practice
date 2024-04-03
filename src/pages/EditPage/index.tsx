import { useLocation } from "react-router-dom";
import TopPanel from "../../components/TopPanel";
import s from "./EditPage.module.scss";
import Container from "../../components/UI/Container";
import EditUser from "./_components/EditUser";
import EditTodo from "./_components/EditTodo";
import EditPhoto from "./_components/EditPhoto";
import EditAlbum from "./_components/EditAlbum";
import EditPost from "./_components/EditPost";
import EditComment from "./_components/EditComment";

interface EditPageProps {
  edit?: boolean;
}

const EditPage: React.FC<EditPageProps> = ({ edit = true }) => {
  const { pathname } = useLocation();
  const [table, id] = pathname.split("/").slice(1);

  return (
    <Container className={s.container}>
      <TopPanel pageType={edit ? "edit" : "create"} id={id} />
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
    </Container>
  );
};

export default EditPage;
