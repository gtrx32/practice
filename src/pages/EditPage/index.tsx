import { useLocation } from "react-router-dom";
import TopPanel from "../../components/TopPanel";
import s from "./EditPage.module.scss";
import Container from "../../components/UI/Container";

interface EditPageProps {}

const EditPage: React.FC<EditPageProps> = () => {
  const location = useLocation();
  const { pathname } = location;
  const [table, id] = pathname.split("/").slice(1);

  return (
    <Container className={s.container}>
      <TopPanel dataType={table} pageType="edit" id={id} />
    </Container>
  );
};

export default EditPage;
