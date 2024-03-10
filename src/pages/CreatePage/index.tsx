import { useLocation } from "react-router-dom";
import TopPanel from "../../components/TopPanel";
import s from "./CreatePage.module.scss";
import Container from "../../components/UI/Container";

interface CreatePageProps {}

const CreatePage: React.FC<CreatePageProps> = () => {
  const location = useLocation();
  const { pathname } = location;
  const [table, id] = pathname.split("/").slice(1);

  return (
    <Container className={s.container}>
      <TopPanel dataType={table} pageType="create" id={id} />
    </Container>
  );
};

export default CreatePage;
