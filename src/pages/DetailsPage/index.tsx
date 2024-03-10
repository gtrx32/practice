import { useLocation } from "react-router-dom";
import TopPanel from "../../components/TopPanel";
import s from "./DetailsPage.module.scss";
import Container from "../../components/UI/Container";

interface DetailsPageProps {}

const DetailsPage: React.FC<DetailsPageProps> = () => {
  const location = useLocation();
  const { pathname } = location;
  const [table, id] = pathname.split("/").slice(1);

  return (
    <Container className={s.container}>
      <TopPanel dataType={table} pageType="details" id={id} />
    </Container>
  );
};
export default DetailsPage;
